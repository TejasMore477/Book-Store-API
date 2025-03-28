const express = require("express");
const {
  getAllBooks,
  getSingleBookById,
  updateBookById,
  addNewBook,
  deleteBookById,
} = require("../controllers/book-controller.js");

const router = express.Router();

//reutes for books only

//path: localhost:3000/api/books/all
router.get("/all", getAllBooks);

//path: localhost:3000/api/books/book/id
router.get("/book/:id", getSingleBookById);

//path: localhost:3000/api/books/add
router.post("/add", addNewBook);

//path: localhost:3000/api/books/update/id
router.put("/update/:id", updateBookById);

//path: localhost:3000/api/books/delete/id
router.delete("/delete/:id", deleteBookById);


module.exports = router;