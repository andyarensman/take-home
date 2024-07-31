const express = require("express");
const {
  getJobPostings,
  getSingleJobPosting,
  createJobPosting,
  deleteJobPosting,
  updateJobPosting,
} = require("../controllers/jobPostingController");

const router = express.Router();

// GET all job postings
router.get("/", getJobPostings);

// GET single job posting
router.get("/:id", getSingleJobPosting);

// POST a new job posting
router.post("/", createJobPosting);

// DELETE a job posting
router.delete("/:id", deleteJobPosting);

// UPDATE a job posting
router.patch("/:id", updateJobPosting);

module.exports = router;
