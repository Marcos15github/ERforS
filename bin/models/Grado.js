const mongoose = require("mongoose");
const Schema = mongoose.Schema;




const GradoSchema = new Schema({
    nombre: String,
    periodo: {
        type: Schema.Types.ObjectId,
        ref:"Periodo"},
    asignatura: {
        type: Schema.Types.ObjectId,
        ref:"Asignatura"}
        

});

var Grado = mongoose.model("Grado", GradoSchema);
module.exports = Grado;