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
                    message: `create user success`,
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
            .find()
            .then(user => {

            })
            .catch(err => {
                res.status(500).json({
                    message: err.message
                })
            })
    },
    
    updateUser: (req, res) => {
        //  req.body checking condition here!!!
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