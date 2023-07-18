const express = require("express");
const userSchema = require("../models/User");

const router = express.Router();

// create-register user
router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  //res.send("Create User");
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});



module.exports = router;