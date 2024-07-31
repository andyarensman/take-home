const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const jobPostingSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("JobPosting", jobPostingSchema);
