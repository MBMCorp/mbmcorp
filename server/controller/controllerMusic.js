const request = require('request')

module.exports = {
    findUserTrack: (req, res) => {
        const options = {
            url: `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${req.body.country}&api_key=${req.body.api_key}&format=json&limit=3`,
        };
        request.get(options, (error, response, tracks) => {
            if (!error) {
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
            } else {
                res.status(500).json({
                    msg: "error connecting to database"
                })
            }
        })
    }
}