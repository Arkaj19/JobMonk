import express from "express";
import {
  postjob,
  getAllJobs,
  getjobsbyId,
  getAdminjobs,
  deleteJob,
} from "../controllers/job.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/post").post(isAuthenticated, postjob);
router.route("/get").get(isAuthenticated, getAllJobs);
router.route("/getAdminjobs").get(isAuthenticated, getAdminjobs);
router.route("/get/:id").get(isAuthenticated, getjobsbyId);
// version 1.2
router.route("/delete/:id").delete(isAuthenticated, deleteJob);

export default router;
