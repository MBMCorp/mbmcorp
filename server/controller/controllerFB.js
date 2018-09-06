const axios = require('axios');
const User = require('../models/usersModel');
const mongodb = require('mongodb');
const jwt = require('jsonwebtoken');
const request = require('request')

module.exports = {
  findUser: function (req, res) {
    //*Axios Request
    axios({
      method: 'get',
      url: `https://graph.facebook.com/me?fields=id,name,email&&access_token=${req.body.token}`
    })
      .then((response) => {
        //*Check if user already in database
        User.find({}, (err, users) => {
          if (!err) {
            if (users.length === 0) {
              User.create({
                name: response.data.name,
                email: response.data.email
              }, (err, instance) => {
                if (!err) {

                }

                else {
                  res.status(500).json({
                    msg: "failed adding data"
                  });
                }
              });
            }

            else {
              User.findOne({ email: response.data.email }, function (err, data) {
                if (!err) {
                  jwt.sign({
                    email: data.email,
                    role: data.role,
                    name: data.name
                  }, process.env.JWT_SECRET, (err, token) => {
                    if (err) {
                      res.status(500).json({
                        msg: err.message
                      });
                    }
                    else {
                      res.status(200).json({
                        mesg: 'login success',
                        token: token
                      });
                    }
                  });
                }
              });
            }
          }

          else {
            res.status(500).json({
              msg: "error connecting to database"
            });
          }
        });

      })
      .catch(err => {
        res.send(err);
      });
  },
  findUserTrack: (req, res) => {
    const options = {
      url: `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${req.body.country}&api_key=${req.body.api_key}&format=json&limit=3`,
    };
    request.get(options, (error, response, tracks) => {
      if(!error){
        res.status(200).json({
          data: JSON.parse(tracks)
            // RESULT DATA <============
            // "data":
            //   "topartists":
            //       "artist":
            //               "name": "David Bowie",
            //               "listeners": "3289980",
            //               "mbid": "5441c29d-3602-4898-b1a1-b77fa23b8e50",
            //               "url": "https://www.last.fm/music/David+Bowie",
            //               "streamable": "0",
        })
      }else{
        res.status(500).json({
          msg: "error connecting to database"
        })
      }
    })
  }
}