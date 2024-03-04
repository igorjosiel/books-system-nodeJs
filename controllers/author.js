const { getAllAuthors } = require('../services/author');
const { sendResponseData, sendResponseMessage } = require('../utils/sendResponse');

function getAuthors(req, res) {
    try {
        const authors = getAllAuthors();

        sendResponseData(res, 200, authors);
    } catch (error) {
        sendResponseMessage(res, 500, error.message);
    }
}

module.exports = {
    getAuthors,
}