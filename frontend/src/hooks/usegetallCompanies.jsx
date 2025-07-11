import { setCompanies } from "@/redux/CompanySlice";
import { COMPANY_API_END_POINT } from "@/utils/constants";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const usegetallCompanies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchallCompanies = async () => {
      try {
        console.log("Making API call to:", `${COMPANY_API_END_POINT}/get`); // Debug log
        const res = await axios.get(`${COMPANY_API_END_POINT}/get`, {
          withCredentials: true,
        });
        console.log("API Response:", res.data); // Debug log
        if (res.data.success) {
          console.log("Companies data:", res.data.companies); // Debug log
          dispatch(setCompanies(res.data.companies));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchallCompanies();
  }, []);
};

export default usegetallCompanies;
