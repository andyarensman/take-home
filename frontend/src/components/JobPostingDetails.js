import formatDistanceToNow from "date-fns/formatDistanceToNow";

const JobPostingDetails = ({ jobPosting }) => {
  return (
    <div className="job-posting-details">
      <h4>{jobPosting.title}</h4>
      <p>{jobPosting.description}</p>
      <p>
        {formatDistanceToNow(new Date(jobPosting.createdAt), {
          addSuffix: true,
        })}
      </p>
    </div>
  );
};

export default JobPostingDetails;
