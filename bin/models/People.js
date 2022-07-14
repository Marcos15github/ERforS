const mongoose = require("mongoose");
const Schema = mongoose.Schema;




const PeopleSchema = new Schema({
    nickname: String,
    password: String,
});

var People = mongoose.model("People", PeopleSchema);
module.exports = People;