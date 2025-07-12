// import React, { useEffect, useState } from "react";
// import { Label } from "./ui/label";
// import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
// import { setSearchedQuery } from "@/redux/jobSlice";
// import { useDispatch } from "react-redux";

// const filterData = [
//   {
//     filterType: "Location",
//     array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai", "Kolkata"],
//   },
//   {
//     filterType: "Industry",
//     array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
//   },
//   {
//     filterType: "Salary",
//     array: ["0-40k", "42-1lakh", "1lakh to 5 lakh"],
//   },
// ];

// const FilterCard = () => {
//   const [selectedValue, setSelectedValue] = useState("");
//   const dispatch = useDispatch();
//   const changeHandler = (value) => {
//     setSelectedValue(value);
//   };
//   useEffect(() => {
//     dispatch(setSearchedQuery(selectedValue));
//   }, [selectedValue]);
//   return (
//     <div className="w-full bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 sticky top-4">
//       <h1 className="font-bold text-xl text-gray-900 mb-1">Filter Jobs</h1>
//       <p className="text-sm text-gray-500 mb-4">Find your perfect match</p>
//       <hr className="mt-4 mb-6 border-gray-200" />
//       <RadioGroup
//         value={selectedValue}
//         onValueChange={changeHandler}
//         className="space-y-6"
//       >
//         {filterData.map((data, index) => (
//           <div key={index} className="space-y-4">
//             <h1 className="font-bold text-lg text-gray-800 flex items-center">
//               <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full mr-3"></span>
//               {data.filterType}
//             </h1>
//             <div className="pl-4 space-y-3">
//               {data.array.map((item, itemIndex) => {
//                 const itemId = `id${index}-${itemIndex}`;
//                 return (
//                   <div
//                     key={itemIndex}
//                     className="flex items-center space-x-3 my-2 group hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200 cursor-pointer"
//                   >
//                     <RadioGroupItem
//                       value={item}
//                       id={itemId}
//                       className="border-2 border-gray-300 text-blue-600 focus:ring-blue-500 hover:border-blue-400 transition-colors duration-200"
//                     />
//                     <Label
//                       htnlFor={itemId}
//                       className="text-gray-700 font-medium cursor-pointer group-hover:text-gray-900 transition-colors duration-200 text-sm"
//                     >
//                       {item}
//                     </Label>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         ))}
//       </RadioGroup>
//     </div>
//   );
// };

// export default FilterCard;

// Version 1.1

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
//   {
//     filterType: "Salary",
//     array: ["0-40k", "42k-1lakh", "1lakh to 5lakh"],
//   },
// ];

// const FilterCard = () => {
//   const [selectedValue, setSelectedValue] = useState("");
//   const dispatch = useDispatch();

//   const changeHandler = (value) => {
//     setSelectedValue(value);
//     dispatch(setSearchedQuery(value));
//   };

//   // Add a clear filters function
//   const clearFilters = () => {
//     setSelectedValue("");
//     dispatch(setSearchedQuery(""));
//   };

//   return (
//     <div className="w-full bg-white p-3 rounded-md">
//       <div className="flex items-center justify-between mb-4">
//         <h1 className="font-bold text-lg">Filter Jobs</h1>
//         {selectedValue && (
//           <button
//             onClick={clearFilters}
//             className="text-sm text-blue-600 hover:text-blue-800 font-medium"
//           >
//             Clear Filters
//           </button>
//         )}
//       </div>
//       <p className="text-sm text-gray-600 mb-4">Find your perfect match</p>
//       <hr className="mb-4" />
//       <RadioGroup value={selectedValue} onValueChange={changeHandler}>
//         {filterData.map((data, index) => (
//           <div key={index} className="mb-4">
//             <h1 className="font-bold text-lg mb-2">{data.filterType}</h1>
//             {data.array.map((item, idx) => {
//               const itemId = `id${index}-${idx}`;
//               return (
//                 <div key={idx} className="flex items-center space-x-2 mb-2">
//                   <RadioGroupItem value={item} id={itemId} />
//                   <Label htmlFor={itemId} className="cursor-pointer">
//                     {item}
//                   </Label>
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//       </RadioGroup>
//     </div>
//   );
// };

// export default FilterCard;

// Version 1.2

import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai", "Kolkata"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
  },
];

const FilterCard = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    Location: "",
    Industry: "",
  });
  const dispatch = useDispatch();

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
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-bold text-lg">Filter Jobs</h1>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            Clear Filters
          </button>
        )}
      </div>
      <p className="text-sm text-gray-600 mb-4">Find your perfect match</p>
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
