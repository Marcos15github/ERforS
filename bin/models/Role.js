const mongoose = require("mongoose");
const Schema = mongoose.Schema;




const RolesSchema = new Schema({
    Descripcion: String,
    persona: {
        type: Schema.Types.ObjectId,
        ref: "Persona"}
    

});

var Roles = mongoose.model("Roles", RolesSchema);
module.exports = Roles;