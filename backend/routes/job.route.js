import express from "express";
import {
  postjob,
  getAllJobs,
  getjobsbyId,
  getAdminjobs,
} from "../controllers/job.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/post").post(isAuthenticated, postjob);
router.route("/get").get(isAuthenticated, getAllJobs);
router.route("/getAdminjobs").get(isAuthenticated, getAdminjobs);
router.route("/get/:id").get(isAuthenticated, getjobsbyId);

export default router;
