// import React from "react";
// import { Badge } from "./ui/badge";
// import { Button } from "./ui/button";

// const JobDescription = () => {
//   const isApplied = false;
//   return (
//     <div className="max-w-7xl mx-auto my-10">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="font-bold text-xl">Frontend Developer</h1>
//           <div className="flex items-center gap-3 mt-6 flex-wrap">
//             <Badge
//               className="bg-blue-600 text-white font-semibold shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 border border-blue-600 px-3 py-1.5 rounded-full"
//               variant="ghost"
//             >
//               12 Positions
//             </Badge>
//             <Badge
//               className="bg-teal-600 text-white font-semibold shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 border border-teal-600 px-3 py-1.5 rounded-full"
//               variant="ghost"
//             >
//               Full Time
//             </Badge>
//             <Badge
//               className="bg-indigo-700 text-white font-semibold shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 border border-indigo-700 px-3 py-1.5 rounded-full"
//               variant="ghost"
//             >
//               15 LPA
//             </Badge>
//           </div>
//         </div>
//         <Button
//           disabled={isApplied}
//           className={`rounded-lg ${
//             isApplied
//               ? "bg-gray-600 cursor-not-allowed"
//               : "bg-[#7209b7] hover:bg-[#5f32ad]"
//           }`}
//         >
//           {isApplied ? "Already Applied" : "Apply Now"}
//         </Button>
//       </div>
//       <h1 className="border-b-2 border-b-gray-300 font-medium py-4">
//         Job Description
//       </h1>
//       <div className="my-4">
//         <h1 className="font-bold my-1">
//           Role:
//           <span className="pl-4 font-normal text-gray-800">
//             Frontend Developer
//           </span>
//         </h1>
//         <h1 className="font-bold my-1">
//           Location:
//           <span className="pl-4 font-normal text-gray-800">Bengaluru</span>
//         </h1>
//         <h1 className="font-bold my-1">
//           Description:
//           <span className="pl-4 font-normal text-gray-800">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
//             facilis.
//           </span>
//         </h1>
//         <h1 className="font-bold my-1">
//           Experience:
//           <span className="pl-4 font-normal text-gray-800">2 yrs</span>
//         </h1>
//         <h1 className="font-bold my-1">
//           Salary:
//           <span className="pl-4 font-normal text-gray-800">12 LPA</span>
//         </h1>
//         <h1 className="font-bold my-1">
//           Total Applicants:
//           <span className="pl-4 font-normal text-gray-800">4</span>
//         </h1>
//         <h1 className="font-bold my-1">
//           Posted Date:
//           <span className="pl-4 font-normal text-gray-800">04-07-2025</span>
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default JobDescription;

import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const JobDescription = () => {
  const isApplied = false;
  return (
    <div className="max-w-7xl mx-auto my-10 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <div className="flex items-center justify-between pb-6 border-b border-gray-200">
        <div>
          <h1 className="font-bold text-2xl text-gray-900 mb-4">
            Frontend Developer
          </h1>
          <div className="flex items-center gap-3 mt-6 flex-wrap">
            <Badge
              className="bg-blue-100 text-blue-800 font-medium hover:bg-blue-200 transition-colors duration-200 border border-blue-200 px-3 py-1.5 rounded-md"
              variant="ghost"
            >
              12 Positions
            </Badge>
            <Badge
              className="bg-green-100 text-green-800 font-medium hover:bg-green-200 transition-colors duration-200 border border-green-200 px-3 py-1.5 rounded-md"
              variant="ghost"
            >
              Full Time
            </Badge>
            <Badge
              className="bg-purple-100 text-purple-800 font-medium hover:bg-purple-200 transition-colors duration-200 border border-purple-200 px-3 py-1.5 rounded-md"
              variant="ghost"
            >
              15 LPA
            </Badge>
          </div>
        </div>
        <Button
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
            Frontend Developer
          </span>
        </h1>
        <h1 className="font-semibold text-gray-900 py-2 border-b border-gray-100">
          Location:
          <span className="pl-4 font-normal text-gray-700">Bengaluru</span>
        </h1>
        <h1 className="font-semibold text-gray-900 py-2 border-b border-gray-100">
          Description:
          <span className="pl-4 font-normal text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            facilis.
          </span>
        </h1>
        <h1 className="font-semibold text-gray-900 py-2 border-b border-gray-100">
          Experience:
          <span className="pl-4 font-normal text-gray-700">2 yrs</span>
        </h1>
        <h1 className="font-semibold text-gray-900 py-2 border-b border-gray-100">
          Salary:
          <span className="pl-4 font-normal text-gray-700">12 LPA</span>
        </h1>
        <h1 className="font-semibold text-gray-900 py-2 border-b border-gray-100">
          Total Applicants:
          <span className="pl-4 font-normal text-gray-700">4</span>
        </h1>
        <h1 className="font-semibold text-gray-900 py-2 border-b border-gray-100">
          Posted Date:
          <span className="pl-4 font-normal text-gray-700">04-07-2025</span>
        </h1>
      </div>
    </div>
  );
};

export default JobDescription;
