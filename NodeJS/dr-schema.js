const mongoose = require("mongoose");

const drSchema = new mongoose.Schema({
  img: String,
  name: String,
  evaluation: String,
  Specialization: String,
  rate: Number,
  fees: Number,
  add: String,
  contact: Number,
});

module.exports = drSchema;
