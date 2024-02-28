const fs = require("fs")

function getTodosFavoritos() {
    return JSON.parse( fs.readFileSync("favorite.json") )
}

function deletaFavoritoPorId(id) {
    const livros = JSON.parse( fs.readFileSync("favorite.json") )
    
    const livrosFiltrados = livros.filter( livro => livro.id !== id)
    fs.writeFileSync("favorite.json", JSON.stringify(livrosFiltrados))
}

function insereFavorito(id) {
    const livros = JSON.parse( fs.readFileSync("books.json") )
    const favoritos = JSON.parse( fs.readFileSync("favorite.json") )

    const livroInserido = livros.find( livro => livro.id === id)
    const novaListaDeLivrosFavoritos = [...favoritos, livroInserido]
    fs.writeFileSync("favorite.json", JSON.stringify(novaListaDeLivrosFavoritos))
}

module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorId,
    insereFavorito
}