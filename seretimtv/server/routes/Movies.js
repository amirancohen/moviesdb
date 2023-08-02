var express = require('express');
var router = express.Router();
const movies = require('../controllers/Movies');
const auth = require('../middleware/auth');

router.get('/', movies.getAll);
router.get('/:id', auth, movies.getItem);
router.post('/', auth, movies.add);
router.patch('/:id', auth, movies.edit);
router.delete('/:id', auth, movies.delete);

module.exports = router;