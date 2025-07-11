import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import {
  ArrowLeft,
  Building2,
  Globe,
  Loader2,
  MapPin,
  Upload,
} from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import axios from "axios";
import { COMPANY_API_END_POINT } from "@/utils/constants";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import usegetCompanyById from "@/hooks/usegetCompanyById";

const CompanySetup = () => {
  const params = useParams();
  usegetCompanyById(params.id);
  const [input, setInput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null,
  });
  const { singleCompany } = useSelector((store) => store.company);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(input);
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("description", input.description);
    formData.append("website", input.website);
    formData.append("location", input.location);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      setLoading(true);
      const res = await axios.put(
        `${COMPANY_API_END_POINT}/update/${params.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/companies");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setInput({
      name: singleCompany.name || "",
      description: singleCompany.description || "",
      website: singleCompany.website || "",
      location: singleCompany.location || "",
      file: singleCompany.file || null,
    });
  }, [singleCompany]);
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-xl mx-auto my-10">
        <form onSubmit={submitHandler}>
          <div className="flex items-center gap-5 p-10">
            <Button
              onClick={() => navigate("/admin/companies")}
              variant="outline"
              className="flex items-center gap-2 text-gray-600 font-medium hover:text-gray-800 hover:bg-white border-gray-200 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
            >
              <ArrowLeft size={18} />
              <span>Back</span>
            </Button>
            <h1 className="font-bold text-2xl text-gray-900 tracking-tight">
              Company Setup
            </h1>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mx-4 lg:mx-0">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Building2 size={16} className="text-gray-500" />
                  Company Name
                </Label>
                <Input
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={changeEventHandler}
                  className="border-gray-200 focus:border-gray-400 focus:ring-gray-400/20 transition-all duration-200 bg-gray-50 focus:bg-white hover:bg-white rounded-xl h-12 text-gray-700 placeholder:text-gray-400"
                  placeholder="Enter company name"
                />
              </div>
              <div className="space-y-3">
                <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-400 rounded-full flex-shrink-0"></div>
                  Description
                </Label>
                <Input
                  type="text"
                  name="description"
                  value={input.description}
                  onChange={changeEventHandler}
                  className="border-gray-200 focus:border-gray-400 focus:ring-gray-400/20 transition-all duration-200 bg-gray-50 focus:bg-white hover:bg-white rounded-xl h-12 text-gray-700 placeholder:text-gray-400"
                  placeholder="Brief description"
                />
              </div>
              <div className="space-y-3">
                <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Globe size={16} className="text-gray-500" />
                  Website
                </Label>
                <Input
                  type="text"
                  name="website"
                  value={input.website}
                  onChange={changeEventHandler}
                  className="border-gray-200 focus:border-gray-400 focus:ring-gray-400/20 transition-all duration-200 bg-gray-50 focus:bg-white hover:bg-white rounded-xl h-12 text-gray-700 placeholder:text-gray-400"
                  placeholder="https://example.com"
                />
              </div>
              <div className="space-y-3">
                <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <MapPin size={16} className="text-gray-500" />
                  Location
                </Label>
                <Input
                  type="text"
                  name="location"
                  value={input.location}
                  onChange={changeEventHandler}
                  className="border-gray-200 focus:border-gray-400 focus:ring-gray-400/20 transition-all duration-200 bg-gray-50 focus:bg-white hover:bg-white rounded-xl h-12 text-gray-700 placeholder:text-gray-400"
                  placeholder="City, Country"
                />
              </div>
              <div className="space-y-3 col-span-2">
                <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Upload size={16} className="text-gray-500" />
                  Company Logo
                </Label>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={changeFileHandler}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="flex items-center justify-center w-full h-14 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 hover:bg-gray-100 hover:border-gray-400 transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <Upload size={20} className="text-gray-500" />
                      <span className="text-gray-600 font-medium">
                        {input.file
                          ? input.file.name
                          : "Choose file or drag and drop"}
                      </span>
                    </div>
                  </label>
                  <div className="mt-2 text-xs text-gray-400 text-center">
                    PNG, JPG up to 10MB
                  </div>
                </div>
              </div>
            </div>
            {loading ? (
              <Button
                disabled
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm transition-all duration-300"
              >
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Updating Company...
              </Button>
            ) : (
              <Button
                type="submit"
                className="w-full mt-8 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.01] active:scale-[0.99]"
              >
                Update Company
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanySetup;
