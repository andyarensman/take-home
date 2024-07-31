import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useJobApply = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { user } = useAuthContext();

  const applyForJob = async (job_history, cover_letter, job_id) => {
    setIsLoading(true);
    setError(null);

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const response = await fetch("/applied-job", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ job_history, cover_letter, job_id }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      console.log(json);
      setIsLoading(false);
    }
  };

  return { applyForJob, isLoading, error };
};
