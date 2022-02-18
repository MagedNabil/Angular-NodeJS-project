const mongoose = require("mongoose");
const drSchema = require("./dr-schema");

const doctor = mongoose.model("doctors", drSchema);

module.exports = doctor;
