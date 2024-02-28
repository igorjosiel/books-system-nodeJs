const { getAllFavorite, addFavorite, deleteFavoriteById } = require("../services/favorite")

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

        addFavorite(id);

        res.status(201);
        res.send("Livro inserido com sucesso");
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }
}

function deleteFavorite(req, res) {
    try {
        const id = req.params.id;

        if(id && Number(id)) {
            deleteFavoriteById(id);

            res.send("Favorito deletado com sucesso");
        } else {
            res.status(422);
            res.send("ID inválido");
        }
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