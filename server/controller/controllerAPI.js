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
        const data = [];
        for(let i = 0;i<3;i++){
          data.push(items.data.results[i]);
        }
        res.status(200).json({
          data : data
        });
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
        const data = [];
        for(let i = 0;i<3;i++){
          data.push(items.data.results[i]);
        }
        res.status(200).json({
          data : data
        });
      })
      .catch(err=>{
        res.send(err.message);
      });
    }
  },

  books : (req,res)=>{
    const NYTimes = process.env.NY_TIMES;

    axios({
      method : "GET",
      url : `https://api.nytimes.com/svc/books/v3/lists/overview.json?&api-key=${NYTimes}`
    })
    .then(nytimesBestSellers=>{
      res.status(200).json({
        books : nytimesBestSellers.data
      });
    })
    .catch(err=>{
      res.status(404).json({
        msg : err
      });
    });
  }
};