const express = require("express");

const {
  getUsersAppliedJobs,
  getSingleAppliedJob,
  createJobApplied,
  deleteAppliedJob,
  updateAppliedJob,
} = require("../controllers/appliedJobController");

const router = express.Router();

// GET all applied job postings
router.get("/", getUsersAppliedJobs);

// GET single applied job posting
router.get("/:id", getSingleAppliedJob);

// POST a new applied job posting
router.post("/", createJobApplied);

// DELETE a applied job posting
router.delete("/:id", deleteAppliedJob);

// UPDATE a applied job posting
router.patch("/:id", updateAppliedJob);

module.exports = router;
