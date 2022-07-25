const mongoose = require("mongoose");
const Schema = mongoose.Schema;




const EstudianteSchema = new Schema({
nombre: String,
fecha_nacimiento: String,
grado: {
    type: Schema.Types.ObjectId,
    ref: "Grado"
},
persona: {
    type: Schema.Types.ObjectId,
    ref:"Persona"
},
asignatura: {
    type: Schema.Types.ObjectId,
    ref:"Asignatura"
}
});

var Estudiante = mongoose.model("Estudiante", EstudianteSchema);
module.exports = Estudiante;