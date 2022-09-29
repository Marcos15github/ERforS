const mongoose = require("mongoose");
const Schema = mongoose.Schema;




const RoleSchema = new Schema({
    Nombre: String,
   
    

});

var Role = mongoose.model("Role", RoleSchema);
module.exports = Role;