const booksRouter = require('./book');
const favoriteRouter = require('./favorite');

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
    }
];

module.exports = routes;