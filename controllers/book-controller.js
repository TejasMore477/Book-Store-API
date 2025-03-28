const BookModel = require('../models/book.js');

const getAllBooks = async( req, res ) => {

};

const getSingleBookById = async( req, res ) => {

};

const addNewBook = async( req, res ) => {
    try {
        const newAddedBook = await BookModel.create(req.body);
        if(newAddedBook){
            res.status(201).json({
                success : true,
                message : "Book added sucessfully",
                data : newAddedBook
            });
        };
        
    } catch (error) {
        console.log("\n Error Occured while adding new book:\n", error);
        
    };
};

const updateBookById = async( req, res ) => {

};

const deleteBookById = async( req, res ) => {

};

module.exports = {
    getAllBooks,
    getSingleBookById,
    updateBookById,
    addNewBook,
    deleteBookById

};