// import React, { useState } from "react";
// import Navbar from "../shared/Navbar";
// import { Label } from "../ui/label";
// import { Input } from "../ui/input";
// import { RadioGroup } from "../ui/radio-group";
// import { Button } from "../ui/button";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "sonner";
// import { USER_API_END_POINT } from "@/utils/constants";
// import { useDispatch, useSelector } from "react-redux";
// import { setLoading } from "@/redux/authSlice";
// import {
//   Loader2,
//   Mail,
//   Lock,
//   UserCheck,
//   Users,
//   Sparkles,
//   LogIn,
// } from "lucide-react";

// const Login = () => {
//   const [input, setinput] = useState({
//     email: "",
//     password: "",
//     role: "",
//   });
//   const { loading } = useSelector((store) => store.auth);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const changeEventHandler = (e) => {
//     setinput({ ...input, [e.target.name]: e.target.value });
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       dispatch(setLoading(true));
//       const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         withCredentials: true,
//       });
//       if (res.data.success) {
//         navigate("/");
//         toast.success(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response?.data?.message || "Something went wrong");
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

//       <div className="relative flex items-center justify-center max-w-7xl mx-auto px-4 py-12">
//         <div className="w-full max-w-md">
//           {/* Header */}
//           <div className="text-center mb-8">
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-100 to-blue-100 text-sky-700 rounded-full text-sm font-medium mb-4">
//               <LogIn className="h-4 w-4" />
//               Welcome Back
//             </div>
//             <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-sky-900 to-gray-900 bg-clip-text text-transparent mb-2">
//               Sign In to Your Account
//             </h1>
//             <p className="text-gray-600">Continue your journey to success</p>
//           </div>

//           {/* Form */}
//           <form
//             onSubmit={submitHandler}
//             className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
//           >
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
//                   placeholder="Enter your password"
//                   className="pl-4 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all duration-200 bg-white/90"
//                 />
//               </div>
//             </div>

//             {/* Role Selection */}
//             <div className="mb-8">
//               <Label className="text-sm font-semibold text-gray-700 mb-3 block">
//                 Sign in as:
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
//                       Candidate
//                     </Label>
//                     <span className="text-xs text-gray-500 mt-1">
//                       Job seeker
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
//                       Recruiter
//                     </Label>
//                     <span className="text-xs text-gray-500 mt-1">Employer</span>
//                   </div>
//                 </div>
//               </RadioGroup>
//             </div>

//             {/* Submit Button */}
//             {loading ? (
//               <Button
//                 disabled
//                 className="w-full py-3 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
//               >
//                 <Loader2 className="mr-2 h-5 w-5 animate-spin" />
//                 Signing In...
//               </Button>
//             ) : (
//               <Button
//                 type="submit"
//                 className="w-full py-3 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
//               >
//                 Sign In
//               </Button>
//             )}

//             {/* Forgot Password Link */}
//             <div className="text-center mt-4">
//               <Link
//                 to="/forgot-password"
//                 className="text-sm text-sky-600 hover:text-sky-700 hover:underline transition-all duration-200"
//               >
//                 Forgot your password?
//               </Link>
//             </div>

//             {/* Signup Link */}
//             <div className="text-center mt-6 pt-6 border-t border-gray-200">
//               <span className="text-gray-600">
//                 Don't have an account?{" "}
//                 <Link
//                   to="/signup"
//                   className="text-sky-600 hover:text-sky-700 font-semibold hover:underline transition-all duration-200"
//                 >
//                   Create Account
//                 </Link>
//               </span>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { USER_API_END_POINT } from "@/utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import { Loader2, Mail, Lock, UserCheck, Users, LogIn } from "lucide-react";

const Login = () => {
  const [input, setinput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const { user, loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      dispatch(setLoading(false));
    }
  };

  // If user already logged dont allow to go to login page
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex items-center justify-center max-w-7xl mx-auto px-4 py-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium mb-4">
              <LogIn className="h-4 w-4" />
              Welcome Back
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Sign In to Your Account
            </h1>
            <p className="text-gray-600">Continue your journey to success</p>
          </div>

          {/* Form */}
          <form
            onSubmit={submitHandler}
            className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm"
          >
            {/* Email */}
            <div className="mb-6">
              <Label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-600" />
                Email Address
              </Label>
              <div className="relative">
                <Input
                  type="email"
                  value={input.email}
                  name="email"
                  onChange={changeEventHandler}
                  placeholder="Enter your email"
                  className="pl-4 pr-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 bg-white"
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-6">
              <Label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <Lock className="h-4 w-4 text-gray-600" />
                Password
              </Label>
              <div className="relative">
                <Input
                  type="password"
                  value={input.password}
                  name="password"
                  onChange={changeEventHandler}
                  placeholder="Enter your password"
                  className="pl-4 pr-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 bg-white"
                />
              </div>
            </div>

            {/* Role Selection */}
            <div className="mb-8">
              <Label className="text-sm font-semibold text-gray-700 mb-3 block">
                Sign in as:
              </Label>
              <RadioGroup className="grid grid-cols-2 gap-3">
                <div
                  className={`relative border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                    input.role === "candidate"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300 hover:border-blue-300 bg-white"
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
                    <UserCheck className="h-8 w-8 text-blue-600 mb-2" />
                    <Label className="cursor-pointer font-medium text-gray-700">
                      Candidate
                    </Label>
                    <span className="text-xs text-gray-500 mt-1">
                      Job seeker
                    </span>
                  </div>
                </div>
                <div
                  className={`relative border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                    input.role === "recruiter"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300 hover:border-blue-300 bg-white"
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
                    <Users className="h-8 w-8 text-blue-600 mb-2" />
                    <Label className="cursor-pointer font-medium text-gray-700">
                      Recruiter
                    </Label>
                    <span className="text-xs text-gray-500 mt-1">Employer</span>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Submit Button */}
            {loading ? (
              <Button
                disabled
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm transition-all duration-300"
              >
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Signing In...
              </Button>
            ) : (
              <Button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                Sign In
              </Button>
            )}
            <div className="text-center mt-4">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-600 hover:text-blue-700 hover:underline transition-all duration-200"
              >
                Forgot your password?
              </Link>
            </div>

            {/* Signup Link */}
            <div className="text-center mt-6 pt-6 border-t border-gray-200">
              <span className="text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-all duration-200"
                >
                  Create Account
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
