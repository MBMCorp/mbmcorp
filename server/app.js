const express = require('express');
const app = express();
const cors = require('cors')
const RouterAzure = require('./routes/azure')


const port = 3000;
// require('dotenv').config();
// const request = require('request');
// const mongoose = require('mongoose');

// //Connecting do Mongoose
// const url = 'mongodb://localhost:27017/socmed-aggregator';
// mongoose.connect(url, { useNewUrlParser: true });
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//   console.log('We are connected');
// });

app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const fbLogin = require('./routes/fbLogin');
// app.use('/fb-login', fbLogin);

app.use('/', RouterAzure)

app.listen(port, () => {
  console.log(`application is on port:${port}`);
});