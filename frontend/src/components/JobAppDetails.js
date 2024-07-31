import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const JobAppDetails = ({ jobApp }) => {
  return (
    <div className="job-posting-details">
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
