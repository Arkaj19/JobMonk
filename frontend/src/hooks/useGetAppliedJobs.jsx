// import { setallAppliedJobs } from "@/redux/jobSlice";
// import { APPLICATION_API_END_POINT } from "@/utils/constants";
// import axios from "axios";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";

// const useGetAppliedJobs = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchAppliedJobs = async () => {
//       try {
//         const res = await axios.get(`${APPLICATION_API_END_POINT}/getapplied`, {
//           withCredentials: true,
//         });
//         console.log(res.data);

//         if (res.data.success) {
//           dispatch(setallAppliedJobs(res.data.application));
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchAppliedJobs();
//   }, []);
// };

// export default useGetAppliedJobs;

import { setallAppliedJobs } from "@/redux/jobSlice";
import { APPLICATION_API_END_POINT } from "@/utils/constants";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAppliedJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        console.log("🔄 Hook called - Starting to fetch applied jobs...");
        console.log(
          "📍 API Endpoint:",
          `${APPLICATION_API_END_POINT}/getapplied`
        );

        const res = await axios.get(`${APPLICATION_API_END_POINT}/getapplied`, {
          withCredentials: true,
        });

        console.log("✅ Full API Response:", res);
        console.log("📊 Response data:", res.data);
        console.log("🎯 Success status:", res.data.success);
        console.log("📋 Applications array:", res.data.application);
        console.log("🔢 Number of applications:", res.data.application?.length);

        if (res.data.success) {
          console.log("🚀 About to dispatch to Redux...");
          console.log("📤 Dispatching data:", res.data.application);

          dispatch(setallAppliedJobs(res.data.application));

          console.log("✅ Dispatch completed!");
        } else {
          console.log("❌ API returned success: false");
        }
      } catch (error) {
        console.log("💥 Error in hook:", error);
        console.log("🔍 Error details:", error.response?.data);
      }
    };
    fetchAppliedJobs();
  }, [dispatch]);
};

export default useGetAppliedJobs;
