import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Navbar from "../shared/Navbar";
import { Input } from "../ui/input";
import CompaniesTable from "./CompaniesTable";
import { useNavigate } from "react-router-dom";
import usegetallCompanies from "@/hooks/usegetallCompanies";
import { useDispatch } from "react-redux";
import { setsearchCompanyByText } from "@/redux/CompanySlice";

const Companies = () => {
  usegetallCompanies();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setsearchCompanyByText(input));
  }, [input]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Companies</h1>
            <p className="text-gray-600">Manage your registered companies</p>
          </div>

          {/* Controls Section */}
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex-1 max-w-sm">
              <div className="relative">
                <Input
                  className="pl-10 pr-4 py-2 w-full border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Search companies by name..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <Button
              onClick={() => navigate("/admin/companies/create")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200 flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
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
              New Company
            </Button>
          </div>
        </div>

        {/* Table Section */}
        <div className="pb-8">
          <CompaniesTable />
        </div>
      </div>
    </div>
  );
};

export default Companies;
