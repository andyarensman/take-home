const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const appliedJobSchema = new Schema(
  {
    user_id: { type: String, required: true },
    job_history: { type: String, required: true },
    cover_letter: { type: String, required: true },
    job_id: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AppliedJob", appliedJobSchema);
