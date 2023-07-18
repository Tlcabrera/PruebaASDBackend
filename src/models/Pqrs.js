
const mongoose = require("mongoose");

const pqrsSchema = mongoose.Schema({
    "user": {
        type: String,
        ref: "users"
    },
    "type": {
        type: String,
        required: true
    },
   "description": {
    type: String,
    required: true
  },
    "date": {
    type: String,
    required: true
  },
  "area": {
    type: String,
    required: true
  },
  "civilservant": {
    type: String,
    required: true
  },
  "state": {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Pqrs', pqrsSchema);