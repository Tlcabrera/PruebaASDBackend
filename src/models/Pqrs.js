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
  //aaaa/mm/dd
    "date": {
    type: Date,
    required: true
  },
  "area": {
    type: Array,
    required: true
  },
  "civilservant": {
    type: Array,
    required: true
  },
  "state": {
    type: String,
    required: true
  }
});

module.exports = model('Pqrs', pqrsSchema);
