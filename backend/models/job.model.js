import mongoose, { Mongoose } from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Requirement: [{ type: String }],
  Salary: {
    type: Number,
    required: true,
  },
  Location: {
    type: String,
    required: true,
  },
  JobType: {
    type: String,
    required: true,
  },
  Position: {
    type: Number,
    required: true,
  },
  Company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  Created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // This is because the person who is going to create the job is also a user at the end
    required: false,
  },
});
