const router = require('express').Router();
const { findUser } = require('../controller/controllerFB');
const { createUser, displayUser } = require('../controller/controllerDB');

router.get('/',(req,res)=>{
  console.log('mashooq pa eqo');
});

router.post('/fb-login',findUser);

// Testing CRUD User
router.post('/create',createUser);
router.post('/find/:email', displayUser)

// Testing Music

module.exports = router;