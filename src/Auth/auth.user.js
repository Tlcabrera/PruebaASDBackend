/*const User=require("../models/User");
const jwt=require("jsonwebtoken");

const autorizedUser=async(req,res,next)=>{
    const strToken=req.headers.authorization;
    if(!strToken){
        return res.json({msj:"No se encontró el token"});
    }
    const token=strToken.split(" ")[1];
    console.log(token);
    const palabra="API-PQRS";
    const key=jwt.verify(token,palabra);
    const huesped=await User.findById(key._id);
    if(!huesped){
        return res.json({msj:"No se encontró el usuario"});
    }
    console.log(key);
    next();
}

module.exports=autorizedUser;*/