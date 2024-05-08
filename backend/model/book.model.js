const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
