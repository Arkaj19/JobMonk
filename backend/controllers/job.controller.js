import { Application } from "../models/application.model.js"; // version 1.2
import { Job } from "../models/job.model.js";

//student
export const postjob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirement,
      salary,
      location,
      jobType,
      experience,
      position,
      companyId,
    } = req.body;
    const userId = req.id;

    if (
      !title ||
      !description ||
      !requirement ||
      !salary ||
      !location ||
      !jobType ||
      !experience ||
      !position ||
      !companyId
    ) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }

    const job = await Job.create({
      title,
      description,
      requirement: requirement.split(","),
      salary: Number(salary),
      location,
      jobType,
      experienceLevel: experience,
      position,
      company: companyId,
      created_by: userId,
    });
    return res.status(201).json({
      message: "New Job posted successfully",
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//student
export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };

    const jobs = await Job.find(query)
      .populate({
        path: "company",
      })
      .sort({ createdAt: -1 });
    if (!jobs) {
      return res.status(404).json({
        message: "Jobs not found",
        success: false,
      });
    }
    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//student
export const getjobsbyId = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path: "application",
    });
    if (!job) {
      return res.status(404).json({
        message: "Jobs not found",
        success: false,
      });
    }
    return res.status(200).json({
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//admin kitne job create
export const getAdminjobs = async (req, res) => {
  try {
    const adminId = req.id;
    const jobs = await Job.find({ created_by: adminId }).populate({
      path: "company",
      createdAt: -1,
    });
    if (!jobs) {
      return res.status(404).json({
        message: "Jobs not found",
        success: false,
      });
    }
    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//version 1.2

// Delete job and all associated applications
export const deleteJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    const userId = req.id; // From auth middleware

    // Find the job and verify ownership
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }

    // Check if the user is the creator of the job
    if (job.created_by.toString() !== userId.toString()) {
      return res.status(403).json({
        message: "You don't have permission to delete this job",
        success: false,
      });
    }

    // Delete all applications associated with this job
    await Application.deleteMany({ job: jobId });

    // Delete the job itself
    await Job.findByIdAndDelete(jobId);

    return res.status(200).json({
      message: "Job and all associated applications deleted successfully",
      success: true,
    });
  } catch (error) {
    console.log("Error deleting job:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
