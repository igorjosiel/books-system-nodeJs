const booksRouter = require('./book');
const favoritesRouter = require('./favorite');

const routes = [
    {
        id: 0,
        path: '/books',
        router: booksRouter,
    },
    {
        id: 1,
        path: '/favorites',
        router: favoritesRouter,
    }
];

module.exports = routes;