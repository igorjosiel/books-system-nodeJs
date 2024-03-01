const fs = require("fs");
const { readFile, writeFile } = require("../utils/handleJsonFile");

function getAllBooks() {
    return readFile("books");
}

function getBookById(id) {
    const books = readFile("books");

    const filteredBook = books.filter(book => book.id === id )[0];

    return filteredBook;
}

function addBook(newBook) {
    const books = readFile("books");

    const newBooksList = [...books, newBook];

    writeFile("books", newBooksList);
}

function updateBook(updates, id) {
    let currentBooks = readFile("books");

    const changedIndex = currentBooks.findIndex(book => book.id === id);

    const changedContent = {
        ...currentBooks[changedIndex],
        ...updates,
    }

    currentBooks[changedIndex] = changedContent;

    writeFile("books", currentBooks);
}

function deleteBookById(id) {
    const books = readFile("books");

    const filteredBooks = books.filter(book => book.id !== id);

    writeFile("books", filteredBooks);
}

module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBookById,
}