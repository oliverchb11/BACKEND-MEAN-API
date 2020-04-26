const express = require("express");
const cors = require("cors");
//router export
const router = require("./routes/empleados-routes");

//morgan ver lo que el usario esta pidiendo por consola y interactuar con el servidor por consola
const morgan = require("morgan");
const app = express();
const { mongoose } = require("./database"); // del archivo database requiero solo la conecion
//settings
app.set("port", process.env.PORT || 3000);
// process.env.PORT procese el puerto que le asigne el SO
//middlewares
app.use(morgan("dev")); //morgan ver lo que el usario esta pidiendo por consola y interactuar con el servidor por consola
app.use(express.json()); // entender el codigo que viene en formato json dese el navegador y que el servidor puede antender
app.use(cors({ origin: "http://localhost:4200" }));
//router
app.use("/api/empleados", router);

//Starting server
app.listen(app.get("port"), () => {
  console.log("server en puerto", app.get("port"));
});
