const User = require('../models/usersModel')

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
        // test display user on database
        User
            .find({
                email: req.params.email
            })
            .then(user => {
                if(user.length > 0){
                    res.status(200).json({
                        message: `Find user by email success`,
                        data: user
                    })
                }else{
                    res.status(404).json({
                        message: `Email not found`,
                    })
                }
            })
            .catch(err => {
                res.status(404).json({
                    message: err.message
                })
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
    }
}