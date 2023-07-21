
const pqrsSchema = require("../models/Pqrs");

// function by register pqrs
exports.create= async (req, res) => {
  const pqrs = pqrsSchema(req.body);
  pqrs
    .save()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: error }));
};

// function by get all pqrs
exports.obtener= async(req, res) => {
  pqrsSchema
    .find()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: error }));
};

// function by get a pqrs by Id
exports.obtenerId= async(req, res) => {
  const { id } = req.params;
  pqrsSchema
    .findById(id)
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: error }));
};

// function by get a pqrs by Date
exports.obtenerDate= async(req, res) => {
  const { date } = req.params;
  pqrsSchema
    .findOne(date)
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: error }));
};
// function by get a pqrs by type
exports.obtenerType= async(req, res) => {
  const { type } = req.params.type;
  pqrsSchema
    .find({type:{$ne:type}})
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: error }));
};

// function by get a pqrs by area
exports.obtenerArea= async(req, res) => {
  const { area } = req.params;

  //const viajes = await area.find().toArray();
  pqrsSchema
    .find(area)
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: error }));
};

// function by delete a pqrs
/* exports.odelete= async(req, res) => {
  const { id } = req.params;
  pqrsSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});*/

// function  by update all  propierties to pqrs
exports.update= async(req, res) => {
  const { id } = req.params;
   
   const { user, type, description, date, area, civilservant, state } = req.body;
  pqrsSchema
    .updateOne({ _id: id }, { $set: { user, type, description, date, area, civilservant, state } })
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: error }));
};
// function by update state but pqrs
exports.edit= async (req, res) => {
  const { id } = req.params;
   
   const { state } = req.body;
  pqrsSchema
    .updateOne({ _id: id }, { $set: { state } })
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: error }));
};
