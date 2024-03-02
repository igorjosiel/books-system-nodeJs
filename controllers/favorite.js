const { getAllFavorite, addFavorite, deleteFavoriteById } = require("../services/favorite");
const { isIdValid, verifyIfIdExists } = require("../utils/verifyId");
const { sendResponseData, sendResponseMessage } = require("../utils/sendResponse");
const {
    postMessage,
    invalidIdOrItExists,
    invalidIdOrNotExists,
    deleteMessage,
} = require("../utils/handleMessages");

function getFavorite(req, res) {
    try {
        const favorite = getAllFavorite();

        sendResponseData(res, 200, favorite);
    } catch (error) {
        sendResponseMessage(res, 500, error.message);
    }
}

function postFavorite(req, res) {
    try {
        const id = req.params.id;

        const idIsValid = isIdValid(id);

        const idExistsInBook = verifyIfIdExists("books", id);
        const idExistsInFavorite = verifyIfIdExists("favorite", id);

        if (idIsValid && idExistsInBook && !idExistsInFavorite) {
            addFavorite(id);

            return sendResponseMessage(res, 201, postMessage("Favorito"));
        }

        sendResponseMessage(res, 422, invalidIdOrItExists());
    } catch(error) {
        sendResponseMessage(res, 500, error.message);
    }
}

function deleteFavorite(req, res) {
    try {
        const id = req.params.id;

        const idIsValid = isIdValid(id);
        const idExists = verifyIfIdExists("favorite", id);

        if(idIsValid && idExists) {
            deleteFavoriteById(id);

            return sendResponseMessage(res, 200, deleteMessage("Favorito"));
        }
            
        sendResponseMessage(res, 422, invalidIdOrNotExists());
    } catch (error) {
        sendResponseMessage(res, 500, error.message);
    }
}

module.exports = {
    getFavorite,
    postFavorite,
    deleteFavorite,
}