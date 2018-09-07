const router = require('express').Router();
const { createUser,displayUser,findEmail } = require('../controller/controllerDB');
const { movies,books } = require('../controller/controllerAPI');

router.post('/register',createUser);
router.post('/login',displayUser);
router.post('/movies',movies);
router.get('/users',findEmail);
router.get('/books',books);

module.exports = router;