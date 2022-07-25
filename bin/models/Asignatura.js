const mongoose = require("mongoose");
const Schema = mongoose.Schema;




const AsignaturaSchema = new Schema({
nombre: String,
icono: String,


});

var Asignatura = mongoose.model("Asignatura", AsignaturaSchema);
module.exports = Asignatura;