import React, { useState } from "react";
import { Search, Sparkles } from "lucide-react";

const HeroSection = () => {
  const [searchValue, setSearchValue] = useState("");

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
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="outline-none border-none w-full text-base placeholder-gray-400"
            />
          </div>
          <button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-full mr-1 transition-colors">
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

// import React, { useState } from "react";
// import { Search, Sparkles } from "lucide-react";

// const HeroSection = () => {
//   const [searchValue, setSearchValue] = useState("");

//   return (
//     <div className="relative text-center py-16 bg-gradient-to-b from-gray-50 to-white">
//       {/* Animated Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-blue-50">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
//         <div className="absolute top-40 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
//         <div className="absolute -bottom-8 left-1/2 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-500"></div>

//         {/* Extended background for scroll */}
//         <div className="absolute top-[500px] right-20 w-64 h-64 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse delay-2000"></div>
//         <div className="absolute top-[700px] left-16 w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse delay-3000"></div>
//       </div>

//       <div className="relative z-10 flex flex-col gap-8 max-w-4xl mx-auto px-6">
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
//               value={searchValue}
//               onChange={(e) => setSearchValue(e.target.value)}
//               className="outline-none border-none w-full text-base placeholder-gray-400"
//             />
//           </div>
//           <button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-full mr-1 transition-colors">
//             <Search className="h-5 w-5" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
