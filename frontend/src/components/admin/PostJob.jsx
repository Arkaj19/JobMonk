// import React, { useState } from "react";
// import { Label } from "../ui/label";
// import Navbar from "../shared/Navbar";
// import { Input } from "../ui/input";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import store from "@/redux/store";
// import { JOB_API_END_POINT } from "@/utils/constants";
// import { toast, Toaster } from "sonner";
// import { Button } from "../ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../ui/select";
// import axios from "axios";
// import { Loader2 } from "lucide-react";

// const PostJob = () => {
//   const [input, setInput] = useState({
//     title: "",
//     description: "",
//     requirement: "",
//     salary: "",
//     location: "",
//     jobType: "",
//     experience: "",
//     position: 0,
//     companyId: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const { companies } = useSelector((store) => store.company);

//   const changeEventHandler = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   const selectChangeHandler = (value) => {
//     const selectedCompany = companies.find(
//       (company) => company.name.toLowerCase() === value
//     );
//     setInput({ ...input, companyId: selectedCompany._id });
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         withCredentials: true,
//       });
//       if (res.data.success) {
//         toast.success(res.data.message);
//         navigate("/admin/jobs");
//       }
//     } catch (error) {
//       toast.error(error.response.data.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="flex items-center justify-center w-screen my-5">
//         <form
//           onSubmit={submitHandler}
//           className="p-8 max-w-4xl border border-gray-200 shadow-lg rounded-md"
//         >
//           <div className="grid grid-cols-2 gap-2 ">
//             <div>
//               <Label>Title</Label>
//               <Input
//                 type="text"
//                 name="title"
//                 value={input.title}
//                 onChange={changeEventHandler}
//                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//               />
//             </div>
//             <div>
//               <Label>Description</Label>
//               <Input
//                 type="text"
//                 name="description"
//                 value={input.description}
//                 onChange={changeEventHandler}
//                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//               />
//             </div>
//             <div>
//               <Label>Requirement</Label>
//               <Input
//                 type="text"
//                 name="requirement"
//                 value={input.requirement}
//                 onChange={changeEventHandler}
//                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//               />
//             </div>
//             <div>
//               <Label>Salary</Label>
//               <Input
//                 type="text"
//                 name="salary"
//                 value={input.salary}
//                 onChange={changeEventHandler}
//                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//               />
//             </div>
//             <div>
//               <Label>Location</Label>
//               <Input
//                 type="text"
//                 name="location"
//                 value={input.location}
//                 onChange={changeEventHandler}
//                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//               />
//             </div>
//             <div>
//               <Label>Job Type</Label>
//               <Input
//                 type="text"
//                 name="jobType"
//                 value={input.jobType}
//                 onChange={changeEventHandler}
//                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//               />
//             </div>
//             <div>
//               <Label>Experience Level</Label>
//               <Input
//                 type="text"
//                 name="experience"
//                 value={input.experience}
//                 onChange={changeEventHandler}
//                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//               />
//             </div>
//             <div>
//               <Label>Number of Positions</Label>
//               <Input
//                 type="number"
//                 name="position"
//                 value={input.position}
//                 onChange={changeEventHandler}
//                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//               />
//             </div>
//             {companies.length > 0 && (
//               <Select onValueChange={selectChangeHandler}>
//                 <SelectTrigger className="w-[180px]">
//                   <SelectValue placeholder="Select a Company" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectGroup>
//                     {companies.map((company) => {
//                       return (
//                         <SelectItem value={company?.name?.toLowerCase()}>
//                           {company.name}
//                         </SelectItem>
//                       );
//                     })}
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>
//             )}
//           </div>
//           {loading ? (
//             <Button className="w-full my-4">
//               <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
//             </Button>
//           ) : (
//             <Button type="submit" className="w-full my-4">
//               Post New Job
//             </Button>
//           )}
//           {companies.length === 0 && (
//             <p className="text-xs text-red-600 font-bold text-center my-3">
//               *Please register a company first, before posting a jobs
//             </p>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PostJob;

