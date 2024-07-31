import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useJobApply } from "../hooks/useJobApply";

const Apply = () => {
  const [jobPosting, setJobPosting] = useState(null);
  const [jobHistory, setJobHistory] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const { applyForJob, error, isLoading } = useJobApply();

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
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await applyForJob(jobHistory, coverLetter, id);
  };

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
      <form className="apply-form" onSubmit={handleSubmit}>
        <label>Job History</label>
        <textarea
          rows="4"
          cols="50"
          onChange={(e) => setJobHistory(e.target.value)}
          value={jobHistory}
        />
        <label>Cover Letter</label>
        <textarea
          rows="4"
          cols="50"
          onChange={(e) => setCoverLetter(e.target.value)}
          value={coverLetter}
        />
        <button disabled={isLoading}>Submit</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Apply;
