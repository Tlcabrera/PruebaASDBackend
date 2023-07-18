const { ObjectId } = require("mongodb/mongodb");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    "user": {
        type: Schema.Types.ObjectId,
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

module.exports = mongoose.model('User', userSchema);