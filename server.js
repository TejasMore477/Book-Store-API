// connecting to .env
require('dotenv').config();


//imports server-database-routes
const express = require('express');
const connectToDB = require('./database/db.js');
const bookRoutes = require('./routes/book-routes.js')

// creating express server
const app = express();
const PORT = process.env.PORT || 3000;


// connecting to DB
connectToDB();


// middleware express.json
app.use(express.json());

// parent routes
app.use('/api/books', bookRoutes);




// connect via port
app.listen(PORT,() => {
    console.log(`\n Server is listening to port : ${PORT}`);
});



