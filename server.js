// connecting to .env
require('dotenv').config();

const express = require('express');

// creating express server
const app = express();
const PORT = process.env.PORT || 3000;


// middleware express.json
app.use(express.json());




// connect via port
app.listen(PORT,() => {
    console.log(`\n Server is listening to port : ${PORT}`);
});



