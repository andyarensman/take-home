import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const Apply = () => {
  const [jobPosting, setJobPosting] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    const fetchSingleJobPosting = async () => {
      const response = await fetch("/job-postings/" + id);
      const json = await response.json();

      if (response.ok) {
        setJobPosting(json);
      }
    };
    fetchSingleJobPosting();
  });

  return (
    <div>
      {jobPosting && (
        <div className="job-posting-details">
          <h4>{jobPosting.title}</h4>
          <p>{jobPosting.description}</p>
          <p>
            {formatDistanceToNow(new Date(jobPosting.createdAt), {
              addSuffix: true,
            })}
          </p>
        </div>
      )}
      <h4>Apply Now</h4>
      <form className="apply-form">
        <label>Job History</label>
        <textarea rows="4" cols="50" />
        <label>Cover Letter</label>
        <textarea rows="4" cols="50" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Apply;
