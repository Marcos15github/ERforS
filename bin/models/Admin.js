const mongoose = require("mongoose");
const Schema = mongoose.Schema;




const AdminSchema = new Schema({
    nombre: String,
    persona: {
        type: Schema.Types.ObjectId,
        ref: "Persona"
    }
    

});

var Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;