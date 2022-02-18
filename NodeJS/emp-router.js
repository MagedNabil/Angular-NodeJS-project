const express = require("express");
const emp = express.Router();
const fs = require("fs/promises");
const db = require("./db.json");

emp.use(express.json());

emp.get("/", (req, res, next) => {
  try {
    res.send(db);
  } catch (error) {
    next(new Error("no data avilable"));
  }
});

emp.get("/employees/:id", (req, res, next) => {
  let ree = new Error("No matching  found");
  if (!db.filter((x) => x.id == req.params.id).length) {
    ree.statuse = 404;
    next(new Error(ree));
  } else {
    res.send(db.filter((x) => x.id == req.params.id));
  }
});

emp.get("/employees", (req, res) => {
  res.send(db.filter((x) => x.id == req.query.id));
});

emp.patch("/employees/:id", (req, res) => {
  index = db.findIndex((obj) => obj.id == req.params.id);
  db[index].name = req.body.name;

  fs.writeFile("./db.json", JSON.stringify(db), function (err) {
    if (err) throw err;
    console.log("Saved!");
    res.send(db);
  });
});

emp.delete("/employees/:id", (req, res) => {
  let deletedDB = db.filter((ele) => ele.id != req.params.id);
  fs.writeFile("./db.json", JSON.stringify(deletedDB), function (err) {
    if (err) throw err;
    console.log("Saved!");
    res.send(deletedDB);
  });
});

emp.post("/employees", (req, res) => {
  db.push(req.body);
  fs.writeFile("./db.json", JSON.stringify(db), function (err) {
    if (err) throw err;
    console.log("Saved!");
    res.send(db);
  });
});

function errorHandler(err, req, res, next) {
  res.send(err.message);
}

emp.use(errorHandler);

module.exports = emp;
