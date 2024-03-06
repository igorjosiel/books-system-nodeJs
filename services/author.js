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

function updateAuthorById(updates, id) {
    const currentAuthors = readFile('authors');

    const changedIndex = currentAuthors.findIndex(author => author.id === id);

    const changedContent = {
        ...currentAuthors[changedIndex],
        ...updates,
    }

    currentAuthors[changedIndex] = changedContent;

    writeFile('authors', currentAuthors);
}

module.exports = {
    getAllAuthors,
    getAuthorById,
    addAuthor,
    deleteAuthorById,
    updateAuthorById,
}