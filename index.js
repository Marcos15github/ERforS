const {app} = require("./bin/routes");
const express = require("express");



app.listen(3000, () =>{
    console.log('server on');
})