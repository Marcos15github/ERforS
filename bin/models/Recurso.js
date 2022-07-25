const mongoose = require("mongoose");
const Schema = mongoose.Schema;




const RecursoSchema = new Schema({
    nombre_recurso: String,
    asignatura: String,
    icono: String,
    tipo_recurso: String,
    descripcion_recurso: String,
    video: String,
    documento: String,
    enlace: String,

});

var Recurso = mongoose.model("Recurso", RecursoSchema);
module.exports = Recurso;