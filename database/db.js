const mongoose = require('mongoose');

const connectToDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://tejasmore660:bookstore477api01@cluster0.umqeqwx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('\n MongoDB DataBase connected successfully !! \n');

    } catch (error) {
        console.log('\n ERROR OCCURED WHILE CONNECTING TO DB ::\n', error);
        process.exit(1);     

    };
};

module.exports = connectToDB;