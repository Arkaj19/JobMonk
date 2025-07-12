import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    allJobs: [],
    singlejob: null,
    allAdminJobs: [],
    searchJobByText: "",
    searchedQuery: "",
    allAppliedJobs: [],
    //verison 1.2
    loading: false,
  },
  reducers: {
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },
    setSingleJob: (state, action) => {
      state.singlejob = action.payload;
    },
    setAdminJobs: (state, action) => {
      state.allAdminJobs = action.payload;
    },
    setsearchJobByText: (state, action) => {
      state.searchJobByText = action.payload;
    },
    setSearchedQuery: (state, action) => {
      state.searchedQuery = action.payload;
    },
    setallAppliedJobs: (state, action) => {
      state.allAppliedJobs = action.payload;
    },
    // version 1.2
    // Add this new action for deleting a job
    deleteAdminJob: (state, action) => {
      state.allAdminJobs = state.allAdminJobs.filter(
        (job) => job._id !== action.payload
      );
    },
  },
});

export const {
  setAllJobs,
  setSingleJob,
  setAdminJobs,
  setsearchJobByText,
  setSearchedQuery,
  setallAppliedJobs,
  //version 1.2
  deleteAdminJob,
} = jobSlice.actions;
export default jobSlice.reducer;
