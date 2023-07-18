const express = require("express");
const pqrsCtr= require("../controllers/Pqrs.controller");

const pqrsRouter = express.Router();
// Route register pqrs
pqrsRouter.post("/pqrs", pqrsCtr.create);

// Route get all pqrs
pqrsRouter.get("/pqrs", pqrsCtr.obtener);

// Route get a pqrs by Id
pqrsRouter.get("/pqrs/:id", pqrsCtr.obtenerId);

// route delete a pqrs
/*pqrsRouter.delete("/pqrs/:id", pqrsCtr.delete); */

// route update a pqrs
pqrsRouter.put("/pqrs/:id", pqrsCtr.update);
// update state but pqrs
pqrsRouter.put("/edit/:id", pqrsCtr.edit);

module.exports = pqrsRouter;