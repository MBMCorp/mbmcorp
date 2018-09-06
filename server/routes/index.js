const router = require('express').Router();
const { createUser } = require('../controller/controllerDB');

router.post('/register',createUser);

module.exports = router;