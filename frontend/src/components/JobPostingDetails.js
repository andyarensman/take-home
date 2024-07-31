import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const JobPostingDetails = ({ jobPosting }) => {
  const { user } = useAuthContext();

  return (
    <div className="job-posting-details">
      <h4>{jobPosting.title}</h4>
      <p>{jobPosting.description}</p>
      <p>
        {formatDistanceToNow(new Date(jobPosting.createdAt), {
          addSuffix: true,
        })}
      </p>
      {user && <Link to={"/apply/" + jobPosting._id}>Apply</Link>}
    </div>
  );
};

export default JobPostingDetails;
