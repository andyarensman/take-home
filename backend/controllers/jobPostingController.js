const JobPosting = require("../models/jobPostingModel");
const mongoose = require("mongoose");

// get all job postings
const getJobPostings = async (req, res) => {
  const jobPostings = await JobPosting.find({}).sort({ createdAt: -1 });

  res.status(200).json(jobPostings);
};

// get single job posting
const getSingleJobPosting = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such job posting" });
  }

  const jobPosting = await JobPosting.findById(id);

  if (!jobPosting) {
    return res.status(404).json({ error: "No such job posting" });
  }

  res.status(200).json(jobPosting);
};

// create new job posting
const createJobPosting = async (req, res) => {
  const { title, description } = req.body;

  // add doc to db
  try {
    const jobPosting = await JobPosting.create({ title, description });
    res.status(200).json(jobPosting);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a job posting
const deleteJobPosting = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such job posting" });
  }

  const jobPosting = await JobPosting.findOneAndDelete({ _id: id });

  if (!jobPosting) {
    return res.status(400).json({ error: "No such job posting" });
  }

  res.status(200).json(jobPosting);
};

// update a job posting
const updateJobPosting = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such job posting" });
  }

  const jobPosting = await JobPosting.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!jobPosting) {
    return res.status(400).json({ error: "No such job posting" });
  }

  res.status(200).json(jobPosting);
};

module.exports = {
  getJobPostings,
  getSingleJobPosting,
  createJobPosting,
  deleteJobPosting,
  updateJobPosting,
};
