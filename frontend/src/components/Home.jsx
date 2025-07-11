import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import CategoryCarousel from "./CategoryCarousel";
import LatestJobs from "./LatestJobs";
import Footer from "./Footer";
import usegetAllJobs from "@/hooks/usegetAllJobs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CompanyLogosCarousel from "./CompanyLogosCarousel";

const Home = () => {
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === "recruiter") {
      navigate("/admin/companies");
    }
  }, []);
  usegetAllJobs();
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <CompanyLogosCarousel />
      <LatestJobs />
      <Footer />
    </div>
  );
};

export default Home;
