const express = require("express");
const emp = express.Router();
const data = require("./dr-model");
const authentication = require("../admin/authentication");


emp.use(express.json());

emp.get("/", async (req, res, next) => {
  try {
    const emps = await data.find();
    if (emps.length === 0) {
      next(new Error("no data avilable"));
    }
    res.send(emps);
  } catch (error) {
    error.statusCode = 500;
    next(new Error("no data avilable"));
  }
});

emp.get("/:id", async (req, res, next) => {
  try {
    let err = new Error("No matching  found");
    const emps = await data.find();
    if (!emps.filter((x) => x.id === req.params.id).length) {
      err.statusCode = 404;
      next(new Error(err));
    }
    res.send(emps.filter((x) => x.id == req.params.id));
  } catch (error) {
    error.statusCode = 500;
    res.send("error");
  }
});

emp.get("/", async (req, res, next) => {
  try {
    let err = new Error("No matching  found");
    const emps = await data.find();
    if (!emps.filter((x) => x.id === req.query.id).length) {
      err.statusCode = 404;
      next(new Error(err));
    }
    res.send(emps.filter((x) => x.id == req.query.id));
  } catch (error) {
    res.send("error");
  }
});

emp.patch("/:id", authentication, async (req, res, next) => {
  try {
    let err = new Error("No matching  found");
    const emps = await data.find();
    if (!emps.filter((x) => x.id === req.params.id).length) {
      err.statusCode = 404;
      next(new Error(err));
    }

    const updated = await data.findByIdAndUpdate(req.params.id, {
      ...req.body,
    });
    res.send(updated);
  } catch (error) {
    error.statusCode = 500;
    res.send("error");
  }
});

emp.delete("/:id", authentication, async (req, res) => {
  try {
    let err = new Error("No matching  found");
    const emps = await data.find();
    if (!emps.filter((x) => x.id === req.params.id).length) {
      err.statuse = 404;
      next(new Error(err));
    }

    const deletedUser = await data.findByIdAndDelete(req.params.id);

    res.send(deletedUser);
  } catch (error) {
    res.send("error");
  }
});

emp.post("/", authentication, async (req, res) => {
  try {
    const emp = new data({ ...req.body });
    const createdUser = await emp.save();
    res.send(createdUser);
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
});

function errorHandler(err, req, res, next) {
  res.send(err.message);
}

emp.use(errorHandler);

module.exports = emp;
