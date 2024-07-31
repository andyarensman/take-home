import { JobPostingContext } from "../context/JobPostingContext";
import { useContext } from "react";

export const useJobPostingContext = () => {
  const context = useContext(JobPostingContext);

  if (!context) {
    throw Error(
      "useJobPostingContext must be used inside a JobPostingContextProvider"
    );
  }

  return context;
};
