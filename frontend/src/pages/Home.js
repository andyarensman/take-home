import { useEffect } from "react";
import JobPostingDetails from "../components/JobPostingDetails";
import { useJobPostingContext } from "../hooks/useJobPostingContext";

const Home = () => {
  const { jobPostings, dispatch } = useJobPostingContext();

  useEffect(() => {
    const fetchJobPostings = async () => {
      const response = await fetch("/job-postings");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_JOB_POSTINGS", payload: json });
      }
    };

    fetchJobPostings();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="job-postings">
        {jobPostings &&
          jobPostings.map((jobPosting) => (
            <JobPostingDetails key={jobPosting._id} jobPosting={jobPosting} />
          ))}
      </div>
    </div>
  );
};

export default Home;
