const request = require('request');
const axios = require('axios')
require('dotenv').config()

module.exports = {

    postPhotoReturnDataSelector: (req, res) => {

        let img = req.body.img

        const subscriptionKey = process.env.key1 || process.env.key2
        const uriBase = 'https://southeastasia.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false'
        const imageUrl = `${img}`

        // Request parameters.
        const params = {
            'returnFaceId': 'true',
            'returnFaceLandmarks': 'false',
            'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,' +
                'emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
        };


        const options = {
            uri: uriBase,
            qs: params,
            body: '{"url": ' + '"' + imageUrl + '"}',
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': subscriptionKey
            }
        };

        request.post(options, (error, response, body) => {
            if (error) {

                res.status(500).json({ msg: error })
                return;
            }

            let data = JSON.parse(body)
            let result = []

            for (let i = 0; i < data.length; i++) {
                let obj = {

                    gender: data[i].faceAttributes.gender,
                    age: data[i].faceAttributes.age,
                    emotion: data[i].faceAttributes.emotion
                }
                result.push(obj)
            }
            res.status(200).json({
                data: result
            })
        });
    }
}