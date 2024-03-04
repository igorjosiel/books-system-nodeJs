const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => console.log('Teste'));
router.get('/:id');
router.post('/');
router.patch('/:id');
router.delete('/:id');

module.exports = router;