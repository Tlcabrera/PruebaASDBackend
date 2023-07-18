const userSchema = require("../models/User");

// create-register user
exports.create= async (req, res) => {
  const user = userSchema(req.body);
  //res.send("Create User");
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// get all users
exports.obtener= async (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// get a user
exports.obtenerId= async (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};



