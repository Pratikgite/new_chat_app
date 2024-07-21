const mongoose = require("mongoose");
require('dotenv').config();
const URL = process.env.DB_URI;

const dbConfig = async () => {
    try {
        await mongoose.connect(URL);
        console.log('DB Connected.');
    } catch(err) {
        console.error(`DB Connection Error: ${err.message}`);
    }
};

module.exports = dbConfig;