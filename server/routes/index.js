const router = require('express').Router();
const { createUser,displayUser } = require('../controller/controllerDB');

router.post('/register',createUser);
router.post('/login',displayUser);

module.exports = router;