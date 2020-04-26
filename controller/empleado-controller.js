const Empleados = require("../models/empleados-db");
const empleadoController = {};

empleadoController.getEmpleados = async (req, res) => {
  const empleados = await Empleados.find();
  res.json(empleados);
};
empleadoController.getEmpleado = async (req, res) => {
  const { id } = req.params;
  const empleadoId = await Empleados.findById(id);

  res.json(empleadoId);
};
empleadoController.createEmpleados = async (req, res) => {
  const empleados = new Empleados(req.body);
  await empleados.save();
  res.json({
    status: "Empleado guardado",
  });
};
empleadoController.updateEmpleado = async (req, res) => {
  const { id } = req.params;
  const empleadoPut = {
    nombre: req.body.nombre,
    position: req.body.position,
    oficina: req.body.oficina,
    salario: req.body.salario,
  };
  await Empleados.findByIdAndUpdate(
    id,
    {
      $set: empleadoPut,
    },
    { new: true }
  );
  res.json({
    status: "Empleado actualizado",
  });
};
empleadoController.deleteEmpleado = async (req, res) => {
  const { id } = req.params;
  await Empleados.findByIdAndRemove(id);
  res.json({
    status: "Usuario Eliminado",
  });
};
module.exports = empleadoController;
