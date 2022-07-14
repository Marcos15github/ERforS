const express = require('express');
const app = express();
const { controller } = require('./Controller');

app.get("/", (req, res) => {
    res.send("Hola mundo");
})

//traer con el controlador desde mongodb la información
app.get("/users", (req, res) => {
    /*let users = [
        {name: "marcos", last_name: "atencia"},
        {name: "juan", last_name: "madera"}
    ]
    res.send(users)*/
    controller.getPeople(res);
});

exports.app = app;