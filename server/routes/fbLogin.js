const router = require('express').Router();
const { findUser, findUserTrack } = require('../controller/controllerFB');
const { createUser, displayUser } = require('../controller/controllerDB');

router.get('/',(req,res)=>{
  console.log('mashooq pa eqo');
});

router.post('/',findUser);

// Testing CRUD User
router.post('/create',createUser);
router.post('/find/:email', displayUser)

// Testing Music
router.post('/track', findUserTrack)
module.exports = router;