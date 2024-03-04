const { readFile } = require('../utils/handleJsonFile');

function getAllAuthors() {
    return readFile('authors');
}

function getAuthorById(id) {
    const authors = readFile('authors');

    return authors.filter(author => author.id === id);
}

module.exports = {
    getAllAuthors,
    getAuthorById,
}