//Version 1.3

// import React, { useEffect, useState } from "react";
// import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
// import { Label } from "./ui/label";
// import { useDispatch } from "react-redux";
// import { setSearchedQuery } from "@/redux/jobSlice";

// const filterData = [
//   {
//     filterType: "Location",
//     array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai", "Kolkata"],
//   },
//   {
//     filterType: "Industry",
//     array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
//   },
// ];

// const FilterCard = () => {
//   const [selectedFilters, setSelectedFilters] = useState({
//     Location: "",
//     Industry: "",
//   });
//   const dispatch = useDispatch();

//   const changeHandler = (filterType, value) => {
//     const newFilters = {
//       ...selectedFilters,
//       [filterType]: value,
//     };
//     setSelectedFilters(newFilters);

//     // Create a search query from all selected filters
//     const activeFilters = Object.values(newFilters).filter(
//       (filter) => filter !== ""
//     );
//     const searchQuery = activeFilters.join(" ");
//     dispatch(setSearchedQuery(searchQuery));
//   };

//   // Add a clear filters function
//   const clearFilters = () => {
//     setSelectedFilters({
//       Location: "",
//       Industry: "",
//     });
//     dispatch(setSearchedQuery(""));
//   };

//   const hasActiveFilters = Object.values(selectedFilters).some(
//     (filter) => filter !== ""
//   );

//   return (
//     <div className="w-full bg-white p-3 rounded-md">
//       <div className="mb-4">
//         <h1 className="font-bold text-lg mb-3">Filter Jobs</h1>
//         <button
//           onClick={clearFilters}
//           disabled={!hasActiveFilters}
//           className={`px-3 py-1.5 text-sm font-medium rounded-md border transition-colors cursor-pointer ${
//             hasActiveFilters
//               ? "bg-red-50 text-red-700 border-red-200 hover:bg-red-100 hover:border-red-300"
//               : "bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed"
//           }`}
//         >
//           Clear Filters
//         </button>
//       </div>
//       <hr className="mb-4" />

//       {filterData.map((data, index) => (
//         <div key={index} className="mb-6">
//           <h1 className="font-bold text-lg mb-3">{data.filterType}</h1>
//           <RadioGroup
//             value={selectedFilters[data.filterType]}
//             onValueChange={(value) => changeHandler(data.filterType, value)}
//           >
//             {data.array.map((item, idx) => {
//               const itemId = `${data.filterType}-${idx}`;
//               return (
//                 <div key={idx} className="flex items-center space-x-2 mb-2">
//                   <RadioGroupItem value={item} id={itemId} />
//                   <Label htmlFor={itemId} className="cursor-pointer">
//                     {item}
//                   </Label>
//                 </div>
//               );
//             })}
//           </RadioGroup>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FilterCard;

import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

// Static location data (you can also make this dynamic if needed)
const staticLocations = [
  "Noida",
  "Bangalore",
  "Hyderabad",
  "Pune",
  "Mumbai",
  "Kolkata",
];

const FilterCard = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    Location: "",
    Industry: "",
  });
  const dispatch = useDispatch();

  // Get jobs from Redux store (assuming you have jobs in your Redux state)
  const { allJobs } = useSelector((store) => store.job);

  // Generate dynamic filter data
  const getFilterData = () => {
    // Extract unique roles/industries from jobs
    const uniqueRoles = [
      ...new Set(
        allJobs?.map((job) => job.title || job.role || job.position) || []
      ),
    ];

    return [
      {
        filterType: "Location",
        array: staticLocations,
      },
      {
        filterType: "Industry",
        array: uniqueRoles.length > 0 ? uniqueRoles : ["No jobs available"],
      },
    ];
  };

  const filterData = getFilterData();

  const changeHandler = (filterType, value) => {
    const newFilters = {
      ...selectedFilters,
      [filterType]: value,
    };
    setSelectedFilters(newFilters);

    // Create a search query from all selected filters
    const activeFilters = Object.values(newFilters).filter(
      (filter) => filter !== ""
    );
    const searchQuery = activeFilters.join(" ");
    dispatch(setSearchedQuery(searchQuery));
  };

  // Add a clear filters function
  const clearFilters = () => {
    setSelectedFilters({
      Location: "",
      Industry: "",
    });
    dispatch(setSearchedQuery(""));
  };

  const hasActiveFilters = Object.values(selectedFilters).some(
    (filter) => filter !== ""
  );

  return (
    <div className="w-full bg-white p-3 rounded-md">
      <div className="mb-4">
        <h1 className="font-bold text-lg mb-3">Filter Jobs</h1>
        <button
          onClick={clearFilters}
          disabled={!hasActiveFilters}
          className={`px-3 py-1.5 text-sm font-medium rounded-md border transition-colors ${
            hasActiveFilters
              ? "bg-red-50 text-red-700 border-red-200 hover:bg-red-100 hover:border-red-300"
              : "bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed"
          }`}
        >
          Clear Filters
        </button>
      </div>
      <hr className="mb-4" />

      {filterData.map((data, index) => (
        <div key={index} className="mb-6">
          <h1 className="font-bold text-lg mb-3">{data.filterType}</h1>
          <RadioGroup
            value={selectedFilters[data.filterType]}
            onValueChange={(value) => changeHandler(data.filterType, value)}
          >
            {data.array.map((item, idx) => {
              const itemId = `${data.filterType}-${idx}`;
              return (
                <div key={idx} className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value={item} id={itemId} />
                  <Label htmlFor={itemId} className="cursor-pointer">
                    {item}
                  </Label>
                </div>
              );
            })}
          </RadioGroup>
        </div>
      ))}
    </div>
  );
};

export default FilterCard;
