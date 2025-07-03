// import React, { useState } from "react";
// import Navbar from "../shared/Navbar";
// import { Label } from "../ui/label";
// import { Input } from "../ui/input";
// import { RadioGroup } from "../ui/radio-group";
// import { Button } from "../ui/button";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { USER_API_END_POINT } from "@/utils/constants";
// import { toast } from "sonner";
// import { useDispatch, useSelector } from "react-redux";
// import { setLoading } from "@/redux/authSlice";
// import {
//   Loader2,
//   User,
//   Mail,
//   Phone,
//   Lock,
//   Upload,
//   UserCheck,
//   Users,
//   Sparkles,
// } from "lucide-react";

// const Signup = () => {
//   const [input, setinput] = useState({
//     fullname: "",
//     email: "",
//     phone: "",
//     password: "",
//     role: "",
//     file: "",
//   });
//   const { loading } = useSelector((store) => store.auth);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const changeEventHandler = (e) => {
//     setinput({ ...input, [e.target.name]: e.target.value });
//   };

//   const changeFileHandler = (e) => {
//     setinput({ ...input, file: e.target.files?.[0] });
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("fullname", input.fullname);
//     formData.append("email", input.email);
//     formData.append("phone", input.phone);
//     formData.append("password", input.password);
//     formData.append("role", input.role);
//     if (input.file) {
//       formData.append("file", input.file);
//     }
//     try {
//       dispatch(setLoading(true));
//       const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//         withCredentials: true,
//       });
//       if (res.data.success) {
//         navigate("/login");
//         toast.success(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       dispatch(setLoading(false));
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
//       <Navbar />

//       {/* Background Effects */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-40 h-40 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
//         <div className="absolute top-40 right-20 w-60 h-60 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
//         <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-500"></div>
//       </div>

//       <div className="relative flex items-center justify-center max-w-7xl mx-auto px-4 py-8">
//         <div className="w-full max-w-md">
//           {/* Header */}
//           <div className="text-center mb-8">
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-100 to-blue-100 text-sky-700 rounded-full text-sm font-medium mb-4">
//               <Sparkles className="h-4 w-4" />
//               Join Our Community
//             </div>
//             <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-sky-900 to-gray-900 bg-clip-text text-transparent mb-2">
//               Create Your Account
//             </h1>
//             <p className="text-gray-600">
//               Start your journey to find your dream job
//             </p>
//           </div>

//           {/* Form */}
//           <form
//             onSubmit={submitHandler}
//             className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
//           >
//             {/* Full Name */}
//             <div className="mb-6">
//               <Label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
//                 <User className="h-4 w-4 text-sky-600" />
//                 Full Name
//               </Label>
//               <div className="relative">
//                 <Input
//                   type="text"
//                   value={input.fullname}
//                   name="fullname"
//                   onChange={changeEventHandler}
//                   placeholder="Enter your full name"
//                   className="pl-4 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all duration-200 bg-white/90"
//                 />
//               </div>
//             </div>

//             {/* Email */}
//             <div className="mb-6">
//               <Label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
//                 <Mail className="h-4 w-4 text-sky-600" />
//                 Email Address
//               </Label>
//               <div className="relative">
//                 <Input
//                   type="email"
//                   value={input.email}
//                   name="email"
//                   onChange={changeEventHandler}
//                   placeholder="Enter your email"
//                   className="pl-4 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all duration-200 bg-white/90"
//                 />
//               </div>
//             </div>

//             {/* Phone */}
//             <div className="mb-6">
//               <Label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
//                 <Phone className="h-4 w-4 text-sky-600" />
//                 Phone Number
//               </Label>
//               <div className="relative">
//                 <Input
//                   type="text"
//                   value={input.phone}
//                   name="phone"
//                   onChange={changeEventHandler}
//                   placeholder="Enter your phone number"
//                   className="pl-4 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all duration-200 bg-white/90"
//                 />
//               </div>
//             </div>

