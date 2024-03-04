const { getAllAuthors, getAuthorById } = require('../services/author');
const { invalidIdOrNotExists } = require('../utils/handleMessages');
const { sendResponseData, sendResponseMessage } = require('../utils/sendResponse');
const { isIdValid, verifyIfIdExists } = require('../utils/verifyId');

function getAuthors(req, res) {
    try {
        const authors = getAllAuthors();

        sendResponseData(res, 200, authors);
    } catch (error) {
        sendResponseMessage(res, 500, error.message);
    }
}

function getAuthor(req, res) {
    try {
        const id = req.params.id;

        const idIsValid = isIdValid(id);
        const idExists = verifyIfIdExists("authors", id);

        if (idIsValid && idExists) {
            const author = getAuthorById(id);

            return sendResponseData(res, 200, author);
        }

        sendResponseMessage(res, 422, invalidIdOrNotExists());
    } catch (error) {
        sendResponseMessage(res, 500, error.message);
    }
}

module.exports = {
    getAuthors,
    getAuthor,
}