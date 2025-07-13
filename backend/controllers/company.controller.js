import { Company } from "../models/company.model.js";
import cloudinary from "../utils/cloudinary.js";
import getDataUri from "../utils/dataUri.js";
import { Job } from "../models/job.model.js";
import { Application } from "../models/application.model.js";
// First we need to register a company
export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;
    if (!companyName) {
      return res.status(400).json({
        message: "Company name is required",
        success: false,
      });

      // if (!description) {
      //   return res.status(400).json({
      //     message: "Company description is required",
      //     success: false,
      //   });
      // }
    }
    let company = await Company.findOne({ name: companyName });
    // checking
    if (company) {
      return res.status(400).json({
        message: "You can't register Same Company again",
        success: false,
      });
    }
    company = await Company.create({
      name: companyName,
      userId: req.id,
    });

    return res.status(201).json({
      message: "Company Registered Successfully",
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCompany = async (req, res) => {
  try {
    const userId = req.id; // logged in user id
    const companies = await Company.find({ userId });
    if (!companies) {
      return res.status(404).json({
        message: "Companies not found",
        success: false,
      });
    }

    return res.status(200).json({
      companies,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// Get Company by Id
export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }
    return res.status(200).json({
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    const file = req.file;
    //idhar cloudinary aayega
    // if (req.file) {
    const fileUri = getDataUri(file);
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
    const logo = cloudResponse.secure_url;
    // }

    const updateData = { name, description, website, location, logo };

    const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if (!company) {
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Company Information Updated",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//Version 1.2

// Delete company and all associated jobs and applications
export const deleteCompany = async (req, res) => {
  try {
    const companyId = req.params.id;
    const userId = req.id; // From auth middleware

    // Find the company and verify ownership
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }

    // Check if the user is the owner of the company
    if (company.userId.toString() !== userId.toString()) {
      return res.status(403).json({
        message: "You don't have permission to delete this company",
        success: false,
      });
    }

    // Find all jobs associated with this company
    const jobs = await Job.find({ company: companyId });

    // Delete all applications for all jobs of this company
    for (const job of jobs) {
      await Application.deleteMany({ job: job._id });
    }

    // Delete all jobs associated with this company
    await Job.deleteMany({ company: companyId });

    // Delete the company itself
    await Company.findByIdAndDelete(companyId);

    return res.status(200).json({
      message: "Company and all associated data deleted successfully",
      success: true,
    });
  } catch (error) {
    console.log("Error deleting company:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
