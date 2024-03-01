const { getAllBooks, getBookById, addBook, updateBook, deleteBookById } = require("../services/book");
const { verifyIfIdExists, isIdValid } = require("../utils/verifyId");

function getBooks(req, res) {
    try {
        const books = getAllBooks();
        
        res.send(books);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function getBook(req, res) {
    try {
        const id = req.params.id;

        const idIsValid = isIdValid(id);
        const idExists = verifyIfIdExists("books", id);

        if(idIsValid && idExists) {
            const book = getBookById(id);

            return res.send(book);
        }

        res.status(422);
        res.send("Id inválido!");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function postBook(req, res) {
    try {
        const {id, name} = req.body;

        const idIsValid = isIdValid(id);
        const idExists = verifyIfIdExists("books", id);

        if (!name) {
            res.status(422);
            return res.send("O campo nome é obrigatório!");
        }

        if(idIsValid && !idExists) {
            addBook({
                id,
                name,
            });

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

function patchBook(req, res) {
    try {
        const id = req.params.id;

        const idIsValid = isIdValid(id);
        const idExists = verifyIfIdExists("books", id);

        if(idIsValid && idExists) {
            const body = req.body;

            updateBook(body, id);

            return res.send("Item modificado com sucesso!");
        }
            
        res.status(422);
        res.send("Id inválido!");
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }
}

function deleteBook(req, res) {
    try {
        const id = req.params.id;

        const idIsValid = isIdValid(id);
        const idExists = verifyIfIdExists("books", id);

        if(idIsValid && idExists) {
            deleteBookById(id);

            return res.send("Livro deletado com sucesso!");
        }
            
        res.status(422);
        res.send("ID inválido!");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getBooks,
    getBook,
    postBook,
    patchBook,
    deleteBook,
}