const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title : {
        required : [true, 'Book title is required'],
        type : String,
        maxLenght : [100, 'Book title cannot be more than 100 characters'],
        trim : true
    },
    author : {
        required : [true, 'Author name is required'],
        type : String,
        trim : true
    },
    year : {
        type : Number,
        required : [true, 'Publication year is reqiuired'],
        min : [1000, 'year must be atleast 1000'],
        max : [ new Date().getFullYear(), 'Year cannot be future year']
    },
    createdAt: {
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('Book', BookSchema);