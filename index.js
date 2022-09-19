const {app} = require("./bin/routes");
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

app.use(cors());

app.listen(PORT, () =>{
    console.log('server on', PORT);
})