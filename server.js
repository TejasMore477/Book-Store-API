// connecting to .env
require('dotenv').config();


//imports
const express = require('express');
const connectToDB = require('./database/db.js');

// creating express server
const app = express();
const PORT = process.env.PORT || 3000;


//connecting to DB
connectToDB();


// middleware express.json
app.use(express.json());




// connect via port
app.listen(PORT,() => {
    console.log(`\n Server is listening to port : ${PORT}`);
});



