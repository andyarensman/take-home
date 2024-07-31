import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEffect, useState } from "react";

const JobAppDetails = ({ jobApp }) => {
  const [jobPosting, setJobPosting] = useState(null);
  const id = jobApp.job_id;

  useEffect(() => {
    const fetchSingleJobPosting = async () => {
      const response = await fetch("/job-postings/" + id);
      const json = await response.json();

      if (response.ok) {
        setJobPosting(json);
      }
    };
    fetchSingleJobPosting();
  }, []);
  return (
    <div className="job-posting-details">
      {jobPosting && <h3>{jobPosting.title}</h3>}
      <h4>Submitted Job History</h4>
      <p>{jobApp.job_history}</p>
      <h4>Submitted Cover Letter</h4>
      <p>{jobApp.cover_letter}</p>
      <p>
        {formatDistanceToNow(new Date(jobApp.createdAt), {
          addSuffix: true,
        })}
      </p>
    </div>
  );
};

export default JobAppDetails;
