
const mongoose = require('mongoose');


// mongodb connection

exports.conexionBD=async()=>{

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));
};

