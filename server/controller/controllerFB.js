const axios = require('axios');
const User = require('../models/usersModel');
const mongodb = require('mongodb');
const jwt = require('jsonwebtoken');

module.exports = {
  findUser : function(req,res){
    //*Axios Request
    axios({
      method:'get',
      url:`https://graph.facebook.com/me?fields=id,name,email&&access_token=${req.body.token}`
    })
    .then((response)=> {
      //*Check if user already in database
      User.find({},(err,users)=>{
        if(!err){
          if(users.length===0){
            User.create({
              name : response.data.name,
              email : response.data.email
            }, (err,instance)=>{
              if(!err){

              }

              else{
                res.status(500).json({
                  msg : "failed adding data"
                });
              }
            });
          }

          else{
            console.log()
            User.findOne({ email: response.data.email }, function (err, data) {
              if(!err){
                jwt.sign({
                  email : data.email,
                  role : data.role,
                  name : data.name
                }, process.env.JWT_SECRET,( err,token )=>{
                  if( err ){
                    res.status( 500 ).json({
                      msg : err.message
                    });
                  }
                  else{
                    console.log(token);
                    res.status( 200 ).json({
                      mesg : 'login success',
                      token : token,
                      email : data.email
                    });
                  }
                });
              }
            });
          }
        }

        else{
          res.status(500).json({
            msg : "error connecting to database"
          });
        }
      });

    })
    .catch(err=>{
      console.log('error ey');
      res.send(err);
    });
  }
}