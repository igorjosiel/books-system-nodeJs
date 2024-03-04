const { Router } = require('express');
const { getAuthors, getAuthor } = require('../controllers/author');

const router = Router();

router.get('/', getAuthors);
router.get('/:id', getAuthor);
router.post('/');
router.patch('/:id');
router.delete('/:id');

module.exports = router;