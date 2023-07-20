const express = require("express");
const pqrsCtr= require("../controllers/Pqrs.controller");
//const autorizesUser=require("../Auth/auth.user")

const pqrsRouter = express.Router();
// Route register pqrs
pqrsRouter.post("/pqrs", pqrsCtr.create);

// Route get all pqrs
pqrsRouter.get("/pqrs", pqrsCtr.obtener);

// Route get a pqrs by Id
pqrsRouter.get("/pqrs/:id", pqrsCtr.obtenerId);

// Route get a pqrs by date
pqrsRouter.get("/read/:date", pqrsCtr.obtenerDate);

// Route get a pqrs by type
pqrsRouter.get("/readt/:type", pqrsCtr.obtenerType);
// Route get a pqrs by area
pqrsRouter.get("/area/:area", pqrsCtr.obtenerArea);
// route delete a pqrs
/*pqrsRouter.delete("/pqrs/:id", pqrsCtr.delete); */

// route update a pqrs
pqrsRouter.put("/pqrs/:id", pqrsCtr.update);
// route update state but pqrs
pqrsRouter.put("/edit/:id", pqrsCtr.edit);

module.exports = pqrsRouter;