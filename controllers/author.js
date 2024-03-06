const {
    getAllAuthors,
    getAuthorById,
    addAuthor,
    deleteAuthorById,
    updateAuthorById,
} = require('../services/author');
const { sendResponseData, sendResponseMessage } = require('../utils/sendResponse');
const { isIdValid, verifyIfIdExists } = require('../utils/verifyId');
const {
    invalidIdOrNotExists,
    requiredFields,
    invalidIdOrItExists,
    postMessage,
    deleteMessage,
    patchMessage,
} = require('../utils/handleMessages');

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

function postAuthor(req, res) {
    try {
        const { id, name, birth, publishedBooks } = req.body;

        const idIsValid = isIdValid(id);
        const idExists = verifyIfIdExists("authors", id);

        if (!name || !birth || !publishedBooks) {
            return sendResponseMessage(res, 422, requiredFields('nome, data de nascimento e livros publicados'));
        }

        if (idIsValid && !idExists) {
            addAuthor({
                id,
                name,
                birth,
                publishedBooks,
            });

            return sendResponseMessage(res, 201, postMessage('Autor'));
        }

        sendResponseMessage(res, 422, invalidIdOrItExists());
    } catch (error) {
        sendResponseMessage(res, 500, error.message);
    }
}

function deleteAuthor(req, res) {
    try {
        const { id } = req.params;

        const idIsValid = isIdValid(id);
        const idExists = verifyIfIdExists("authors", id);

        if (idIsValid && idExists) {
            deleteAuthorById(id);

            return sendResponseMessage(res, 200, deleteMessage('Autor'));
        }

        sendResponseMessage(res, 422, invalidIdOrNotExists());
    } catch (error) {
        sendResponseMessage(res, 500, error.message);
    }
}

function patchAuthor(req, res) {
    try {
        const paramId = req.params.id;
        const bodyId = req.body.id;

        const paramIdIsValid = isIdValid(paramId);
        const bodyIdIsValid = isIdValid(bodyId);

        const paramIdExists = verifyIfIdExists("authors", paramId);
        const bodyIdExists = verifyIfIdExists("authors", bodyId);

        if (paramIdIsValid && bodyIdIsValid && paramIdExists && !bodyIdExists) {
            const body = req.body;
            
            updateAuthorById(body, paramId);

            return sendResponseMessage(res, 200, patchMessage('Autor'));
        }

        sendResponseMessage(res, 422, invalidIdOrItExists());
    } catch (error) {
        sendResponseMessage(res, 500, error.message);
    }
}

module.exports = {
    getAuthors,
    getAuthor,
    postAuthor,
    deleteAuthor,
    patchAuthor,
}