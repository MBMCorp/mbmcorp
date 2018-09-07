const request = require('request')

module.exports = {
    findUserTrack: (req, res) => {
        const options = {
            url: `http://ws.audioscrobbler.com/2.0/?method=chart.getTopTracks&api_key=${process.env.MUSIC_API}&format=json&limit=3`,
        };
        request.get(options, (error, response, tracks) => {
            if (!error) {
                res.status(200).json({
                    data: JSON.parse(tracks)
                })
            } else {
                res.status(500).json({
                    msg: "error connecting to database"
                })
            }
        })
    }
}