//             {/* Password */}
//             <div className="mb-6">
//               <Label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
//                 <Lock className="h-4 w-4 text-sky-600" />
//                 Password
//               </Label>
//               <div className="relative">
//                 <Input
//                   type="password"
//                   value={input.password}
//                   name="password"
//                   onChange={changeEventHandler}
//                   placeholder="Create a strong password"
//                   className="pl-4 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all duration-200 bg-white/90"
//                 />
//               </div>
//             </div>

//             {/* Role Selection */}
//             <div className="mb-6">
//               <Label className="text-sm font-semibold text-gray-700 mb-3 block">
//                 I'm looking to:
//               </Label>
//               <RadioGroup className="grid grid-cols-2 gap-3">
//                 <div
//                   className={`relative border-2 rounded-xl p-4 cursor-pointer transition-all duration-200 ${
//                     input.role === "candidate"
//                       ? "border-sky-400 bg-sky-50"
//                       : "border-gray-200 hover:border-sky-300 bg-white/50"
//                   }`}
//                 >
//                   <Input
//                     type="radio"
//                     name="role"
//                     value="candidate"
//                     checked={input.role === "candidate"}
//                     onChange={changeEventHandler}
//                     className="absolute opacity-0 cursor-pointer"
//                   />
//                   <div className="flex flex-col items-center text-center">
//                     <UserCheck className="h-8 w-8 text-sky-600 mb-2" />
//                     <Label className="cursor-pointer font-medium text-gray-700">
//                       Find Jobs
//                     </Label>
//                     <span className="text-xs text-gray-500 mt-1">
//                       I'm a job seeker
//                     </span>
//                   </div>
//                 </div>
//                 <div
//                   className={`relative border-2 rounded-xl p-4 cursor-pointer transition-all duration-200 ${
//                     input.role === "recruiter"
//                       ? "border-sky-400 bg-sky-50"
//                       : "border-gray-200 hover:border-sky-300 bg-white/50"
//                   }`}
//                 >
//                   <Input
//                     type="radio"
//                     name="role"
//                     value="recruiter"
//                     checked={input.role === "recruiter"}
//                     onChange={changeEventHandler}
//                     className="absolute opacity-0 cursor-pointer"
//                   />
//                   <div className="flex flex-col items-center text-center">
//                     <Users className="h-8 w-8 text-blue-600 mb-2" />
//                     <Label className="cursor-pointer font-medium text-gray-700">
//                       Hire Talent
//                     </Label>
//                     <span className="text-xs text-gray-500 mt-1">
//                       I'm a recruiter
//                     </span>
//                   </div>
//                 </div>
//               </RadioGroup>
//             </div>

//             {/* Profile Picture */}
//             <div className="mb-8">
//               <Label className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
//                 <Upload className="h-4 w-4 text-sky-600" />
//                 Profile Picture (Optional)
//               </Label>
//               <div className="relative">
//                 <div className="border-2 border-dashed border-gray-300 hover:border-sky-400 rounded-xl p-6 bg-white/50 transition-all duration-200 text-center">
//                   <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
//                   <div className="text-sm text-gray-600 mb-2">
//                     <span className="text-sky-600 font-medium cursor-pointer hover:text-sky-700">
//                       Click to upload
//                     </span>{" "}
//                     or drag and drop
//                   </div>
//                   <div className="text-xs text-gray-400">
//                     PNG, JPG up to 10MB
//                   </div>
//                   <Input
//                     accept="image/*"
//                     type="file"
//                     onChange={changeFileHandler}
//                     className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                   />
//                 </div>
//                 {input.file && (
//                   <div className="mt-3 text-sm text-green-600 flex items-center gap-2">
//                     <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//                     File selected: {input.file.name}
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Submit Button */}
//             {loading ? (
//               <Button
//                 disabled
//                 className="w-full py-3 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
//               >
//                 <Loader2 className="mr-2 h-5 w-5 animate-spin" />
//                 Creating Account...
//               </Button>
//             ) : (
//               <Button
//                 type="submit"
//                 className="w-full py-3 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
//               >
//                 Create Account
//               </Button>
//             )}

