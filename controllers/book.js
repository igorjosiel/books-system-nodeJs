const { getAllBooks, getBookById, addBook, updateBook, deleteBookById } = require("../services/book");
const { verifyIfIdExists, isIdValid } = require("../utils/verifyId");
const { sendResponseData, sendResponseMessage } = require("../utils/sendResponse");
const { 
    postMessage,
    patchMessage,
    deleteMessage,
    invalidIdOrNotExists,
    invalidIdOrItExists,
    requiredField,
} = require("../utils/handleMessages");

function getBooks(req, res) {
    try {
        const books = getAllBooks();
        
        sendResponseData(res, 200, books);
    } catch (error) {
        sendResponseMessage(res, 500, error.message);
    }
}

function getBook(req, res) {
    try {
        const id = req.params.id;

        const idIsValid = isIdValid(id);
        const idExists = verifyIfIdExists("books", id);

        if(idIsValid && idExists) {
            const book = getBookById(id);

            return sendResponseData(res, 200, book);
        }

        sendResponseMessage(res, 422, invalidIdOrNotExists());
    } catch (error) {
        sendResponseMessage(res, 500, error.message);
    }
}

function postBook(req, res) {
    try {
        const { id, name } = req.body;

        const idIsValid = isIdValid(id);
        const idExists = verifyIfIdExists("books", id);

        if (!name) {
            return sendResponseMessage(res, 422, requiredField("nome"));
        }

        if(idIsValid && !idExists) {
            addBook({
                id,
                name,
            });

            return sendResponseMessage(res, 201, postMessage("Livro"));
        }
        
        sendResponseMessage(res, 422, invalidIdOrItExists());
    } catch(error) {
        sendResponseMessage(res, 500, error.message);
    }
}

function patchBook(req, res) {
    try {
        const paramId = req.params.id;
        const bodyId = req.body.id;

        const paramIdIsValid = isIdValid(paramId);
        const bodyIdIsValid = isIdValid(bodyId);

        const paramIdExists = verifyIfIdExists("books", paramId);
        const bodyIdExists = verifyIfIdExists("books", bodyId);

        if(paramIdIsValid && bodyIdIsValid && paramIdExists && !bodyIdExists) {
            const body = req.body;

            updateBook(body, paramId);

            sendResponseMessage(res, 200, patchMessage("Livro"));
        }
            
        sendResponseMessage(res, 422, invalidIdOrItExists());
    } catch(error) {
        sendResponseMessage(res, 500, error.message);
    }
}

function deleteBook(req, res) {
    try {
        const { id } = req.params;

        const idIsValid = isIdValid(id);
        const idExists = verifyIfIdExists("books", id);

        if(idIsValid && idExists) {
            deleteBookById(id);

            return sendResponseMessage(res, 200, deleteMessage("Livro"));
        }
            
        sendResponseMessage(res, 422, invalidIdOrNotExists());
    } catch (error) {
        sendResponseMessage(res, 500, error.message);
    }
}

module.exports = {
    getBooks,
    getBook,
    postBook,
    patchBook,
    deleteBook,
}