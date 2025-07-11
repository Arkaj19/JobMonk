// import React from "react";
// import Navbar from "./shared/Navbar";
// import { Avatar, AvatarImage } from "./ui/avatar";
// import { Button } from "./ui/button";
// import { Contact, Mail, Pen } from "lucide-react";
// import { Badge } from "./ui/badge";
// import { Label } from "./ui/label";
// import AppliedJobstables from "./AppliedJobstables";

// const skills = ["HTML", "JavaScript", "MongoDB", "ExpressJS", "ReactJS"];

// const Profile = () => {
//   const isResume = true;
//   return (
//     <div>
//       <Navbar />;
//       <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
//         <div className="flex justify-between">
//           <div className="flex items-center gap-4">
//             <Avatar className="h-24 w-24">
//               <AvatarImage
//                 src="https://e7.pngegg.com/pngimages/56/318/png-clipart-google-logo-logo-logo-company-text.png"
//                 alt="image"
//               />
//             </Avatar>
//             <div>
//               <h1 className="font-medium text-xl">Full Name</h1>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
//                 neque dignissimos est
//               </p>
//             </div>
//           </div>
//           <Button className="text-right" variant="outline">
//             <Pen />
//           </Button>
//         </div>
//         <div className="my-5">
//           <div className="flex items-center gap-4 my-2">
//             <Mail />
//             <span>Kunal@gmail.com</span>
//           </div>
//           <div className="flex items-center gap-4 my-2">
//             <Contact />
//             <span>9865456646</span>
//           </div>
//         </div>
//         <div className="my-5">
//           <h1>Skills</h1>
//           <div className="flex items-center gap-1">
//             {skills.length != 0 ? (
//               skills.map((item, index) => <Badge key={index}>{item}</Badge>)
//             ) : (
//               <span>N/A</span>
//             )}
//           </div>
//         </div>
//         <div className="grid w-full max-w-sm items-center gap-1.5">
//           <Label className="text-md font-bold">Resume</Label>
//           {isResume ? (
//             <a
//               target="blank"
//               href="https://about.google/company-info/"
//               className="text-blue-500 w-full hover:underline cursor-pointer"
//             >
//               Info
//             </a>
//           ) : (
//             <span>N/A</span>
//           )}
//         </div>
//       </div>
//       <div className="max-w-4xl mx-auto bg-white rounded-2xl">
//         <h1>All Applied Jobs</h1>
//         {/* Application Table */}
//         <AppliedJobstables />
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobstables from "./AppliedJobstables";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";

const skills = ["HTML", "JavaScript", "MongoDB", "ExpressJS", "ReactJS"];

const Profile = () => {
  useGetAppliedJobs();
  const isResume = true;
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-8 p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-6">
            <Avatar className="h-28 w-28 ring-4 ring-blue-100 shadow-lg">
              <AvatarImage
                src={user?.profile?.ProfilePhoto}
                alt="image"
                className="object-cover"
              />
            </Avatar>
            <div className="space-y-2">
              <h1 className="font-bold text-2xl text-gray-800 tracking-tight">
                {user?.fullname}
              </h1>
              <p className="text-gray-600 leading-relaxed max-w-md">
                {user?.profile.bio}
              </p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="text-right hover:bg-gray-50 transition-colors duration-200 shadow-md"
            variant="outline"
          >
            <Pen className="h-4 w-4" />
          </Button>
        </div>

        <div className="my-8 space-y-4">
          <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
            <Mail className="h-5 w-5 text-blue-600" />
            <span className="text-gray-700 font-medium">{user?.email}</span>
          </div>
          <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
            <Contact className="h-5 w-5 text-green-600" />
            <span className="text-gray-700 font-medium">{user?.phone}</span>
          </div>
        </div>

        <div className="my-8">
          <h1 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
            Skills
          </h1>
          <div className="flex items-center gap-2 flex-wrap">
            {user?.profile?.skills.length != 0 ? (
              user?.profile?.skills.map((item, index) => (
                <Badge
                  key={index}
                  className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors duration-200 px-3 py-1 text-sm font-medium"
                >
                  {item}
                </Badge>
              ))
            ) : (
              <span className="text-gray-500 italic">N/A</span>
            )}
          </div>
        </div>

        <div className="grid w-full max-w-sm items-center gap-3">
          <Label className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
            Resume
          </Label>
          {isResume ? (
            <a
              target="blank"
              href={user?.profile?.resume}
              className="text-blue-600 font-medium hover:text-blue-800 hover:underline cursor-pointer transition-colors duration-200 bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-100"
            >
              {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span className="text-gray-500 italic">N/A</span>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-3">
          Applied Jobs
        </h1>
        {/* Application Table */}
        <AppliedJobstables />
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
