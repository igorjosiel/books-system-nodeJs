const { getTodosFavoritos, insereFavorito, deletaFavoritoPorId } = require("../services/favorite")

function getFavorite(req, res) {
    try {
        const favorite = getTodosFavoritos();

        res.send(favorite);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function postFavorite(req, res) {
    try {
        const id = req.params.id;

        insereFavorito(id);

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
            deletaFavoritoPorId(id);

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