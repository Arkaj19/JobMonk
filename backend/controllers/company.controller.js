import { Company } from "../models/company.model.js";
// First we need to register a company
export const registerCompany = async (req, res) => {
  try {
    const { companyName, description } = req.body;
    if (!companyName) {
      return res.status(400).json({
        message: "Company name is required",
        success: false,
      });

      if (!description) {
        return res.status(400).json({
          message: "Company description is required",
          success: false,
        });
      }
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
      description: description,
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

    const updateData = { name, description, website, location };

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
