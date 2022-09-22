const mongoose = require("mongoose");
const Schema = mongoose.Schema;




const RoleSchema = new Schema({
    Descripcion: String,
    persona: {
        type: Schema.Types.ObjectId,
        ref: "Persona"}
    

});

var Role = mongoose.model("Role", RoleSchema);
module.exports = Role;