const fs = require("fs");
const { readFile, writeFile } = require("../utils/handleJsonFile");

function getAllFavorite() {
    return readFile("favorite");
}

function addFavorite(id) {
    const books = readFile("books");
    const favorite = readFile("favorite");

    const addedBook = books.find(book => book.id === id);

    const newFavoriteBooksList = [...favorite, addedBook];

    writeFile("favorite", newFavoriteBooksList);
}

function deleteFavoriteById(id) {
    const favorite = readFile("favorite");
    
    const filteredFavorite = favorite.filter(book => book.id !== id);

    writeFile("favorite", filteredFavorite);
}

module.exports = {
    getAllFavorite,
    addFavorite,
    deleteFavoriteById,
}