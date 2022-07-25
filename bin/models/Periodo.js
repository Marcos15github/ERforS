const mongoose = require("mongoose");
const Schema = mongoose.Schema;




const PeriodoSchema = new Schema({
    nombre: String,
    recurso: {
        type: Schema.Types.ObjectId,
        ref:"Recurso"},
    grado: {
        type: Schema.Types.ObjectId,
        ref:"Grado"},
        });



var Periodo = mongoose.model("Periodo", PeriodoSchema);
module.exports = Periodo;  