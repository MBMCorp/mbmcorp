const axios = require('axios');
const User = require('../models/usersModel');

module.exports = {
  movies : (req,res)=>{
    const APIkey = process.env.MOVIEDB_API;
    axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&api_key=${APIkey}`,
      data: {
        firstName: 'Fred',
        lastName: 'Flintstone'
      }
    })
    .then(items=>{
      res.send(items.data);
    })
    .catch(err=>{
      res.send(err.message);
    });
  }
}