//             {/* Login Link */}
//             <div className="text-center mt-6 pt-6 border-t border-gray-200">
//               <span className="text-gray-600">
//                 Already have an account?{" "}
//                 <Link
//                   to="/login"
//                   className="text-sky-600 hover:text-sky-700 font-semibold hover:underline transition-all duration-200"
//                 >
//                   Sign In
//                 </Link>
//               </span>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constants";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import {
  Loader2,
  User,
  Mail,
  Phone,
  Lock,
  Upload,
  UserCheck,
  Users,
} from "lucide-react";

const Signup = () => {
  const [input, setinput] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    role: "",
    file: "",
  });
  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setinput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phone", input.phone);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar />

      <div className="relative flex items-center justify-center max-w-7xl mx-auto px-4 py-8">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Create Your Account
            </h1>
            <p className="text-gray-600">
              Start your journey to find your dream job
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={submitHandler}
            className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm"
          >
            {/* Full Name */}
            <div className="mb-6">
              <Label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <User className="h-4 w-4 text-gray-500" />
                Full Name
              </Label>
              <Input
                type="text"
                value={input.fullname}
                name="fullname"
                onChange={changeEventHandler}
                placeholder="Enter your full name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <Label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-500" />
                Email Address
              </Label>
              <Input
                type="email"
                value={input.email}
                name="email"
                onChange={changeEventHandler}
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Phone */}
            <div className="mb-6">
              <Label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-500" />
                Phone Number
              </Label>
              <Input
                type="text"
                value={input.phone}
                name="phone"
                onChange={changeEventHandler}
                placeholder="Enter your phone number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <Label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <Lock className="h-4 w-4 text-gray-500" />
                Password
              </Label>
              <Input
                type="password"
                value={input.password}
                name="password"
                onChange={changeEventHandler}
                placeholder="Create a strong password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Role Selection */}
            <div className="mb-6">
              <Label className="text-sm font-medium text-gray-700 mb-3 block">
                I'm looking to:
              </Label>
              <RadioGroup className="grid grid-cols-2 gap-3">
                <div
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    input.role === "candidate"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Input
                    type="radio"
                    name="role"
                    value="candidate"
                    checked={input.role === "candidate"}
                    onChange={changeEventHandler}
                    className="absolute opacity-0 cursor-pointer"
                  />
                  <div className="flex flex-col items-center text-center">
                    <UserCheck className="h-6 w-6 text-blue-600 mb-2" />
                    <Label className="cursor-pointer font-medium text-gray-700">
                      Find Jobs
                    </Label>
                    <span className="text-xs text-gray-500 mt-1">
                      I'm a job seeker
                    </span>
                  </div>
                </div>
                <div
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    input.role === "recruiter"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Input
                    type="radio"
                    name="role"
                    value="recruiter"
                    checked={input.role === "recruiter"}
                    onChange={changeEventHandler}
                    className="absolute opacity-0 cursor-pointer"
                  />
                  <div className="flex flex-col items-center text-center">
                    <Users className="h-6 w-6 text-blue-600 mb-2" />
                    <Label className="cursor-pointer font-medium text-gray-700">
                      Hire Talent
                    </Label>
                    <span className="text-xs text-gray-500 mt-1">
                      I'm a recruiter
                    </span>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Profile Picture */}
            <div className="mb-8">
              <Label className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                <Upload className="h-4 w-4 text-gray-500" />
                Profile Picture (Optional)
              </Label>
              <div className="relative">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-600 mb-2">
                    <span className="text-blue-600 font-medium cursor-pointer">
                      Click to upload
                    </span>{" "}
                    or drag and drop
                  </div>
                  <div className="text-xs text-gray-400">
                    PNG, JPG up to 10MB
                  </div>
                  <Input
                    accept="image/*"
                    type="file"
                    onChange={changeFileHandler}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
                {input.file && (
                  <div className="mt-3 text-sm text-green-600 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    File selected: {input.file.name}
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            {loading ? (
              <Button
                disabled
                className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating Account...
              </Button>
            ) : (
              <Button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Create Account
              </Button>
            )}

            {/* Login Link */}
            <div className="text-center mt-6 pt-6 border-t border-gray-200">
              <span className="text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
                >
                  Sign In
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
