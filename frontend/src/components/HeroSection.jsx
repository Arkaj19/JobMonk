// import React, { useState } from "react";
// import { Search, Sparkles } from "lucide-react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { Button } from "./ui/button";
// import { setSearchedQuery } from "@/redux/jobSlice";

// const HeroSection = () => {
//   const [query, setQuery] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const searchJobHandler = () => {
//     dispatch(setSearchedQuery(query));
//     console.log("Dispatched setSearchedQuery with:", query);
//     navigate("/browse");
//   };

//   return (
//     <div className="text-center py-16 bg-gradient-to-b from-gray-50 to-white">
//       <div className="flex flex-col gap-8 max-w-4xl mx-auto px-6">
//         {/* Badge */}
//         <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-700 font-medium text-sm mx-auto border border-sky-200">
//           <Sparkles className="h-4 w-4" />
//           No.1 Job Hunt Website
//         </span>

//         {/* Main Heading */}
//         <h1 className="text-5xl md:text-6xl font-bold leading-tight">
//           Search, Apply & <br />
//           Get Your <span className="text-sky-600">Dream Jobs</span>
//         </h1>

//         {/* Subtitle */}
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//           Discover thousands of opportunities from top companies worldwide. Your
//           next career breakthrough is just one search away.
//         </p>

//         {/* Search Bar */}
//         <div className="flex w-full max-w-2xl shadow-lg border border-gray-200 rounded-full items-center mx-auto bg-white">
//           <div className="flex-1 flex items-center pl-6 py-3">
//             <Search className="h-5 w-5 mr-3 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search jobs, companies, skills..."
//               onChange={(e) => {
//                 console.log("Typing:", e.target.value);
//                 setQuery(e.target.value);
//               }}
//               className="outline-none border-none w-full text-base placeholder-gray-400"
//             />
//           </div>
//           <Button
//             onClick={searchJobHandler}
//             className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-full mr-1 transition-colors"
//           >
//             <Search className="h-5 w-5" />
//           </Button>
//         </div>
//         {/* <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
//           <input
//             type="text"
//             placeholder="Find your dream jobs"
//             onChange={(e) => {
//               console.log("Input changed to:", e.target.value);
//               setQuery(e.target.value);
//             }}
//             className="outline-none border-none w-full"
//           />
//           <Button
//             onClick={searchJobHandler}
//             className="rounded-r-full bg-[#6A38C2]"
//           >
//             <Search className="h-5 w-5" />
//           </Button>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

//version 1.1

// import React, { useState } from "react";
// import { Search, Sparkles } from "lucide-react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { Button } from "./ui/button";
// import { setSearchedQuery } from "@/redux/jobSlice";

// const HeroSection = () => {
//   const [query, setQuery] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const searchJobHandler = () => {
//     dispatch(setSearchedQuery(query));
//     console.log("Dispatched setSearchedQuery with:", query);
//     navigate("/browse");
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       searchJobHandler();
//     }
//   };

//   return (
//     <div className="text-center py-16 bg-gradient-to-b from-gray-50 to-white">
//       <div className="flex flex-col gap-8 max-w-4xl mx-auto px-6">
//         {/* Badge */}
//         <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-700 font-medium text-sm mx-auto border border-sky-200">
//           <Sparkles className="h-4 w-4" />
//           No.1 Job Hunt Website
//         </span>

//         {/* Main Heading */}
//         <h1 className="text-5xl md:text-6xl font-bold leading-tight">
//           Search, Apply & <br />
//           Get Your <span className="text-sky-600">Dream Jobs</span>
//         </h1>

//         {/* Subtitle */}
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//           Discover thousands of opportunities from top companies worldwide. Your
//           next career breakthrough is just one search away.
//         </p>

//         {/* Search Bar */}
//         <div className="flex w-full max-w-2xl shadow-lg border border-gray-200 rounded-full items-center mx-auto bg-white">
//           <div className="flex-1 flex items-center pl-6 py-3">
//             <Search className="h-5 w-5 mr-3 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search jobs, companies, skills..."
//               value={query}
//               onChange={(e) => {
//                 console.log("Typing:", e.target.value);
//                 setQuery(e.target.value);
//               }}
//               onKeyDown={handleKeyDown}
//               className="outline-none border-none w-full text-base placeholder-gray-400"
//             />
//           </div>
//           <Button
//             onClick={searchJobHandler}
//             className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-full mr-1 transition-colors"
//           >
//             <Search className="h-5 w-5" />
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

//Version 1.2

import React, { useState } from "react";
import { Search, Sparkles } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { setSearchedQuery } from "@/redux/jobSlice";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    if (query.trim()) {
      console.log("Dispatching setSearchedQuery with:", query);
      dispatch(setSearchedQuery(query));

      // Navigate with state as backup and slight delay to ensure Redux update
      setTimeout(() => {
        navigate("/browse", {
          state: { searchQuery: query },
          replace: false,
        });
      }, 10);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchJobHandler();
    }
  };

  return (
    <div className="text-center py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="flex flex-col gap-8 max-w-4xl mx-auto px-6">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-700 font-medium text-sm mx-auto border border-sky-200">
          <Sparkles className="h-4 w-4" />
          No.1 Job Hunt Website
        </span>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Search, Apply & <br />
          Get Your <span className="text-sky-600">Dream Jobs</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover thousands of opportunities from top companies worldwide. Your
          next career breakthrough is just one search away.
        </p>

        {/* Search Bar */}
        <div className="flex w-full max-w-2xl shadow-lg border border-gray-200 rounded-full items-center mx-auto bg-white">
          <div className="flex-1 flex items-center pl-6 py-3">
            <Search className="h-5 w-5 mr-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs, companies, skills..."
              value={query}
              onChange={(e) => {
                console.log("Typing:", e.target.value);
                setQuery(e.target.value);
              }}
              onKeyDown={handleKeyDown}
              className="outline-none border-none w-full text-base placeholder-gray-400"
            />
          </div>
          <Button
            onClick={searchJobHandler}
            className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-full mr-1 transition-colors"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
