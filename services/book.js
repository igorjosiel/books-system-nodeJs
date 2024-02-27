const fs = require("fs")

function getTodosLivros() {
    return JSON.parse( fs.readFileSync("books.json") )
}

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("books.json"))

    const livroFiltrado = livros.filter( livro => livro.id === id )[0]
    return livroFiltrado
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("books.json"))

    const novaListaDeLivros = [ ...livros, livroNovo ]

    fs.writeFileSync("books.json", JSON.stringify(novaListaDeLivros))
}

function modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("books.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }

    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("books.json", JSON.stringify(livrosAtuais))
}

function deletaLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("books.json"))

    const livrosFiltrados = livros.filter( livro => livro.id !== id )
    fs.writeFileSync("books.json", JSON.stringify(livrosFiltrados))
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletaLivroPorId
}