const userSchema = require("../models/User");

// function by create-register user
exports.create= async (req, res) => {
  const user = userSchema(req.body);
  //res.send("Create User");
  user
    .save()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: error }));
};

// function by get all users
exports.obtener= async (req, res) => {
  userSchema
    .find()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: error }));
};

// function by get a user by Id
exports.obtenerId= async (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: error }));
};



