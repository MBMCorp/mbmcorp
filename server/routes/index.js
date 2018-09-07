const router = require('express').Router();
const { createUser,displayUser,findEmail } = require('../controller/controllerDB');
const { movies } = require('../controller/controllerAPI');

router.post('/register',createUser);
router.post('/login',displayUser);
router.post('/movies',movies);
router.get('/users',findEmail);

module.exports = router;