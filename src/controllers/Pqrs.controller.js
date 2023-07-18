
const pqrsSchema = require("../models/Pqrs");
//router.get("/pqrs", Authetication, checkRoleAuth(['admin']), getAllPqrs);
// route register pqrs
exports.create= async (req, res) => {
  const pqrs = pqrsSchema(req.body);
  pqrs
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// route get all pqrs
exports.obtener= async(req, res) => {
  pqrsSchema
    .find()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: error }));
};

// route get a pqrs by Id
exports.obtenerId= async(req, res) => {
  const { id } = req.params;
  pqrsSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// delete a pqrs
/*pqrsRouter.delete("/pqrs/:id", (req, res) => {
  const { id } = req.params;
  pqrsSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});*/

// update a pqrs
exports.update= async(req, res) => {
  const { id } = req.params;
   
   const { user, type, description, date, area, civilservant, state } = req.body;
  pqrsSchema
    .updateOne({ _id: id }, { $set: { user, type, description, date, area, civilservant, state } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};
// update state but pqrs
exports.edit= async (req, res) => {
  const { id } = req.params;
   
   const { state } = req.body;
  pqrsSchema
    .updateOne({ _id: id }, { $set: { state } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};
