import { setLoading } from "@/redux/authSlice";
import { setAdminJobs } from "@/redux/jobSlice";
import { JOB_API_END_POINT } from "@/utils/constants";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const usegetAllAdminJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllAdminJobs = async () => {
      try {
        dispatch(setLoading(true)); // version 1.2
        const res = await axios.get(`${JOB_API_END_POINT}/getAdminjobs`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setAdminJobs(res.data.jobs));
        }
      } catch (error) {
        toast.error("Failed to fetch jobs");
        console.log(error);
      } finally {
        // verison 1.2
        dispatch(setLoading(false));
      }
      /////////////////
    };
    fetchAllAdminJobs();
  }, []);
  // }; version 1.2 deletion

  // version 1.2

  const deleteJob = async (jobId) => {
    try {
      dispatch(setLoading(true));
      const res = await axios.delete(`${JOB_API_END_POINT}/delete/${jobId}`, {
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success("Job deleted successfully");
        return true;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to delete job");
      return false;
    } finally {
      dispatch(setLoading(false));
    }
  };

  return { deleteJob };
};

export default usegetAllAdminJobs;
