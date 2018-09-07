const router = require('express').Router();
const { createUser } = require('../controller/controllerDB');
const { findUserTrack } = require('../controller/controllerMusic');

router.post('/register',createUser);
router.post('/track', findUserTrack)

module.exports = router;