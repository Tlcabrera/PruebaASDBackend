const userSchema = require("../models/User");
const jwt=require("jsonwebtoken");

// function by create-register user
exports.create= async (req, res) => {
  const user = userSchema(req.body);
  //res.send("Create User");
  user
    .save()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: "Faltan datos por diligenciar"+error}));
};

/*const isEmailExist = await User.findOne({ email: req.body.email });
if (isEmailExist) {
    return res.status(400).json(
        {error: 'Email ya registrado'}
    )
}*/
// function by get all users
exports.obtener= async (req, res) => {
  userSchema
    .find()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: "No se encontraron datos"+error }));
};

// function by get a user by Id
exports.obtenerId= async (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: "Consulta no exitosa"+error }));
};


/*
  exports.login=async(req,res)=>{
    try {
        const {email, password}=req.body;
        if(email && password){
           
            const user=await User.findOne({email});
            if(!user){
                res.json({token:null,msj:"usuario o contraseña incorrectos"});
                console.log("usuario o contraseña incorrectos");
            }
            else{
                
                if(user.password==password){
                    
                    const {_id,email}=user;
                    
                    const opt={
                        expiresIn:'1h'
                    }
                    const token=jwt.sign({_id,email},process.env.TOKEN_SECRET,opt);
                    console.log(token);
                    res.json({token});
                    
                }else{
                    res.json({token:null,msj:"usuario o contraseña incorrectos"});
                }
            }
        }else{
            res.json({error:"Faltan datos por diligenciar"});
        }
    } catch (error) {
        res.status(500).json({error:"Faltan datos por diligenciar"+error});
    }
  }
*/
