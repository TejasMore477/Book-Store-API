const BookModel = require('../models/book.js');

const getAllBooks = async (req, res) => {
    try {
        const allBooks = await BookModel.find({});

        if (allBooks.length) {
            return res.status(200).json({
                success: true,
                message: "Retrieved all books successfully",
                data: allBooks
            });
        }

        return res.status(404).json({
            success: false,
            message: "No books found in the collection"
        });

    } catch (error) {
        console.error("\n Error occurred while getting all books:\n", error);

        return res.status(500).json({
            success: false,
            message: "An error occurred while retrieving the books",
            error: error.message
        });
    }
};


const getSingleBookById = async (req, res) => {
    try {
        const bookId = req.params.id;

        // Validate the book ID length (MongoDB ObjectId is 24 characters long)
        if (bookId.length !== 24) {
            throw new Error("Input must be a 24-character hex string.");
        }

        const responseBook = await BookModel.findById(bookId);

        if (!responseBook) {
            return res.status(404).json({
                success: false,
                message: "Book not found in collection"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Book retrieved successfully",
            data: responseBook
        });

    } catch (error) {
        console.error("\n Error Occurred while getting book by ID \n", error);

        return res.status(500).json({
            success: false,
            message: "An error occurred while retrieving the book",
            error: error.message
        });
    }
};


const addNewBook = async (req, res) => {
    try {
        // Check if required fields exist in req.body
        if (!req.body.title || !req.body.author || !req.body.year) {
            return res.status(400).json({
                success: false,
                message: "Missing required fields: title, author, or year"
            });
        }

        const newAddedBook = await BookModel.create(req.body);

        if (!newAddedBook) {
            return res.status(500).json({
                success: false,
                message: "Failed to add book, please try again"
            });
        }

        return res.status(201).json({
            success: true,
            message: "Book added successfully",
            data: newAddedBook
        });

    } catch (error) {
        console.error("\nError Occurred while adding new book:\n", error);

        return res.status(500).json({
            success: false,
            message: "An error occurred while adding the book",
            error: error.message
        });
    }
};


const updateBookById = async (req, res) => {
    try {
        const bookId = req.params.id;

        // Validate ObjectId length
        if (bookId.length !== 24) {
            return res.status(400).json({
                success: false,
                message: "Invalid book ID format. It must be a 24-character hex string."
            });
        }

        // Update book and return the updated document
        const updatedBook = await BookModel.findByIdAndUpdate(
            bookId,// take the book id to update
            req.body,// whatnare the updates
            { new: true, runValidators: true }
        );

        // Check if book exists and was updated
        if (!updatedBook) {
            return res.status(404).json({
                success: false,
                message: "No book found to update"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Book updated successfully",
            data: updatedBook
        });

    } catch (error) {
        console.error("Error Occurred:", error);

        return res.status(500).json({
            success: false,
            message: "An error occurred while updating the book",
            error: error.message
        });
    }
};



const deleteBookById = async( req, res ) => {
    try {
        const bookId = req.params.id;
        if(bookId.length !== 24){
            throw new Error("Input must be a 24-character hex string.");
        };

        const deletedBook = await BookModel.findByIdAndDelete(bookId);

        if(deletedBook){
            res.status(200).json({
                success : true,
                message : "Book Deleted successfully form collection",
                data : deletedBook
            });
        };

    } catch (error) {
        console.log('Error occured while deleting book:', error);

        res.status(500).json({
            success : false,
            message : "Internal server error occures while deleting book from collection",
            data : error.message
        })
    }
};

module.exports = {
    getAllBooks,
    getSingleBookById,
    updateBookById,
    addNewBook,
    deleteBookById

};