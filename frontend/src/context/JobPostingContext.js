import { createContext, useReducer } from "react";

export const JobPostingContext = createContext();

export const jobPostingReducer = (state, action) => {
  switch (action.type) {
    case "SET_JOB_POSTINGS":
      return {
        jobPostings: action.payload,
      };
    default:
      return state;
  }
};

export const JobPostingContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(jobPostingReducer, {
    jobPostings: null,
  });

  return (
    <JobPostingContext.Provider value={{ ...state, dispatch }}>
      {children}
    </JobPostingContext.Provider>
  );
};
