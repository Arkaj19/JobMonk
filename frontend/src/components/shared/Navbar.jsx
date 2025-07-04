import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { Link, Links } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  // const user = false;
  const { user } = useSelector((store) => store.auth);
  return (
    <div className="bg-gradient-to-r from-sky-50 via-white to-blue-50 border-b border-sky-100">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job
            <span className="bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Monk
            </span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5 text-gray-700">
            {/* <li><Link>Home</Link></li> */}
            <li className="hover:text-sky-600 transition-colors duration-200 cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-sky-600 transition-colors duration-200 cursor-pointer">
              <Link to="/jobs">Jobs</Link>
            </li>
            <li className="hover:text-sky-600 transition-colors duration-200 cursor-pointer">
              <Link to="/browse">Browse</Link>
            </li>
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="border-sky-200 text-sky-700 hover:bg-sky-50 hover:border-sky-300"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                {/* <Button variant="outline">Open Popover</Button> */}
                <Avatar className="cursor-pointer ring-2 ring-sky-200 hover:ring-sky-300 transition-all duration-200">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 border-sky-100 shadow-xl">
                <div className="flex gap-4 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium text-gray-800">Arkajyoti</h4>
                    <p className="text-sm text-gray-600">Lorem Ipsum dolor</p>
                  </div>
                </div>
                <div className="flex flex-col my-2 text-gray-600">
                  <div className="flex w-fit items-center gap-2 cursor-pointer hover:text-sky-600 transition-colors duration-200">
                    <User2></User2>
                    <Button
                      variant="link"
                      className="text-gray-600 hover:text-sky-600"
                    >
                      <Link to="/profile">View Profile</Link>
                    </Button>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer hover:text-sky-600 transition-colors duration-200">
                    <LogOut></LogOut>
                    <Button
                      variant="link"
                      className="text-gray-600 hover:text-sky-600"
                    >
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
