import React from "react";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42-1lakh", "1lakh to 5 lakh"],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 sticky top-4">
      <h1 className="font-bold text-xl text-gray-900 mb-1">Filter Jobs</h1>
      <p className="text-sm text-gray-500 mb-4">Find your perfect match</p>
      <hr className="mt-4 mb-6 border-gray-200" />
      <RadioGroup className="space-y-6">
        {filterData.map((data, index) => (
          <div key={index} className="space-y-4">
            <h1 className="font-bold text-lg text-gray-800 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full mr-3"></span>
              {data.filterType}
            </h1>
            <div className="pl-4 space-y-3">
              {data.array.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className="flex items-center space-x-3 my-2 group hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200 cursor-pointer"
                  >
                    <RadioGroupItem
                      value={item}
                      className="border-2 border-gray-300 text-blue-600 focus:ring-blue-500 hover:border-blue-400 transition-colors duration-200"
                    />
                    <Label className="text-gray-700 font-medium cursor-pointer group-hover:text-gray-900 transition-colors duration-200 text-sm">
                      {item}
                    </Label>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
