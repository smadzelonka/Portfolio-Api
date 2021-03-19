const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfoliosSchema = new Schema({
  title: { type: String, required: true, maxlength: 128 },
  stack: { type: String, required: true },
  githubWebsite: { type: String, required: true, maxlength: 128 },
  githubImage: { type: String, required: true, maxlength: 128 },
  image: { type: String, required: true },
  // userIs: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Portfolio", portfoliosSchema);
