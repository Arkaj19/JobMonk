// import React, { useEffect } from "react";
// import Navbar from "./shared/Navbar";
// import Job from "./Job";
// import { useDispatch, useSelector } from "react-redux";
// import usegetAllJobs from "@/hooks/usegetAllJobs";
// import { setSearchedQuery } from "@/redux/jobSlice";

// const Browse = () => {
//   usegetAllJobs();
//   const { allJobs } = useSelector((store) => store.job);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(setSearchedQuery(""));
//   }, []);
//   return (
//     <div>
//       <Navbar />
//       <div className="max-w-7xl mx-auto my-10">
//         <h1 className="font-bold text-xl my-10">
//           Search Results ({allJobs.length})
//         </h1>
//         <div className="grid grid-cols-3 gap-4">
//           {allJobs.map((job) => {
//             return <Job key={job._id} job={job} />;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Browse;

//Changed 1.1

// import React, { useEffect } from "react";
// import Navbar from "./shared/Navbar";
// import Job from "./Job";
// import { useDispatch, useSelector } from "react-redux";
// import usegetAllJobs from "@/hooks/usegetAllJobs";
// import { setSearchedQuery } from "@/redux/jobSlice";

// const Browse = () => {
//   usegetAllJobs();
//   const { allJobs } = useSelector((store) => store.job);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     // Clear the search query when entering browse page
//     dispatch(setSearchedQuery(""));
//   }, [dispatch]);

//   return (
//     <div>
//       <Navbar />
//       <div className="max-w-7xl mx-auto my-10">
//         <h1 className="font-bold text-xl my-10">
//           Search Results ({allJobs.length})
//         </h1>
//         <div className="grid grid-cols-3 gap-4">
//           {allJobs.map((job) => {
//             return <Job key={job._id} job={job} />;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Browse;

//changed 1.2

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import Job from "./Job";
// Import your Job component
// import Job from "./Job";

const Browse = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const searchedQuery = useSelector((state) => state.job.searchedQuery);
  const allJobs = useSelector((state) => state.job.allJobs || []);

  useEffect(() => {
    console.log("Browse component mounted");
    console.log("Current searchedQuery from Redux:", searchedQuery);
    console.log("Navigation state:", location.state);

    // If there's a search query in navigation state and Redux is empty, use it
    if (location.state?.searchQuery && !searchedQuery) {
      console.log(
        "Setting searchedQuery from navigation state:",
        location.state.searchQuery
      );
      dispatch(setSearchedQuery(location.state.searchQuery));
    }
  }, [location.state, searchedQuery, dispatch]);

  useEffect(() => {
    console.log("searchedQuery changed in Browse:", searchedQuery);
  }, [searchedQuery]);

  // Filter jobs based on searchedQuery
  const filteredJobs = searchedQuery
    ? allJobs.filter(
        (job) =>
          job.title?.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.description
            ?.toLowerCase()
            .includes(searchedQuery.toLowerCase()) ||
          job.company?.name
            ?.toLowerCase()
            .includes(searchedQuery.toLowerCase()) ||
          job.location?.toLowerCase().includes(searchedQuery.toLowerCase())
      )
    : allJobs;

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
        <div className="grid grid-cols-3 gap-4">
          {filteredJobs.length <= 0 ? (
            <span className="text-center col-span-3">No jobs found</span>
          ) : (
            filteredJobs.map((job) => (
              <div key={job?._id}>
                {/* Your Job component */}
                <Job job={job} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Browse;
