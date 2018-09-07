

const request = require('request');

// Replace <Subscription Key> with your valid subscription key.
// const subscriptionKey = '<Subscription Key>';

module.exports = {

    getData: (req, res) => {


        const subscriptionKey = 'a49ecc189d974b35ac020ddca4d6fdc5' || '79ca17bd72304bddada45bcb0e953c9c';
        // You must use the same location in your REST call as you used to get your
        // subscription keys. For example, if you got your subscription keys from
        // westus, replace "westcentralus" in the URL below with "westus".
        // const uriBase = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect';
        const uriBase = 'https://southeastasia.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false'

        const imageUrl = 'https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/w_644,c_limit/best-face-oil.png';

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
                console.log('Error: ', error);
                return;
            }
            let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
            res.status(200).json({
                data: JSON.parse(body)
            })
            console.log('JSON Response\n');
            console.log(jsonResponse);
        });
    },

    postPhoto: (req, res) => {

        let img = req.body.img

        const subscriptionKey = 'a49ecc189d974b35ac020ddca4d6fdc5' || '79ca17bd72304bddada45bcb0e953c9c';
        // You must use the same location in your REST call as you used to get your
        // subscription keys. For example, if you got your subscription keys from
        // westus, replace "westcentralus" in the URL below with "westus".
        // const uriBase = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect';
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
                console.log('Error: ', error);
                res.status(500).json({ msg: error })
                return;
            }
            let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
            res.status(200).json({
                data: JSON.parse(body)
            })
            console.log('JSON Response\n');
            console.log(jsonResponse);
        });

    }


}