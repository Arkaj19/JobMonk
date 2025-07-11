// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../ui/table";
// import { Avatar, AvatarImage } from "../ui/avatar";
// import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
// import { Edit2, MoreHorizontal } from "lucide-react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const CompaniesTable = () => {
//   // Add default empty array and loading state
//   const {
//     companies = [],
//     loading = false,
//     searchCompanyByText,
//   } = useSelector((store) => store.company);

//   const [filterCompany, setFilterCompany] = useState(companies);
//   const navigate = useNavigate();
//   useEffect(() => {
//     const filteredCompany =
//       companies.length >= 0 &&
//       companies.filter((company) => {
//         if (!searchCompanyByText) {
//           return true;
//         }
//         return company?.name
//           ?.toLowerCase()
//           .includes(searchCompanyByText.toLowerCase());
//       });
//     setFilterCompany(filteredCompany);
//   }, [companies, searchCompanyByText]);

//   if (loading) {
//     return <div className="text-center py-4">Loading companies...</div>;
//   }

//   return (
//     <div>
//       <Table>
//         <TableCaption>A List of your recent registered companies</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Logo</TableHead>
//             <TableHead>Name</TableHead>
//             <TableHead>Date</TableHead>
//             <TableHead className="text-right">Action</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {companies.length === 0 ? (
//             <TableRow>
//               <TableCell colSpan={4} className="text-center py-4">
//                 No companies found. Create one to get started.
//               </TableCell>
//             </TableRow>
//           ) : (
//             filterCompany.map((company) => (
//               <TableRow key={company._id}>
//                 <TableCell>
//                   <Avatar>
//                     <AvatarImage src={company.logo} />
//                   </Avatar>
//                 </TableCell>
//                 <TableCell>{company.name}</TableCell>
//                 <TableCell>
//                   {company.createdAt ? company.createdAt.split("T")[0] : "N/A"}
//                 </TableCell>
//                 <TableCell className="text-right cursor-pointer">
//                   <Popover>
//                     <PopoverTrigger>
//                       <MoreHorizontal />
//                     </PopoverTrigger>
//                     <PopoverContent className="w-32">
//                       <div
//                         onClick={() =>
//                           navigate(`/admin/companies/${company._id}`)
//                         }
//                         className="flex items-center gap-2 w-fit cursor-pointer"
//                       >
//                         <Edit2 className="w-4" />
//                         <span>Edit</span>
//                       </div>
//                     </PopoverContent>
//                   </Popover>
//                 </TableCell>
//               </TableRow>
//             ))
//           )}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default CompaniesTable;

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CompaniesTable = () => {
  // Add default empty array and loading state
  const {
    companies = [],
    loading = false,
    searchCompanyByText,
  } = useSelector((store) => store.company);

  const [filterCompany, setFilterCompany] = useState(companies);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredCompany =
      companies.length >= 0 &&
      companies.filter((company) => {
        if (!searchCompanyByText) {
          return true;
        }
        return company?.name
          ?.toLowerCase()
          .includes(searchCompanyByText.toLowerCase());
      });
    setFilterCompany(filteredCompany);
  }, [companies, searchCompanyByText]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-gray-600 font-medium">
          Loading companies...
        </span>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <Table>
        <TableCaption className="text-sm text-gray-500 py-4 bg-gray-50">
          A list of your recent registered companies
        </TableCaption>
        <TableHeader className="bg-gray-50">
          <TableRow className="hover:bg-gray-100 transition-colors">
            <TableHead className="font-semibold text-gray-700 py-4 px-6">
              Logo
            </TableHead>
            <TableHead className="font-semibold text-gray-700 py-4 px-6">
              Name
            </TableHead>
            <TableHead className="font-semibold text-gray-700 py-4 px-6">
              Date
            </TableHead>
            <TableHead className="font-semibold text-gray-700 py-4 px-6 text-right">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={4}
                className="text-center py-16 text-gray-500"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <MoreHorizontal className="w-6 h-6 text-gray-400" />
                  </div>
                  <p className="text-lg font-medium text-gray-600">
                    No companies found
                  </p>
                  <p className="text-sm text-gray-400">
                    Create one to get started
                  </p>
                </div>
              </TableCell>
            </TableRow>
          ) : (
            filterCompany.map((company) => (
              <TableRow
                key={company._id}
                className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
              >
                <TableCell className="py-4 px-6">
                  <Avatar className="w-10 h-10 border-2 border-gray-200 shadow-sm">
                    <AvatarImage
                      src={company.logo}
                      className="w-full h-full object-contain"
                      alt={`${company.name} logo`}
                    />
                  </Avatar>
                </TableCell>
                <TableCell className="py-4 px-6">
                  <div className="font-medium text-gray-900 truncate max-w-xs">
                    {company.name}
                  </div>
                </TableCell>
                <TableCell className="py-4 px-6">
                  <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-md">
                    {company.createdAt
                      ? company.createdAt.split("T")[0]
                      : "N/A"}
                  </span>
                </TableCell>
                <TableCell className="py-4 px-6 text-right">
                  <Popover>
                    <PopoverTrigger className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <MoreHorizontal className="w-4 h-4 text-gray-500" />
                    </PopoverTrigger>
                    <PopoverContent className="w-36 p-2 shadow-lg border border-gray-200">
                      <div
                        onClick={() =>
                          navigate(`/admin/companies/${company._id}`)
                        }
                        className="flex items-center gap-3 w-full cursor-pointer px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                      >
                        <Edit2 className="w-4 h-4" />
                        <span className="font-medium">Edit</span>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
