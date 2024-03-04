const { Router } = require('express');
const { getAuthors } = require('../controllers/author');

const router = Router();

router.get('/', getAuthors);
router.get('/:id');
router.post('/');
router.patch('/:id');
router.delete('/:id');

module.exports = router;