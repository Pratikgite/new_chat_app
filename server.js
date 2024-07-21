const express = require('express');
const app = express();
const dbConfig = require("./database/dbConfig");

const endpoints = require("./routes");

dbConfig();

endpoints(app);

app.use('/', (req, res) => {
    res.send("working");
});

app.listen(3000, function(){
    console.log("server is running on port:3000");
});