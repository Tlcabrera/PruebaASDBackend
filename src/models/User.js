const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  fistName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
    email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  rol: {
    type: String,
    default: "user",
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);