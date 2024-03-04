const { Router } = require('express');
const { getAuthors, getAuthor, postAuthor } = require('../controllers/author');

const router = Router();

router.get('/', getAuthors);
router.get('/:id', getAuthor);
router.post('/', postAuthor);
router.patch('/:id');
router.delete('/:id');

module.exports = router;