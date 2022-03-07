const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
  name: String,
  age: Number,
  salary: Number,
  statuse: String,
});

module.exports = empSchema;
