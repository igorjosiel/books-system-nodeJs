const { readFile, writeFile } = require('../utils/handleJsonFile');

function getAllAuthors() {
    return readFile('authors');
}

function getAuthorById(id) {
    const authors = readFile('authors');

    return authors.filter(author => author.id === id);
}

function addAuthor(newAuthor) {
    const authors = readFile('authors');

    const newAuthorsList = [...authors, newAuthor];

    writeFile("authors", newAuthorsList);
}

function deleteAuthorById(id) {
    const authors = readFile('authors');

    const filteredAuthors = authors.filter(author => author.id !== id);

    writeFile('authors', filteredAuthors);
}

module.exports = {
    getAllAuthors,
    getAuthorById,
    addAuthor,
    deleteAuthorById,
}