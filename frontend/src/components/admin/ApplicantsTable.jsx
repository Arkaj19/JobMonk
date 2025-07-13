// import React from "react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../ui/table";
// import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
// import { MoreHorizontal } from "lucide-react";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import { toast } from "sonner";
// import { APPLICATION_API_END_POINT } from "@/utils/constants";

// const shortListingStatus = ["Accepted", "Rejected"];

// const ApplicantsTable = () => {
//   const { applicants } = useSelector((store) => store.application);

//   const statusHandler = async (status, id) => {
//     console.log("called");
//     try {
//       axios.defaults.withCredentials = true;
//       const res = await axios.post(
//         `${APPLICATION_API_END_POINT}/status/${id}/update`,
//         { status }
//       );
//       console.log(res);
//       if (res.data.success) {
//         toast.success(res.data.message);
//       }
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   return (
//     <div>
//       <Table>
//         <TableCaption>A List of your Recent Applicants</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>FullName</TableHead>
//             <TableHead>Email</TableHead>
//             <TableHead>Contact</TableHead>
//             <TableHead>Resume</TableHead>
//             <TableHead>Date</TableHead>
//             <TableHead className="text-right">Action</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {applicants &&
//             applicants?.application?.map((item) => (
//               <tr key={item._id}>
//                 <TableCell>{item?.applicant?.fullname}</TableCell>
//                 <TableCell>{item?.applicant?.email}</TableCell>
//                 <TableCell>{item?.applicant?.phone}</TableCell>
//                 <TableCell>
//                   {item.applicant?.profile?.resume ? (
//                     <a
//                       className="text-blue-600 cursor-pointer"
//                       href={item?.applicant?.profile?.resume}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       {item?.applicant?.profile?.resumeOriginalName}
//                     </a>
//                   ) : (
//                     <span>NA</span>
//                   )}
//                 </TableCell>
//                 <TableCell>{item?.applicant.createdAt.split("T")[0]}</TableCell>
//                 <TableCell className="float-right cursor-pointer">
//                   <Popover>
//                     <PopoverTrigger>
//                       <MoreHorizontal />
//                     </PopoverTrigger>
//                     <PopoverContent className="w-32">
//                       {shortListingStatus.map((status, index) => {
//                         return (
//                           <div
//                             onClick={() => statusHandler(status, item?._id)}
//                             key={index}
//                             className="flex w-fit items-center cursor-pointer my-2"
//                           >
//                             <span>{status}</span>
//                           </div>
//                         );
//                       })}
//                     </PopoverContent>
//                   </Popover>
//                 </TableCell>
//               </tr>
//             ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default ApplicantsTable;

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  MoreHorizontal,
  FileText,
  Mail,
  Phone,
  User,
  Calendar,
  Check,
  X,
  Download,
} from "lucide-react";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";
import { APPLICATION_API_END_POINT } from "@/utils/constants";

const shortListingStatus = ["Accepted", "Rejected"];

const ApplicantsTable = () => {
  const { applicants } = useSelector((store) => store.application);

  const statusHandler = async (status, id) => {
    // console.log("called");
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.put(
        `${APPLICATION_API_END_POINT}/status/${id}/update`,
        { status }
      );
      // console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: { variant: "secondary", color: "bg-yellow-100 text-yellow-800" },
      accepted: { variant: "success", color: "bg-green-100 text-green-800" },
      rejected: { variant: "destructive", color: "bg-red-100 text-red-800" },
    };

    return statusConfig[status?.toLowerCase()] || statusConfig.pending;
  };

  if (
    !applicants ||
    !applicants.application ||
    applicants.application.length === 0
  ) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="text-center">
          <User className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No applicants yet
          </h3>
          <p className="text-gray-500">
            Applications will appear here once candidates start applying.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Recent Applicants
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {applicants.application.length} candidate
              {applicants.application.length !== 1 ? "s" : ""} applied
            </p>
          </div>
          <Badge
            variant="outline"
            className="bg-blue-50 text-blue-700 border-blue-200"
          >
            {applicants.application.length} Total
          </Badge>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50/50">
              <TableHead className="font-semibold text-gray-900 py-4">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Candidate
                </div>
              </TableHead>
              <TableHead className="font-semibold text-gray-900">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </div>
              </TableHead>
              <TableHead className="font-semibold text-gray-900">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Contact
                </div>
              </TableHead>
              <TableHead className="font-semibold text-gray-900">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Resume
                </div>
              </TableHead>
              <TableHead className="font-semibold text-gray-900">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Applied Date
                </div>
              </TableHead>
              <TableHead className="font-semibold text-gray-900 text-right">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applicants.application.map((item, index) => (
              <TableRow
                key={item._id}
                className={`hover:bg-gray-50 transition-colors ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50/30"
                }`}
              >
                <TableCell className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium">
                      {item?.applicant?.fullname?.charAt(0)?.toUpperCase() ||
                        "U"}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        {item?.applicant?.fullname || "Unknown"}
                      </div>
                      <div className="text-sm text-gray-500">
                        Applicant ID: {item._id.slice(-6)}
                      </div>
                    </div>
                  </div>
                </TableCell>

                <TableCell className="py-4">
                  <div className="text-gray-900">
                    {item?.applicant?.email || "N/A"}
                  </div>
                </TableCell>

                <TableCell className="py-4">
                  <div className="text-gray-900">
                    {item?.applicant?.phone || "N/A"}
                  </div>
                </TableCell>

                <TableCell className="py-4">
                  {item.applicant?.profile?.resume ? (
                    <div className="flex items-center gap-2">
                      <a
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                        href={item?.applicant?.profile?.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="h-4 w-4" />
                        <span className="truncate max-w-32">
                          {item?.applicant?.profile?.resumeOriginalName ||
                            "Resume"}
                        </span>
                      </a>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-gray-500">
                      <FileText className="h-4 w-4" />
                      <span>No resume</span>
                    </div>
                  )}
                </TableCell>

                <TableCell className="py-4">
                  <div className="text-gray-900">
                    {formatDate(item?.applicant?.createdAt)}
                  </div>
                </TableCell>

                <TableCell className="py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    {item.status && (
                      <Badge
                        className={`${
                          getStatusBadge(item.status).color
                        } border-none`}
                      >
                        {item.status}
                      </Badge>
                    )}

                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 hover:bg-gray-100"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-48 p-2" align="end">
                        <div className="space-y-1">
                          {shortListingStatus.map((status, statusIndex) => {
                            const isAccepted = status === "Accepted";
                            const isRejected = status === "Rejected";

                            return (
                              <Button
                                key={statusIndex}
                                variant="ghost"
                                size="sm"
                                onClick={() => statusHandler(status, item?._id)}
                                className={`w-full justify-start gap-2 text-left hover:bg-gray-100 ${
                                  isAccepted
                                    ? "hover:bg-green-50 hover:text-green-700"
                                    : isRejected
                                    ? "hover:bg-red-50 hover:text-red-700"
                                    : ""
                                }`}
                              >
                                {isAccepted && <Check className="h-4 w-4" />}
                                {isRejected && <X className="h-4 w-4" />}
                                <span>{status}</span>
                              </Button>
                            );
                          })}
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ApplicantsTable;
