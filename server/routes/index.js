const router = require('express').Router();
const { createUser,displayUser,findEmail,updateUser } = require('../controller/controllerDB');
const { movies,books } = require('../controller/controllerAPI');
const { postPhotoReturnDataSelector } = require('../controller/controllerAzure');

router.post('/register',createUser);
router.post('/login',displayUser);
router.post('/movies',movies);
router.get('/users',findEmail);
router.get('/books',books);
router.post('/azure',postPhotoReturnDataSelector);
router.post('/update',updateUser);


module.exports = router;