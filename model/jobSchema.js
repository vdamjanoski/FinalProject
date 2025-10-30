const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: [true, "You must enter the job title"],
  },
  description: {
    type: String,
    required: [true, "You must enter the job description"],
  },
  skillsRequired: {
    type: [String],
    required: true,
  },
  status: {
    type: String,
    enum: ["Direct", "Open"],
    default: "Open",
  },
},{ timestamps: true });

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;