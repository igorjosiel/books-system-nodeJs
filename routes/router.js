const booksRouter = require('./book');
const favoriteRouter = require('./favorite');
const authorsRouter = require("./author");

const routes = [
    {
        id: 0,
        path: '/books',
        router: booksRouter,
    },
    {
        id: 1,
        path: '/favorite',
        router: favoriteRouter,
    },
    {
        id: 2,
        path: '/authors',
        router: authorsRouter,
    }
];

module.exports = routes;