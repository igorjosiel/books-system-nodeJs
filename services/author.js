const { readFile } = require('../utils/handleJsonFile');

function getAllAuthors() {
    return readFile('authors');
}

module.exports = {
    getAllAuthors
}