const router = require('express').Router();
const { findUser } = require('../controller/controllerFB');

router.get('/',(req,res)=>{
  console.log('mashooq pa eqo');
});

router.post('/',findUser);

module.exports = router;