const {Schema,model}=require("mongoose");


const pqrsSchema = new Schema({
    "user": {
      type: Schema.Types.ObjectId,
      ref: "User"
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
    type: Date,
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

module.exports = model('Pqrs', pqrsSchema);
