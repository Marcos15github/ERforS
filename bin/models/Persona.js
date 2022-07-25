const mongoose = require("mongoose");
const Schema = mongoose.Schema;




const PersonaSchema = new Schema({
    nombre: String,
    telefono: String,
    correo: String,
    fecha_de_nacimiento: String,
    foto: String,

});

var Persona = mongoose.model("Persona", PersonaSchema);
module.exports = Persona;