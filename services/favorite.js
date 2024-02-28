const fs = require("fs");

function getAllFavorite() {
    return JSON.parse(fs.readFileSync("favorite.json"));
}

function addFavorite(id) {
    const books = JSON.parse(fs.readFileSync("books.json"));
    const favorite = JSON.parse(fs.readFileSync("favorite.json"));

    const addedBook = books.find(book => book.id === id);

    const newFavoriteBooksList = [...favorite, addedBook];

    fs.writeFileSync("favorite.json", JSON.stringify(newFavoriteBooksList));
}

function deleteFavoriteById(id) {
    const favorite = JSON.parse(fs.readFileSync("favorite.json"));
    
    const filteredFavorite = favorite.filter(book => book.id !== id);

    fs.writeFileSync("favorite.json", JSON.stringify(filteredFavorite));
}

module.exports = {
    getAllFavorite,
    addFavorite,
    deleteFavoriteById,
}