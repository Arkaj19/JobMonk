import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const Navigate = useNavigate();

  const daysAgofn = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currenttime = new Date();
    const difference = currenttime - createdAt;
    return Math.floor(difference / (1000 * 24 * 60 * 60));
  };

  const JobId = "dwfwfefeafeaf";
  return (
    <div className="group p-6 rounded-xl shadow-lg bg-white border border-gray-100 hover:shadow-2xl hover:border-gray-200 transition-all duration-300 cursor-pointer relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-indigo-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-gray-500 font-medium flex items-center">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            {daysAgofn(job?.createdAt) == 0
              ? "Today"
              : `${daysAgofn(job?.createdAt)} days ago`}
          </p>
          <Button
            variant="outline"
            className="rounded-full hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 group/bookmark"
            size="icon"
          >
            <Bookmark className="w-4 h-4 group-hover/bookmark:text-blue-600 transition-colors duration-200" />
          </Button>
        </div>

        <div className="flex items-center gap-4 my-4">
          <Button
            className="p-3 hover:scale-105 transition-transform duration-200 shadow-md hover:shadow-lg"
            variant="outline"
            size="icon"
          >
            <Avatar className="w-8 h-8">
              <AvatarImage
                src="https://e7.pngegg.com/pngimages/56/318/png-clipart-google-logo-logo-logo-company-text.png"
                className="object-contain"
              />
            </Avatar>
          </Button>
          <div>
            <h1 className="font-semibold text-lg text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
              {job?.company?.name}
            </h1>
            <p className="text-sm text-gray-500 font-medium flex items-center">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
              India
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h1 className="font-bold text-xl text-gray-900 my-3 leading-tight group-hover:text-blue-700 transition-colors duration-200">
            {job?.title}
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            {job?.description}
          </p>
        </div>

        <div className="flex items-center gap-3 mt-6 flex-wrap">
          <Badge
            className="bg-blue-600 text-white font-semibold shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 border border-blue-600 px-3 py-1.5 rounded-full"
            variant="ghost"
          >
            {job?.position} Positions
          </Badge>
          <Badge
            className="bg-teal-600 text-white font-semibold shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 border border-teal-600 px-3 py-1.5 rounded-full"
            variant="ghost"
          >
            {job?.jobType}
          </Badge>
          <Badge
            className="bg-indigo-700 text-white font-semibold shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 border border-indigo-700 px-3 py-1.5 rounded-full"
            variant="ghost"
          >
            {job?.salary} LPA
          </Badge>
        </div>

        <div className="flex items-center gap-4 mt-6 pt-4 border-t border-gray-100">
          <Button
            variant="outline"
            onClick={() => Navigate(`/description/${job?._id}`)}
            className="hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 font-medium cursor-pointer"
          >
            Details
          </Button>
          <Button className="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-semibold cursor-pointer">
            Save For Later
          </Button>
        </div>
      </div>

      {/* Subtle corner accent */}
      <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
    </div>
  );
};

export default Job;
