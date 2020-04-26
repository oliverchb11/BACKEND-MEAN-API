const express = require("express");
const router = express.Router();
const empleadoControlles = require("../controller/empleado-controller");
router.get("/", empleadoControlles.getEmpleados);
router.post("/", empleadoControlles.createEmpleados);
router.get("/:id", empleadoControlles.getEmpleado);
router.put("/:id", empleadoControlles.updateEmpleado);
router.delete("/:id", empleadoControlles.deleteEmpleado);
module.exports = router;
