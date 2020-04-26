const mongoose = require("mongoose");
const { Schema } = mongoose;
//schema quiere decir que de monngo debe solo quiero sus esquemas

const EsquemaEmpleados = new Schema({
  nombre: { type: String, required: true },
  position: { type: String, required: true },
  oficina: { type: String, required: true },
  salario: { type: Number, required: true },
});

module.exports = mongoose.model("Empleados", EsquemaEmpleados);
//mongose me va a modelar y almacenar los datos con un nombre empleados el
//esquema que cree anteriormente EsquemaEmpleados
