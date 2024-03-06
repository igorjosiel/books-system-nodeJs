const { Router } = require('express');
const {
    getAuthors,
    getAuthor,
    postAuthor,
    deleteAuthor,
    patchAuthor,
} = require('../controllers/author');

const router = Router();

router.get('/', getAuthors);
router.get('/:id', getAuthor);
router.post('/', postAuthor);
router.patch('/:id', patchAuthor);
router.delete('/:id', deleteAuthor);

module.exports = router;