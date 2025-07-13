// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from "./ui/dialog";
// import { Label } from "./ui/label";
// import { Input } from "./ui/input";
// import { Button } from "./ui/button";
// import { Loader2 } from "lucide-react";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { USER_API_END_POINT } from "@/utils/constants";
// import { setUser } from "@/redux/authSlice";
// import { toast } from "sonner";

// const UpdateProfileDialog = ({ open, setOpen }) => {
//   const [loading, setLoading] = useState(false);
//   const { user } = useSelector((store) => store.auth);

//   const [input, setInput] = useState({
//     fullname: user?.fullname || "",
//     email: user?.email || "",
//     phone: user?.phone || "",
//     bio: user?.profile?.bio || "",
//     skills: user?.profile?.skills?.join(", ") || "", // Changed to join array with comma
//     file: null, // Initialize as null instead of empty string
//   });

//   const dispatch = useDispatch();

//   const changeEventHandler = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   const fileChangeHandler = (e) => {
//     const file = e.target.files?.[0];
//     setInput({ ...input, file });
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     // setLoading(true);

//     const formData = new FormData();
//     formData.append("fullname", input.fullname);
//     formData.append("email", input.email);
//     formData.append("phone", input.phone);
//     formData.append("bio", input.bio);
//     formData.append("skills", input.skills);
//     if (input.file) {
//       formData.append("file", input.file);
//     }

//     try {
//       setLoading(true);
//       const res = await axios.post(
//         `${USER_API_END_POINT}/profile/update`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//           withCredentials: true,
//         }
//       );

//       if (res.data.success) {
//         console.log(input);
//         dispatch(setUser(res.data.user));
//         toast.success(res.data.message);
//         setOpen(false); // Fixed the case here
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response?.data?.message || "Update failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <Dialog open={open}>
//         <DialogContent
//           className="sm:max-w-[425px]"
//           onInteractOutside={() => setOpen(false)}
//         >
//           <DialogHeader>
//             <DialogTitle>Update Profile</DialogTitle>
//           </DialogHeader>
//           <form onSubmit={submitHandler}>
//             <div className="grid gap-4 py-4">
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="fullname" className="text-right">
//                   Name
//                 </Label>
//                 <Input
//                   id="fullname"
//                   name="fullname" // Changed to match state key
//                   type="text"
//                   value={input.fullname}
//                   onChange={changeEventHandler}
//                   className="col-span-3"
//                 />
//               </div>
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="email" className="text-right">
//                   Email
//                 </Label>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={input.email}
//                   onChange={changeEventHandler}
//                   className="col-span-3"
//                 />
//               </div>
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="phone" className="text-right">
//                   Number
//                 </Label>
//                 <Input
//                   id="phone"
//                   name="phone" // Changed to match state key
//                   value={input.phone}
//                   onChange={changeEventHandler}
//                   className="col-span-3"
//                 />
//               </div>
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="bio" className="text-right">
//                   Bio
//                 </Label>
//                 <Input
//                   id="bio"
//                   name="bio"
//                   value={input.bio}
//                   onChange={changeEventHandler}
//                   className="col-span-3"
//                 />
//               </div>
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="skills" className="text-right">
//                   Skills
//                 </Label>
//                 <Input
//                   id="skills"
//                   name="skills"
//                   value={input.skills}
//                   onChange={changeEventHandler}
//                   className="col-span-3"
//                   placeholder="HTML, CSS, JavaScript"
//                 />
//               </div>
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="file" className="text-right">
//                   Resume
//                 </Label>
//                 <Input
//                   id="file"
//                   name="file"
//                   type="file"
//                   accept="application/pdf"
//                   onChange={fileChangeHandler}
//                   className="col-span-3"
//                 />
//               </div>
//             </div>
//             <DialogFooter>
//               <Button type="submit" className="w-full my-4" disabled={loading}>
//                 {loading ? (
//                   <>
//                     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                     Please wait
//                   </>
//                 ) : (
//                   "Update"
//                 )}
//               </Button>
//             </DialogFooter>
//           </form>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default UpdateProfileDialog;

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constants";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

const UpdateProfileDialog = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    phone: user?.phone || "",
    bio: user?.profile?.bio || "",
    skills: user?.profile?.skills?.join(", ") || "", // Changed to join array with comma
    file: null, // Initialize as null instead of empty string
  });

  const [errors, setErrors] = useState({
    fullname: "",
    phone: "",
  });

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
    setInput({ ...input, [name]: value });

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

  const fileChangeHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
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

    // Check if email is filled
    if (!input.email) {
      toast.error("Email is required");
      return;
    }

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phone", input.phone);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      setLoading(true);
      const res = await axios.post(
        `${USER_API_END_POINT}/profile/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        // console.log(input);
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
        setOpen(false); // Fixed the case here
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Dialog open={open}>
        <DialogContent
          className="sm:max-w-[425px]"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={submitHandler}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="fullname" className="text-right">
                  Name
                </Label>
                <div className="col-span-3">
                  <Input
                    id="fullname"
                    name="fullname"
                    type="text"
                    value={input.fullname}
                    onChange={changeEventHandler}
                    className={`${errors.fullname ? "border-red-500" : ""}`}
                  />
                  {errors.fullname && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fullname}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={input.email}
                  onChange={changeEventHandler}
                  className="col-span-3"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phone" className="text-right">
                  Number
                </Label>
                <div className="col-span-3">
                  <Input
                    id="phone"
                    name="phone"
                    value={input.phone}
                    onChange={changeEventHandler}
                    maxLength={10}
                    placeholder="Enter 10-digit phone number"
                    className={`${errors.phone ? "border-red-500" : ""}`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right">
                  Bio
                </Label>
                <Input
                  id="bio"
                  name="bio"
                  value={input.bio}
                  onChange={changeEventHandler}
                  className="col-span-3"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className="text-right">
                  Skills
                </Label>
                <Input
                  id="skills"
                  name="skills"
                  value={input.skills}
                  onChange={changeEventHandler}
                  className="col-span-3"
                  placeholder="HTML, CSS, JavaScript"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="file" className="text-right">
                  Resume
                </Label>
                <Input
                  id="file"
                  name="file"
                  type="file"
                  accept="application/pdf"
                  onChange={fileChangeHandler}
                  className="col-span-3"
                />
              </div>
            </div>

            <DialogFooter>
              <Button type="submit" className="w-full my-4" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </>
                ) : (
                  "Update"
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfileDialog;
