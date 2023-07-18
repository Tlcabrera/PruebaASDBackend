const express = require("express");
const pqrsSchema = require("../models/Pqrs");

const pqrsRouter = express.Router();

// register pqrs
pqrsRouter.post("/pqrs", (req, res) => {
  const pqrs = pqrsSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all pqrs
pqrsRouter.get("/pqrs", (req, res) => {
  pqrsSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
pqrsRouter.get("/pqrs/:id", (req, res) => {
  const { id } = req.params;
  pqrsSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a pqrs
pqrsRouter.delete("/pqrs/:id", (req, res) => {
  const { id } = req.params;
  pqrsSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a pqrs
pqrsRouter.put("/pqrs/:id", (req, res) => {
  const { id } = req.params;
   
   const { user, type, description, date, area, civilservant, state } = req.body;
  pqrsSchema
    .updateOne({ _id: id }, { $set: { user, type, description, date, area, civilservant, state } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = pqrsRouter;