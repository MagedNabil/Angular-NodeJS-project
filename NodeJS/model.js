const mongoose = require("mongoose");
const empSchema = require("./empSchema");

const employee = mongoose.model("employees", empSchema);

module.exports = employee;
