const mongoose = require("mongoose");
const Schema = mongoose.Schema;




const LoginSchema = new Schema({
    usuario: String,
    contraseña: String,
    persona: {
        type: Schema.Types.ObjectId,
        ref: "Persona"}
    

});

var Login = mongoose.model("Login", LoginSchema);
module.exports = Login;