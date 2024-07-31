const AppliedJob = require("../models/appliedJobModel");
const mongoose = require("mongoose");

// get all applied jobs for user
const getUsersAppliedJobs = async (req, res) => {
  const { user_id } = req.body;
  console.log(user_id);
  const appliedJob = await AppliedJob.find({ user_id }).sort({
    createdAt: -1,
  });
  console.log(appliedJob);
  res.status(200).json(appliedJob);
};

// get single applied job
const getSingleAppliedJob = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such job application" });
  }

  const appliedJob = await AppliedJob.findById(id);

  if (!appliedJob) {
    return res.status(404).json({ error: "No such job application" });
  }

  res.status(200).json(appliedJob);
};

// create new applied job
const createJobApplied = async (req, res) => {
  const { user_id, job_history, cover_letter, job_id } = req.body;

  // add doc to db
  try {
    const appliedJob = await AppliedJob.create({
      user_id,
      job_history,
      cover_letter,
      job_id,
    });
    res.status(200).json(appliedJob);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete an applied job
const deleteAppliedJob = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such job application" });
  }

  const appliedJob = await AppliedJob.findOneAndDelete({ _id: id });

  if (!appliedJob) {
    return res.status(400).json({ error: "No such job application" });
  }

  res.status(200).json(appliedJob);
};

// update an applied job
const updateAppliedJob = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such job application" });
  }

  const appliedJob = await AppliedJob.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!appliedJob) {
    return res.status(400).json({ error: "No such job application" });
  }

  res.status(200).json(appliedJob);
};

module.exports = {
  getUsersAppliedJobs,
  getSingleAppliedJob,
  createJobApplied,
  deleteAppliedJob,
  updateAppliedJob,
};
