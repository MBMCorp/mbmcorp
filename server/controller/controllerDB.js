const User = require('../models/usersModel')
const axios = require('axios');
const mongodb = require('mongodb');
const jwt = require('jsonwebtoken');

module.exports = {
    createUser: (req, res) => {
        User
            .create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
            .then(user => {
                res.status(201).json({
                    message: `Create user success`,
                    data: user
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: err.message
                })
            })
    },

    displayUser: (req, res) => {
        User
            .find({
                email: req.body.email,
                password : req.body.password
            })
            .then(user => {
                console.log(user)
                if(user.length > 0){
                    jwt.sign({
                        email : user[0].email
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
                            email : user[0].email,
                          });
                        }
                      });

                } else{
                    res.status(404).json({
                        message: `Email not found`,
                    });
                }
            })
            .catch(err => {
                res.status(404).json({
                    message: err.message
                });
            })
    },

    updateUser: (req, res) => {
        User
            .update({
                _id: id
            },{
                $set:{
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    age: req.body.age,
                    address: req.body.address
                }
            })
            .then(code => {
                res.status(200).json({
                    message: 'Update data success',
                    status: code
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: err.message
                })
            })
    },

    findEmail : function(req,res){
        User.find({
            email : req.query.email
        })
        .then(data=>{

        })
        .catch(err=>{
            console.log(err);
        })
    }


}