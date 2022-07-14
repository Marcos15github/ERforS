const mongoose = require('mongoose');
const People = require("./models/People");
//hacer el crud de las tablas de mongodb
class Controller{
    constructor(){
        this.connect()
    }
    async connect(){
        try{
            await mongoose.connect("mongodb+srv://Marcos:marcos123@cluster0.m58pp4y.mongodb.net/ERforS?retryWrites=true&w=majority",
            {useNewUrlParser: true}
            );
            console.log("database connected")
        }catch(e){
            console.error(e);
        }
    }
    getPeople(res){
        People.find({},(err, users)=>{
            if(err) throw err;
 
            res.send( users );
        })
    }
}

exports.controller = new Controller();