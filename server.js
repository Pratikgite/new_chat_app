const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const dbConfig = require("./database/dbConfig");
require("dotenv").config();

const endpoints = require("./routes");
dbConfig();

app.use(bodyParser.json());
endpoints(app);

app.use('/', (req, res) => {
    res.send("working");
});

app.listen(3000, function(){
    console.log("server is running on port:3000");
});