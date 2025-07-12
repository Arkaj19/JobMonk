import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    singleCompany: null,
    companies: [],
    searchCompanyByText: "",
  },
  reducers: {
    setSingleCompany: (state, action) => {
      state.singleCompany = action.payload;
    },
    setCompanies: (state, action) => {
      state.companies = action.payload;
    },

    setsearchCompanyByText: (state, action) => {
      state.searchCompanyByText = action.payload;
    },
    // Add this action to your reducers // Version 1.2
    deleteCompany: (state, action) => {
      state.companies = state.companies.filter(
        (company) => company._id !== action.payload
      );
    },
  },
});

export const {
  setCompanies,
  setSingleCompany,
  setsearchCompanyByText,
  deleteCompany, // version 1.2
} = companySlice.actions;
export default companySlice.reducer;
