const { getAllFavorite, addFavorite, deleteFavoriteById } = require("../services/favorite");
const { isIdValid, verifyIfIdExists } = require("../utils/verifyId");

function getFavorite(req, res) {
    try {
        const favorite = getAllFavorite();

        res.send(favorite);
    } catch (error) {
        res.status(500);
        res.send(error.message);
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

            res.status(201);
            return res.send("Livro inserido com sucesso!");
        }

        res.status(422);
        res.send("Esse Id já existe ou é inválido!");
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }
}

function deleteFavorite(req, res) {
    try {
        const id = req.params.id;

        const idIsValid = isIdValid(id);
        const idExists = verifyIfIdExists("favorite", id);

        if(idIsValid && idExists) {
            deleteFavoriteById(id);

            return res.send("Favorito deletado com sucesso!");
        }
            
        res.status(422);
        res.send("ID inválido!");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getFavorite,
    postFavorite,
    deleteFavorite,
}