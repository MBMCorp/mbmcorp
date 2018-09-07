const Router = require('express').Router()
const { getData, postPhoto } = require('../controllers/controllerAzure')

Router.get('/azure', getData)
Router.post('/photo', postPhoto)

module.exports = Router