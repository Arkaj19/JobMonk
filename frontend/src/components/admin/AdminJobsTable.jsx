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
// import { Edit2, Eye, MoreHorizontal } from "lucide-react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { AvatarFallback } from "@radix-ui/react-avatar";

// const AdminJobsTable = () => {
//   const {
//     allAdminJobs,
//     searchJobByText,
//     loading = false,
//   } = useSelector((store) => store.job);

//   const [filterJobs, setFilterJobs] = useState(allAdminJobs);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const filteredJobs =
//       allAdminJobs.length >= 0 &&
//       allAdminJobs.filter((job) => {
//         if (!searchJobByText) {
//           return true;
//         }
//         return (
//           job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) ||
//           job?.company?.name
//             .toLowerCase()
//             .includes(searchJobByText.toLowerCase())
//         );
//       });
//     setFilterJobs(filteredJobs);
//   }, [allAdminJobs, searchJobByText]);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center py-12">
//         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
//         <span className="ml-3 text-gray-600 font-medium">Loading jobs...</span>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
//       <Table>
//         <TableCaption className="text-sm text-gray-500 py-4 bg-gray-50">
//           A list of your recent posted jobs
//         </TableCaption>
//         <TableHeader className="bg-gray-50">
//           <TableRow className="hover:bg-gray-100 transition-colors">
//             <TableHead className="font-semibold text-gray-700 py-4 px-6">
//               Company Name
//             </TableHead>
//             <TableHead className="font-semibold text-gray-700 py-4 px-6">
//               Role
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
//           {allAdminJobs.length === 0 ? (
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
//                     No jobs found
//                   </p>
//                   <p className="text-sm text-gray-400">
//                     Create one to get started
//                   </p>
//                 </div>
//               </TableCell>
//             </TableRow>
//           ) : (
//             filterJobs.map((job) => (
//               <TableRow
//                 key={job._id}
//                 className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
//               >
//                 <TableCell className="py-4 px-6">
//                   <div className="flex items-center gap-3">
//                     <Avatar className="w-10 h-10 border-2 border-gray-200 shadow-sm">
//                       <AvatarImage
//                         src={job?.company?.logo}
//                         alt={`${job?.company?.name} logo`}
//                         className="w-full h-full object-contain"
//                       />
//                       <AvatarFallback className="bg-gray-100 text-gray-600 text-sm font-medium">
//                         {job?.company?.name ? (
//                           job.company.name.substring(0, 2).toUpperCase()
//                         ) : (
//                           <Building2 className="w-4 h-4" />
//                         )}
//                       </AvatarFallback>
//                     </Avatar>
//                     <div className="font-medium text-gray-900 truncate max-w-xs">
//                       {job?.company?.name}
//                     </div>
//                   </div>
//                 </TableCell>
//                 <TableCell className="py-4 px-6">
//                   <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-md">
//                     {job?.title}
//                   </span>
//                 </TableCell>
//                 <TableCell className="py-4 px-6">
//                   <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-md">
//                     {job?.createdAt.split("T")[0]}
//                   </span>
//                 </TableCell>
//                 <TableCell className="py-4 px-6 text-right">
//                   <Popover>
//                     <PopoverTrigger className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//                       <MoreHorizontal className="w-4 h-4 text-gray-500" />
//                     </PopoverTrigger>
//                     <PopoverContent className="w-36 p-2 shadow-lg border border-gray-200">
//                       {/* <div
//                         onClick={() => navigate(`/admin/companies/${job._id}`)}
//                         className="flex items-center gap-3 w-full cursor-pointer px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
//                       >
//                         <Edit2 className="w-4 h-4" />
//                         <span className="font-medium">Edit</span>
//                       </div> */}
//                       <div
//                         onClick={() =>
//                           navigate(`/admin/jobs/${job._id}/applicants`)
//                         }
//                         className="flex items-center gap-3 w-full cursor-pointer px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
//                       >
//                         <Eye className="w-4 h-4" />
//                         <span className="font-medium">Applicants</span>
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

// export default AdminJobsTable;

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
import { Edit2, Eye, MoreHorizontal, Trash2, Building2 } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AvatarFallback } from "@radix-ui/react-avatar";
import usegetAllAdminJobs from "@/hooks/useGetAllAdminJobs";
import { deleteAdminJob } from "@/redux/jobSlice";
import { toast } from "sonner"; // Assuming you're using sonner for toasts

