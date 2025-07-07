import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  APPLICATION_API_END_POINT,
  JOB_API_END_POINT,
} from "@/utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setSingleJob } from "@/redux/jobSlice";
import { toast } from "sonner";

const JobDescription = () => {
  const { singlejob } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);

  const params = useParams();
  const jobId = params.id;
  const dispatch = useDispatch();

  const isInitiallyApplied =
    singlejob?.applications?.some(
      (application) => application.applicant === user?._id
    ) || false;
  const [isApplied, setIsApplied] = useState(isInitiallyApplied);

  const applyJobHandler = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_END_POINT}/apply/${jobId}`,
        {
          withCredentials: true,
        }
      );
      console.log(res.data);

      if (res.data.success) {
        setIsApplied(true); // update the local state
        const updatedSingleJob = {
          ...singlejob,
          applications: [...singlejob.applications, { applicant: user?._id }],
        };
        dispatch(setSingleJob(updatedSingleJob)); // helps us to real time UI update
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
          withCredentials: true,
        });
        // console.log(res);
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
          setIsApplied(
            res.data.job.application.some(
              (application) => application.applicant === user?._id
            )
          ); // Ensure the state is in sync with fetched data
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

  return (
    <div className="max-w-7xl mx-auto my-10 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <div className="flex items-center justify-between pb-6 border-b border-gray-200">
        <div>
          <h1 className="font-bold text-2xl text-gray-900 mb-4">
            {singlejob?.title}
          </h1>
          <div className="flex items-center gap-3 mt-6 flex-wrap">
            <Badge
              className="bg-blue-100 text-blue-800 font-medium hover:bg-blue-200 transition-colors duration-200 border border-blue-200 px-3 py-1.5 rounded-md"
              variant="ghost"
            >
              {singlejob?.position} Positions
            </Badge>
            <Badge
              className="bg-green-100 text-green-800 font-medium hover:bg-green-200 transition-colors duration-200 border border-green-200 px-3 py-1.5 rounded-md"
              variant="ghost"
            >
              {singlejob?.jobType}
            </Badge>
            <Badge
              className="bg-purple-100 text-purple-800 font-medium hover:bg-purple-200 transition-colors duration-200 border border-purple-200 px-3 py-1.5 rounded-md"
              variant="ghost"
            >
              {singlejob?.salary} LPA
            </Badge>
          </div>
        </div>
        <Button
          onClick={isApplied ? null : applyJobHandler}
          disabled={isApplied}
          className={`rounded-lg px-6 py-2 font-semibold transition-all duration-200 ${
            isApplied
              ? "bg-gray-400 cursor-not-allowed text-white"
              : "bg-[#7209b7] hover:bg-[#5f32ad] text-white shadow-md hover:shadow-lg"
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>
      <h1 className="border-b-2 border-b-gray-300 font-semibold py-4 text-xl text-gray-800">
        Job Description
      </h1>
      <div className="my-6 space-y-4">
        <h1 className="font-semibold text-gray-900 py-2 border-b border-gray-100">
          Role:
          <span className="pl-4 font-normal text-gray-700">
            {singlejob?.title}
          </span>
        </h1>
        <h1 className="font-semibold text-gray-900 py-2 border-b border-gray-100">
          Location:
          <span className="pl-4 font-normal text-gray-700">
            {singlejob?.location}
          </span>
        </h1>
        <h1 className="font-semibold text-gray-900 py-2 border-b border-gray-100">
          Description:
          <span className="pl-4 font-normal text-gray-700">
            {singlejob?.description}
          </span>
        </h1>
        <h1 className="font-semibold text-gray-900 py-2 border-b border-gray-100">
          Experience:
          <span className="pl-4 font-normal text-gray-700">
            {singlejob?.experienceLevel} yrs
          </span>
        </h1>
        <h1 className="font-semibold text-gray-900 py-2 border-b border-gray-100">
          Salary:
          <span className="pl-4 font-normal text-gray-700">
            {singlejob?.salary} LPA
          </span>
        </h1>
        <h1 className="font-semibold text-gray-900 py-2 border-b border-gray-100">
          Total Applicants:
          <span className="pl-4 font-normal text-gray-700">
            {singlejob?.application?.length}
          </span>
        </h1>
        <h1 className="font-semibold text-gray-900 py-2 border-b border-gray-100">
          Posted Date:
          <span className="pl-4 font-normal text-gray-700">
            {singlejob?.createdAt.split("T")[0]}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default JobDescription;
