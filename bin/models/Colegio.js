const mongoose = require("mongoose");
const Schema = mongoose.Schema;




const ColegioSchema = new Schema({
nombre: String,
año: String,
telefono: String,
direccion: String
});

var Colegio = mongoose.model("Colegio", ColegioSchema);
module.exports = Colegio;