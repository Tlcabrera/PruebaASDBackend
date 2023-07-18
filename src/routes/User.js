const express = require("express");
//const rutasUser= Router();
const userCtr= require("../controllers/User.controller");

const userRouter = express.Router();

// create-register user
userRouter.post("/users", userCtr.create);

// get all users
userRouter.get("/users", userCtr.obtener);

// get a user by Id
userRouter.get("/users/:id", userCtr.obtenerId);



module.exports = userRouter;