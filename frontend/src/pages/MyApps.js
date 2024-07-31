import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import JobAppDetails from "../components/JobAppDetails";

const MyApps = () => {
  const [jobApps, setJobApps] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchJobApps = async () => {
      const response = await fetch("/applied-job", {
        headers: { Authorization: `Bearer ${user.token}` },
      });

      const json = await response.json();

      if (response.ok) {
        setJobApps(json);
      }
    };
    if (user) {
      fetchJobApps();
    }
  }, [user]);

  return (
    <div className="home">
      <h3>My Job Applications</h3>
      <div className="job-postings">
        {jobApps &&
          jobApps.map((jobApp) => (
            <JobAppDetails key={jobApp._id} jobApp={jobApp} />
          ))}
      </div>
    </div>
  );
};

export default MyApps;
