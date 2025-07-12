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
// import { Edit2, MoreHorizontal, Trash2 } from "lucide-react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import usegetallCompanies from "@/hooks/usegetallCompanies";
// import { toast } from "sonner";

// const CompaniesTable = () => {
//   const {
//     companies = [],
//     loading = false,
//     searchCompanyByText,
//   } = useSelector((store) => store.company);

//   const [filterCompany, setFilterCompany] = useState(companies);
//   const [deleteLoading, setDeleteLoading] = useState(null);
//   const navigate = useNavigate();
//   const { deleteCompanyById } = usegetallCompanies();

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

//   const handleDeleteCompany = async (companyId, companyName) => {
//     // Double confirmation for destructive action
//     const firstConfirm = window.confirm(
//       `Are you sure you want to delete "${companyName}"? This will also delete all jobs and applications associated with this company.`
//     );

//     if (!firstConfirm) return;

//     const secondConfirm = window.confirm(
//       "This action is irreversible. All data will be permanently deleted. Are you absolutely sure?"
//     );

//     if (!secondConfirm) return;

//     setDeleteLoading(companyId);
//     try {
//       const success = await deleteCompanyById(companyId);
//       if (success) {
//         toast.success(`${companyName} deleted successfully`);
//       }
//     } catch (error) {
//       toast.error("Failed to delete company");
//     } finally {
//       setDeleteLoading(null);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center py-12">
//         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
//         <span className="ml-3 text-gray-600 font-medium">
//           Loading companies...
//         </span>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
//       <Table>
//         <TableCaption className="text-sm text-gray-500 py-4 bg-gray-50">
//           A list of your recent registered companies
//         </TableCaption>
//         <TableHeader className="bg-gray-50">
//           <TableRow className="hover:bg-gray-100 transition-colors">
//             <TableHead className="font-semibold text-gray-700 py-4 px-6">
//               Logo
//             </TableHead>
//             <TableHead className="font-semibold text-gray-700 py-4 px-6">
//               Name
//             </TableHead>
//             <TableHead className="font-semibold text-gray-700 py-4 px-6">
//               Date
//             </TableHead>
//             <TableHead className="font-semibold text-gray-700 py-4 px-6 text-right">
//               Action
//             </TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {companies.length === 0 ? (
//             <TableRow>
//               <TableCell
//                 colSpan={4}
//                 className="text-center py-16 text-gray-500"
//               >
//                 <div className="flex flex-col items-center space-y-3">
//                   <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
//                     <MoreHorizontal className="w-6 h-6 text-gray-400" />
//                   </div>
//                   <p className="text-lg font-medium text-gray-600">
//                     No companies found
//                   </p>
//                   <p className="text-sm text-gray-400">
//                     Create one to get started
//                   </p>
//                 </div>
//               </TableCell>
//             </TableRow>
//           ) : (
//             filterCompany.map((company) => (
//               <TableRow
//                 key={company._id}
//                 className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
//               >
//                 <TableCell className="py-4 px-6">
//                   <Avatar className="w-10 h-10 border-2 border-gray-200 shadow-sm">
//                     <AvatarImage
//                       src={company.logo}
//                       className="w-full h-full object-contain"
//                       alt={`${company.name} logo`}
//                     />
//                   </Avatar>
//                 </TableCell>
//                 <TableCell className="py-4 px-6">
//                   <div className="font-medium text-gray-900 truncate max-w-xs">
//                     {company.name}
//                   </div>
//                 </TableCell>
//                 <TableCell className="py-4 px-6">
//                   <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-md">
//                     {company.createdAt
//                       ? company.createdAt.split("T")[0]
//                       : "N/A"}
//                   </span>
//                 </TableCell>
//                 <TableCell className="py-4 px-6 text-right">
//                   <Popover>
//                     <PopoverTrigger className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//                       <MoreHorizontal className="w-4 h-4 text-gray-500" />
//                     </PopoverTrigger>
//                     <PopoverContent className="w-40 p-2 shadow-lg border border-gray-200">
//                       <div
//                         onClick={() =>
//                           navigate(`/admin/companies/${company._id}`)
//                         }
//                         className="flex items-center gap-3 w-full cursor-pointer px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
//                       >
//                         <Edit2 className="w-4 h-4" />
//                         <span className="font-medium">Edit</span>
//                       </div>
//                       <div
//                         onClick={() =>
//                           handleDeleteCompany(company._id, company.name)
//                         }
//                         className="flex items-center gap-3 w-full cursor-pointer px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors"
//                       >
//                         <Trash2 className="w-4 h-4" />
//                         <span className="font-medium">
//                           {deleteLoading === company._id
//                             ? "Deleting..."
//                             : "Delete"}
//                         </span>
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
import { Edit2, MoreHorizontal, Trash2 } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import usegetallCompanies from "@/hooks/usegetallCompanies";
import { toast } from "sonner";
import DeleteCompanyModal from "./DeleteCompanyModal"; // Import the new modal

const CompaniesTable = () => {
  const {
    companies = [],
    loading = false,
    searchCompanyByText,
  } = useSelector((store) => store.company);

  const [filterCompany, setFilterCompany] = useState(companies);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const navigate = useNavigate();
  const { deleteCompanyById } = usegetallCompanies();

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

  const handleDeleteClick = (company) => {
    setSelectedCompany(company);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    if (!selectedCompany) return;

    setDeleteLoading(true);
    try {
      const success = await deleteCompanyById(selectedCompany._id);
      if (success) {
        toast.success(`${selectedCompany.name} deleted successfully`);
        setShowDeleteModal(false);
        setSelectedCompany(null);
      }
    } catch (error) {
      toast.error("Failed to delete company");
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
    setSelectedCompany(null);
  };

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
    <>
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
                Registration Date
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
                      <PopoverContent className="w-40 p-2 shadow-lg border border-gray-200">
                        <div
                          onClick={() =>
                            navigate(`/admin/companies/${company._id}`)
                          }
                          className="flex items-center gap-3 w-full cursor-pointer px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                        >
                          <Edit2 className="w-4 h-4" />
                          <span className="font-medium">Edit</span>
                        </div>
                        <div
                          onClick={() => handleDeleteClick(company)}
                          className="flex items-center gap-3 w-full cursor-pointer px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span className="font-medium">Delete</span>
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

      {/* Modern Delete Confirmation Modal */}
      <DeleteCompanyModal
        isOpen={showDeleteModal}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        company={selectedCompany}
        loading={deleteLoading}
      />
    </>
  );
};

export default CompaniesTable;