const AdminJobsTable = () => {
  const {
    allAdminJobs,
    searchJobByText,
    loading = false,
  } = useSelector((store) => store.job);

  const [filterJobs, setFilterJobs] = useState(allAdminJobs);
  const [deleteLoading, setDeleteLoading] = useState(null); // Track which job is being deleted
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { deleteJob } = usegetAllAdminJobs();

  useEffect(() => {
    const filteredJobs =
      allAdminJobs.length >= 0 &&
      allAdminJobs.filter((job) => {
        if (!searchJobByText) {
          return true;
        }
        return (
          job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) ||
          job?.company?.name
            .toLowerCase()
            .includes(searchJobByText.toLowerCase())
        );
      });
    setFilterJobs(filteredJobs);
  }, [allAdminJobs, searchJobByText]);

  const handleDeleteJob = async (jobId, jobTitle) => {
    // Show confirmation dialog
    if (
      window.confirm(
        `Are you sure you want to delete the job "${jobTitle}"? This will also delete all applications for this job. This action cannot be undone.`
      )
    ) {
      setDeleteLoading(jobId);

      const success = await deleteJob(jobId);

      if (success) {
        // Remove job from Redux state
        dispatch(deleteAdminJob(jobId));
      }

      setDeleteLoading(null);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-gray-600 font-medium">Loading jobs...</span>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <Table>
        <TableCaption className="text-sm text-gray-500 py-4 bg-gray-50">
          A list of your recent posted jobs
        </TableCaption>
        <TableHeader className="bg-gray-50">
          <TableRow className="hover:bg-gray-100 transition-colors">
            <TableHead className="font-semibold text-gray-700 py-4 px-6">
              Company Name
            </TableHead>
            <TableHead className="font-semibold text-gray-700 py-4 px-6">
              Role
            </TableHead>
            <TableHead className="font-semibold text-gray-700 py-4 px-6">
              Registered Date
            </TableHead>
            <TableHead className="font-semibold text-gray-700 py-4 px-6 text-right">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAdminJobs.length === 0 ? (
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
                    No jobs found
                  </p>
                  <p className="text-sm text-gray-400">
                    Create one to get started
                  </p>
                </div>
              </TableCell>
            </TableRow>
          ) : (
            filterJobs.map((job) => (
              <TableRow
                key={job._id}
                className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
              >
                <TableCell className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10 border-2 border-gray-200 shadow-sm">
                      <AvatarImage
                        src={job?.company?.logo}
                        alt={`${job?.company?.name} logo`}
                        className="w-full h-full object-contain"
                      />
                      <AvatarFallback className="bg-gray-100 text-gray-600 text-sm font-medium">
                        {job?.company?.name ? (
                          job.company.name.substring(0, 2).toUpperCase()
                        ) : (
                          <Building2 className="w-4 h-4" />
                        )}
                      </AvatarFallback>
                    </Avatar>
                    <div className="font-medium text-gray-900 truncate max-w-xs">
                      {job?.company?.name}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-4 px-6">
                  <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-md">
                    {job?.title}
                  </span>
                </TableCell>
                <TableCell className="py-4 px-6">
                  <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-md">
                    {job?.createdAt.split("T")[0]}
                  </span>
                </TableCell>
                <TableCell className="py-4 px-6 text-right">
                  <Popover>
                    <PopoverTrigger
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      disabled={deleteLoading === job._id}
                    >
                      {deleteLoading === job._id ? (
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600"></div>
                      ) : (
                        <MoreHorizontal className="w-4 h-4 text-gray-500" />
                      )}
                    </PopoverTrigger>
                    <PopoverContent className="w-44 p-2 shadow-lg border border-gray-200">
                      {/* View Applicants Option */}
                      <div
                        onClick={() =>
                          navigate(`/admin/jobs/${job._id}/applicants`)
                        }
                        className="flex items-center gap-3 w-full cursor-pointer px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        <span className="font-medium">View Applicants</span>
                      </div>

                      {/* Delete Job Option */}
                      <div
                        onClick={() => handleDeleteJob(job._id, job.title)}
                        className="flex items-center gap-3 w-full cursor-pointer px-3 py-2 text-sm text-red-700 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span className="font-medium">Delete Job</span>
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

export default AdminJobsTable;
