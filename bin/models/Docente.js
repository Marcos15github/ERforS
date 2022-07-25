const mongoose = require("mongoose");
const Schema = mongoose.Schema;




const DocenteSchema = new Schema({
nombre: String,
foto: String,
persona: {
type: Schema.Types.ObjectId,
ref:"Persona"},
asignatura: {
type: Schema.Types.ObjectId,
ref:"Asignatura"}
});

var Docente = mongoose.model("Docente", DocenteSchema);
module.exports = Docente;