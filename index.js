const {app} = require("./bin/routes");
const express = require("express");



app.listen(process.env.PORT  || 3000, () =>{
    console.log('server on');
})
