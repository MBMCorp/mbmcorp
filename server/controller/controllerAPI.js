const axios = require('axios');
const User = require('../models/usersModel');

module.exports = {
  movies : (req,res)=>{
    const APIkey = process.env.MOVIEDB_API;
    const age = req.body.age;
    if(age<17){
      axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&api_key=${APIkey}`
      })
      .then(items=>{
        res.send(items.data);
      })
      .catch(err=>{
        res.send(err.message);
      });
    } else{
      axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=${APIkey}`
      })
      .then(items=>{
        res.send(items.data);
      })
      .catch(err=>{
        res.send(err.message);
      });
    }
  }
};