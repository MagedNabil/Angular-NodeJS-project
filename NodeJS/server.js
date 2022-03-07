const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const morgan = require("morgan");
// const emp = require("./emp/emp-router");
const adminRoute = require("./admin/adminRouter")

const empDb = require("./emp/emp-roterDb.js");
const drDb = require("./doctors/drs-roter");
require('dotenv').config();
const mongoose = require("mongoose");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use("/", emp);
app.use("/employees", empDb);
app.use("/doctors", drDb);
app.use("/admin", adminRoute);

app.use(morgan("combined"));

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send(err);
});

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/test");
}
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
