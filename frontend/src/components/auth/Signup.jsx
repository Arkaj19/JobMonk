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
//     <div className="min-h-screen bg-gray-50 overflow-x-hidden">
//       <Navbar />

//       <div className="relative flex items-center justify-center max-w-7xl mx-auto px-4 py-8">
//         <div className="w-full max-w-md">
//           {/* Header */}
//           <div className="text-center mb-8">
//             <h1 className="text-3xl font-bold text-gray-900 mb-2">
//               Create Your Account
//             </h1>
//             <p className="text-gray-600">
//               Start your journey to find your dream job
//             </p>
//           </div>

//           {/* Form */}
//           <form
//             onSubmit={submitHandler}
//             className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm"
//           >
//             {/* Full Name */}
//             <div className="mb-6">
//               <Label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
//                 <User className="h-4 w-4 text-gray-500" />
//                 Full Name
//               </Label>
//               <Input
//                 type="text"
//                 value={input.fullname}
//                 name="fullname"
//                 onChange={changeEventHandler}
//                 placeholder="Enter your full name"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>

//             {/* Email */}
//             <div className="mb-6">
//               <Label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
//                 <Mail className="h-4 w-4 text-gray-500" />
//                 Email Address
//               </Label>
//               <Input
//                 type="email"
//                 value={input.email}
//                 name="email"
//                 onChange={changeEventHandler}
//                 placeholder="Enter your email"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>

//             {/* Phone */}
//             <div className="mb-6">
//               <Label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
//                 <Phone className="h-4 w-4 text-gray-500" />
//                 Phone Number
//               </Label>
//               <Input
//                 type="text"
//                 value={input.phone}
//                 name="phone"
//                 onChange={changeEventHandler}
//                 placeholder="Enter your phone number"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>

//             {/* Password */}
//             <div className="mb-6">
//               <Label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
//                 <Lock className="h-4 w-4 text-gray-500" />
//                 Password
//               </Label>
//               <Input
//                 type="password"
//                 value={input.password}
//                 name="password"
//                 onChange={changeEventHandler}
//                 placeholder="Create a strong password"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>

//             {/* Role Selection */}
//             <div className="mb-6">
//               <Label className="text-sm font-medium text-gray-700 mb-3 block">
//                 I'm looking to:
//               </Label>
//               <RadioGroup className="grid grid-cols-2 gap-3">
//                 <div
//                   className={`border rounded-lg p-4 cursor-pointer transition-colors ${
//                     input.role === "candidate"
//                       ? "border-blue-500 bg-blue-50"
//                       : "border-gray-200 hover:border-gray-300"
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
//                     <UserCheck className="h-6 w-6 text-blue-600 mb-2" />
//                     <Label className="cursor-pointer font-medium text-gray-700">
//                       Find Jobs
//                     </Label>
//                     <span className="text-xs text-gray-500 mt-1">
//                       I'm a job seeker
//                     </span>
//                   </div>
//                 </div>
//                 <div
//                   className={`border rounded-lg p-4 cursor-pointer transition-colors ${
//                     input.role === "recruiter"
//                       ? "border-blue-500 bg-blue-50"
//                       : "border-gray-200 hover:border-gray-300"
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
//                     <Users className="h-6 w-6 text-blue-600 mb-2" />
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
//               <Label className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
//                 <Upload className="h-4 w-4 text-gray-500" />
//                 Profile Picture (Optional)
//               </Label>
//               <div className="relative">
//                 <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
//                   <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
//                   <div className="text-sm text-gray-600 mb-2">
//                     <span className="text-blue-600 font-medium cursor-pointer">
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
//                 className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                 Creating Account...
//               </Button>
//             ) : (
//               <Button
//                 type="submit"
//                 className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
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
//                   className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
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

import React, { useEffect, useState } from "react";
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

  const [errors, setErrors] = useState({
    fullname: "",
    phone: "",
  });

  const { user, loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Validation functions
  const validateName = (name) => {
    // Check if name is empty or only contains spaces
    if (!name || name.trim() === "") {
      return "Full name is required";
    }

    // Check if name contains only alphabetic characters and spaces
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(name)) {
      return "Name should contain only alphabetic characters";
    }

    return "";
  };

  const validatePhone = (phone) => {
    // Check if phone is empty
    if (!phone) {
      return "Phone number is required";
    }

    // Check if phone contains only numeric characters
    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(phone)) {
      return "Phone number should contain only numeric characters";
    }

    // Check if phone number is exactly 10 digits
    if (phone.length !== 10) {
      return "Phone number should be exactly 10 digits";
    }

    return "";
  };

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setinput({ ...input, [name]: value });

    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }

    // Real-time validation
    if (name === "fullname") {
      const nameError = validateName(value);
      setErrors({ ...errors, fullname: nameError });
    }

    if (name === "phone") {
      const phoneError = validatePhone(value);
      setErrors({ ...errors, phone: phoneError });
    }
  };

  const changeFileHandler = (e) => {
    setinput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const nameError = validateName(input.fullname);
    const phoneError = validatePhone(input.phone);

    if (nameError || phoneError) {
      setErrors({
        fullname: nameError,
        phone: phoneError,
      });
      toast.error("Please fix the validation errors");
      return;
    }

    // Check if all required fields are filled
    if (!input.email || !input.password || !input.role) {
      toast.error("Please fill in all required fields");
      return;
    }

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
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

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
                className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.fullname ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.fullname && (
                <p className="text-red-500 text-sm mt-1">{errors.fullname}</p>
              )}
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
                placeholder="Enter your 10-digit phone number"
                maxLength={10}
                className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
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
