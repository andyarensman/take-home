require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const jobPostingRoutes = require("./routes/job-postings");
const userRoutes = require("./routes/user");
const appliedJobsRoutes = require("./routes/applied-job");
const cors = require("cors");

const app = express();

// middleware
app.use(cors({ origin: "http://localhost:3000/" }));
app.use(express.json()); //checks for data

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/job-postings", jobPostingRoutes);
app.use("/user", userRoutes);
app.use("/applied-job", appliedJobsRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listening for requests
    app.listen(process.env.PORT, () => {
      console.log("connecting to db and listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
