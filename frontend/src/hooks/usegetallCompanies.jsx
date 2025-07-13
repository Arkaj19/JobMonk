import { setLoading } from "@/redux/authSlice";
import { deleteCompany, setCompanies } from "@/redux/CompanySlice";
import { COMPANY_API_END_POINT } from "@/utils/constants";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const usegetallCompanies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchallCompanies = async () => {
      try {
        // console.log("Making API call to:", `${COMPANY_API_END_POINT}/get`); // Debug log
        const res = await axios.get(`${COMPANY_API_END_POINT}/get`, {
          withCredentials: true,
        });
        // console.log("API Response:", res.data); // Debug log
        if (res.data.success) {
          // console.log("Companies data:", res.data.companies); // Debug log
          dispatch(setCompanies(res.data.companies));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchallCompanies();
  }, []);

  // Add delete functionality
  const deleteCompanyById = async (companyId) => {
    try {
      dispatch(setLoading(true));
      const res = await axios.delete(
        `${COMPANY_API_END_POINT}/delete/${companyId}`,
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        dispatch(deleteCompany(companyId));
        toast.success("Company deleted successfully");
        return true;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to delete company");
      return false;
    } finally {
      dispatch(setLoading(false));
    }
  };

  return { deleteCompanyById };
};

export default usegetallCompanies;
