// import React from "react";
// import { Badge } from "./ui/badge";
// import { useNavigate } from "react-router-dom";

// const Latestjobcards = ({ job }) => {
//   const navigate = useNavigate();
//   return (
//     <div
//       onClick={() => navigate(`/description/${job._id}`)}
//       className="group p-6 rounded-xl shadow-lg bg-white border border-gray-100 hover:shadow-2xl hover:border-gray-200 transition-all duration-300 cursor-pointer relative overflow-hidden"
//     >
//       {/* Subtle gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//       <div className="relative z-10">
//         <div className="mb-4">
//           <h1 className="font-semibold text-xl text-gray-900 tracking-tight">
//             {job?.company?.name}
//           </h1>
//           <p className="text-sm text-gray-500 font-medium mt-1 flex items-center">
//             <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
//             {job?.location}
//           </p>
//         </div>
//         <div className="mb-6">
//           <h1 className="font-bold text-xl text-gray-900 mb-3 leading-tight group-hover:text-blue-700 transition-colors duration-200 my-2">
//             {job?.title}
//           </h1>
//           <p className="text-sm text-gray-600 leading-relaxed">
//             {job?.description}
//           </p>
//         </div>
//         <div className="flex items-center gap-3 mt-4 flex-wrap">
//           <Badge
//             className="bg-blue-600 text-white font-semibold shadow-sm hover:shadow-md transition-shadow duration-200 border border-blue-600 px-3 py-1 rounded-full"
//             variant="ghost"
//           >
//             {job?.position} Positions
//           </Badge>
//           <Badge
//             className="bg-teal-600 text-white font-semibold shadow-sm hover:shadow-md transition-shadow duration-200 border border-teal-600 px-3 py-1 rounded-full"
//             variant="ghost"
//           >
//             {job?.jobType}
//           </Badge>
//           <Badge
//             className="bg-indigo-700 text-white font-semibold shadow-sm hover:shadow-md transition-shadow duration-200 border border-indigo-700 px-3 py-1 rounded-full"
//             variant="ghost"
//           >
//             {job?.salary} LPA
//           </Badge>
//         </div>
//       </div>

//       {/* Subtle corner accent */}
//       <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-20"></div>
//     </div>
//   );
// };

// export default Latestjobcards;

import React from "react";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Latestjobcards = ({ job }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="group p-6 rounded-xl shadow-lg bg-white border border-gray-100 hover:shadow-2xl hover:border-gray-200 hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10">
        <div className="mb-4">
          <h1 className="font-semibold text-xl text-gray-900 tracking-tight">
            {job?.company?.name}
          </h1>
          <p className="text-sm text-gray-500 font-medium mt-1 flex items-center">
            <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
            {job?.location}
          </p>
        </div>
        <div className="mb-6">
          <h1 className="font-bold text-xl text-gray-900 mb-3 leading-tight group-hover:text-blue-700 transition-colors duration-200 my-2">
            {job?.title}
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            {job?.description}
          </p>
        </div>
        <div className="flex items-center gap-3 mt-4 flex-wrap">
          <Badge
            className="bg-blue-600 text-white font-semibold shadow-sm hover:shadow-md transition-shadow duration-200 border border-blue-600 px-3 py-1 rounded-full"
            variant="ghost"
          >
            {job?.position} Positions
          </Badge>
          <Badge
            className="bg-teal-600 text-white font-semibold shadow-sm hover:shadow-md transition-shadow duration-200 border border-teal-600 px-3 py-1 rounded-full"
            variant="ghost"
          >
            {job?.jobType}
          </Badge>
          <Badge
            className="bg-indigo-700 text-white font-semibold shadow-sm hover:shadow-md transition-shadow duration-200 border border-indigo-700 px-3 py-1 rounded-full"
            variant="ghost"
          >
            {job?.salary} LPA
          </Badge>
        </div>
      </div>

      {/* Subtle corner accent */}
      <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-20"></div>
    </div>
  );
};

export default Latestjobcards;
