// import React, { useEffect, useState } from "react";
// import Navbar from "./shared/Navbar";
// import FilterCard from "./FilterCard";
// import Job from "./Job";
// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";

// const Jobs = () => {
//   const { allJobs, searchedQuery } = useSelector((store) => store.job);
//   const [filterJobs, setFilterJobs] = useState(allJobs);

//   useEffect(() => {
//     if (searchedQuery) {
//       const filteredJobs = allJobs.filter((job) => {
//         return (
//           job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
//           job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
//           job.location.toLowerCase().includes(searchedQuery.toLowerCase())
//         );
//       });
//       setFilterJobs(filteredJobs);
//     } else {
//       setFilterJobs(allJobs);
//     }
//   }, [allJobs, searchedQuery]);
//   return (
//     <div>
//       <Navbar />
//       <div className="max-w-7xl mx-auto mt-5">
//         <div className="flex gap-5">
//           <div className="w-20%">
//             <FilterCard />
//           </div>
//           {filterJobs.length <= 0 ? (
//             <span>Job Not Found</span>
//           ) : (
//             // Since earlier we have done width 20% so writing flex-1 will take the rest"
//             <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
//               <div className="grid grid-cols-3 gap-4">
//                 {filterJobs.map((job) => (
//                   <motion.div
//                     initial={{ opacity: 0, x: 100 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -100 }}
//                     transition={{ duration: 0.3 }}
//                     key={job?._id}
//                   >
//                     <Job job={job} />
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Jobs;

// Changed 1.1

// import React, { useEffect, useState } from "react";
// import Navbar from "./shared/Navbar";
// import FilterCard from "./FilterCard";
// import Job from "./Job";
// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";

// const Jobs = () => {
//   const { allJobs, searchedQuery } = useSelector((store) => store.job);
//   const [filterJobs, setFilterJobs] = useState(allJobs);

//   useEffect(() => {
//     if (searchedQuery) {
//       const filteredJobs = allJobs.filter((job) => {
//         return (
//           job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
//           job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
//           job.location.toLowerCase().includes(searchedQuery.toLowerCase())
//         );
//       });
//       setFilterJobs(filteredJobs);
//     } else {
//       setFilterJobs(allJobs);
//     }
//   }, [allJobs, searchedQuery]);

//   return (
//     <div>
//       <Navbar />
//       <div className="max-w-7xl mx-auto mt-5">
//         <div className="flex gap-5">
//           <div className="w-20%">
//             <FilterCard />
//           </div>
//           {filterJobs.length <= 0 ? (
//             <div className="flex-1 flex items-center justify-center">
//               <span className="text-gray-500 text-lg">Job Not Found</span>
//             </div>
//           ) : (
//             <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
//               <div className="grid grid-cols-3 gap-4">
//                 {filterJobs.map((job) => (
//                   <motion.div
//                     initial={{ opacity: 0, x: 100 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -100 }}
//                     transition={{ duration: 0.3 }}
//                     key={job?._id}
//                   >
//                     <Job job={job} />
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Jobs;

//Version 1.2

import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { setSearchedQuery } from "@/redux/jobSlice";

const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);
  // Version 1.3
  const dispatch = useDispatch();

  // Clear searchedQuery when component mounts to show all jobs initially
  useEffect(() => {
    dispatch(setSearchedQuery(""));
  }, [dispatch]);

  ///////////////////

  useEffect(() => {
    if (searchedQuery) {
      // Split the search query to get individual filter terms
      const filterTerms = searchedQuery
        .split(" ")
        .filter((term) => term !== "");

      const filteredJobs = allJobs.filter((job) => {
        // Check if job matches ALL filter terms
        return filterTerms.every(
          (term) =>
            job.title.toLowerCase().includes(term.toLowerCase()) ||
            job.description.toLowerCase().includes(term.toLowerCase()) ||
            job.location.toLowerCase().includes(term.toLowerCase()) ||
            job.company?.name.toLowerCase().includes(term.toLowerCase())
        );
      });
      setFilterJobs(filteredJobs);
    } else {
      setFilterJobs(allJobs);
    }
  }, [allJobs, searchedQuery]);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-20%">
            <FilterCard />
          </div>
          {filterJobs.length <= 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Job Not Found</span>
            </div>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {filterJobs.map((job) => (
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    key={job?._id}
                  >
                    <Job job={job} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
