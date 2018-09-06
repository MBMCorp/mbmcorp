const router = require('express').Router();
const { findUser } = require('../controller/controllerFB');
// const { createUser } = require('../controller/controllerDB');

router.get('/',(req,res)=>{
  console.log('mashooq pa eqo');
});

router.post('/',findUser);

// Testing create user route

module.exports = router;