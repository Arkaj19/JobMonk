// import React from "react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "./ui/table";
// import { Badge } from "./ui/badge";

// const AppliedJobstables = () => {
//   return (
//     <div>
//       <Table>
//         <TableCaption>List Of your Applied Jobs</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Date</TableHead>
//             <TableHead>Job Role</TableHead>
//             <TableHead>Company</TableHead>
//             <TableHead className="text-right">Status</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {[1, 2, 3, 4].map((item, index) => (
//             <TableRow key={index}>
//               <TableCell>04-07-2024</TableCell>
//               <TableCell>FrontEnd Developer</TableCell>
//               <TableCell>Google</TableCell>
//               <TableCell className="text-right">
//                 <Badge>Selected</Badge>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default AppliedJobstables;

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";

const AppliedJobstables = () => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-lg">
      <Table className="w-full">
        <TableCaption className="text-lg font-semibold text-gray-700 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
          📊 List Of your Applied Jobs
        </TableCaption>
        <TableHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
          <TableRow className="hover:bg-gray-100 transition-colors duration-200">
            <TableHead className="font-bold text-gray-800 py-4 px-6 text-center border-r border-gray-200">
              📅 Date
            </TableHead>
            <TableHead className="font-bold text-gray-800 py-4 px-6 text-center border-r border-gray-200">
              💼 Job Role
            </TableHead>
            <TableHead className="font-bold text-gray-800 py-4 px-6 text-center border-r border-gray-200">
              🏢 Company
            </TableHead>
            <TableHead className="font-bold text-gray-800 py-4 px-6 text-center">
              📈 Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white">
          {[1, 2, 3, 4].map((item, index) => (
            <TableRow
              key={index}
              className="hover:bg-blue-50 transition-all duration-200 border-b border-gray-100 last:border-b-0 group"
            >
              <TableCell className="py-4 px-6 font-medium text-gray-700 border-r border-gray-100 group-hover:text-gray-900 transition-colors duration-200 text-center">
                04-07-2024
              </TableCell>
              <TableCell className="py-4 px-6 font-semibold text-gray-800 border-r border-gray-100 group-hover:text-blue-700 transition-colors duration-200 text-center">
                FrontEnd Developer
              </TableCell>
              <TableCell className="py-4 px-6 font-medium text-gray-700 border-r border-gray-100 group-hover:text-gray-900 transition-colors duration-200 text-center">
                Google
              </TableCell>
              <TableCell className="py-4 px-6 text-center">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200 transition-colors duration-200 px-3 py-1 font-semibold shadow-sm border border-green-200">
                  ✅ Selected
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobstables;