import React, { useState } from "react";
import axios from "axios";
import { Label } from "../ui/label";
import Navbar from "../shared/Navbar";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "@/redux/store";
import { JOB_API_END_POINT } from "@/utils/constants";
import { toast, Toaster } from "sonner";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const PostJob = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirement: "",
    salary: "",
    location: "",
    jobType: "",
    experience: "",
    position: 0,
    companyId: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { companies } = useSelector((store) => store.company);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const selectChangeHandler = (value) => {
    const selectedCompany = companies.find(
      (company) => company.name.toLowerCase() === value
    );
    setInput({ ...input, companyId: selectedCompany._id });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/jobs");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || error.message || "An error occurred";
      toast.error(errorMessage);
      console.error("Error posting job:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Content Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0h2a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h2"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Post New Job
                </h1>
                <p className="text-gray-600 mt-1">
                  Create a job posting to attract qualified candidates
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                <strong>Pro tip:</strong> Be specific about requirements and
                provide clear job descriptions to attract the right candidates.
              </p>
            </div>
          </div>

          {/* Form Section */}
          <form onSubmit={submitHandler} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Job Title */}
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  Job Title <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="text"
                  name="title"
                  value={input.title}
                  onChange={changeEventHandler}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="e.g., Senior Software Engineer"
                  disabled={loading}
                />
              </div>

              {/* Job Description */}
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  Job Description <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="text"
                  name="description"
                  value={input.description}
                  onChange={changeEventHandler}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Brief description of the role"
                  disabled={loading}
                />
              </div>

              {/* Requirements */}
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  Requirements <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="text"
                  name="requirement"
                  value={input.requirement}
                  onChange={changeEventHandler}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="e.g., React, Node.js, 3+ years experience"
                  disabled={loading}
                />
              </div>

              {/* Salary */}
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  Salary Range <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="text"
                  name="salary"
                  value={input.salary}
                  onChange={changeEventHandler}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="e.g., 1, 2, ... 90"
                  disabled={loading}
                />
              </div>

              {/* Location */}
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  Location <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="text"
                  name="location"
                  value={input.location}
                  onChange={changeEventHandler}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="e.g., New York, NY or Remote"
                  disabled={loading}
                />
              </div>

              {/* Job Type */}
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  Job Type <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="text"
                  name="jobType"
                  value={input.jobType}
                  onChange={changeEventHandler}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="e.g., Full-time, Part-time, Contract"
                  disabled={loading}
                />
              </div>

              {/* Experience Level */}
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  Experience Level <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="text"
                  name="experience"
                  value={input.experience}
                  onChange={changeEventHandler}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="e.g., Years of Experience"
                  disabled={loading}
                />
              </div>

              {/* Number of Positions */}
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  Number of Positions <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="number"
                  name="position"
                  value={input.position}
                  onChange={changeEventHandler}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="e.g., 1, 2, 5"
                  min="1"
                  disabled={loading}
                />
              </div>
            </div>
            {/* {companies.length > 0 && (
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  Select Company <span className="text-red-500">*</span>
                </Label>
                <Select onValueChange={selectChangeHandler} disabled={loading}>
                  <SelectTrigger className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                    <SelectValue placeholder="Choose a company..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {companies.map((company) => (
                        <SelectItem
                          key={company._id}
                          value={company?.name?.toLowerCase()}
                        >
                          {company.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            )} */}

            {companies.length > 0 && (
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  Select Company <span className="text-red-500">*</span>
                </Label>
                <Select onValueChange={selectChangeHandler} disabled={loading}>
                  <SelectTrigger className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                    <SelectValue placeholder="Choose a company..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {companies.map((company) => (
                        <SelectItem
                          key={company._id}
                          value={company?.name?.toLowerCase()}
                        >
                          <div className="flex items-center gap-3 py-1">
                            {/* Company Logo */}
                            <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center flex-shrink-0">
                              {company.logo ? (
                                <img
                                  src={company.logo}
                                  alt={`${company.name} logo`}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    e.target.style.display = "none";
                                    e.target.nextSibling.style.display = "flex";
                                  }}
                                />
                              ) : null}
                              <div
                                className={`w-full h-full flex items-center justify-center text-xs font-semibold text-gray-600 ${
                                  company.logo ? "hidden" : "flex"
                                }`}
                              >
                                {company.name?.charAt(0)?.toUpperCase() || "?"}
                              </div>
                            </div>
                            {/* Company Name */}
                            <span className="text-sm font-medium text-gray-900">
                              {company.name}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Error Message for No Companies */}
            {companies.length === 0 && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-400 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-red-800 text-sm font-medium">
                    Please register a company first before posting jobs.
                  </p>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/admin/companies/create")}
                  className="mt-3 px-4 py-2 text-sm bg-white border border-red-300 text-red-700 hover:bg-red-50 transition-colors"
                >
                  Create Company
                </Button>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/admin/jobs")}
                disabled={loading}
                className="px-6 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading || companies.length === 0}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Posting Job...
                  </>
                ) : (
                  <>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    Post New Job
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>

        {/* Tips Section */}
        <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Tips for Writing Effective Job Posts
          </h3>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg
                  className="w-3 h-3 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p>
                Use clear, specific job titles that candidates will search for
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-xs font-bold">2</span>
              </div>
              <p>Include salary ranges to attract qualified candidates</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-xs font-bold">3</span>
              </div>
              <p>List specific skills and experience requirements</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-xs font-bold">4</span>
              </div>
              <p>Specify whether the position is remote, hybrid, or on-site</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
