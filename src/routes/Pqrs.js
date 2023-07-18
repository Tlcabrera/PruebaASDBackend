const express = require("express");
const userSchema = require("../models/Pqrs");

const routerPqrs = express.Router();

// register pqrs
router.post("/pqrs", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all pqrs
router.get("/pqrs", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/pqrs/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a pqrs
router.delete("/pqrs/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a pqrs
router.put("/pqrs/:id", (req, res) => {
  const { id } = req.params;
   
   const { user, type, description, date, area, civilservant, state } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { user, type, description, date, area, civilservant, state } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = routerPqrs;