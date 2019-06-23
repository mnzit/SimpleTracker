var request = require('request');

module.exports = function () {
    return {
        track: (req) => {
            let config = {
                userStackAccessKey: '134d50fb0cd5a0223399d13261968045',
                ipStackAccessKey: 'b5aebbbb20d928c63b5a559e4eb6d780',
                ua: req.headers['user-agent'],
                ip: req.ip
            };

            request.get(`http://api.userstack.com/detect?access_key=${config.userStackAccessKey}&ua=${config.ua}`, (err, data) => {
                console.log(JSON.parse(data.body));
            });

            request.get(`http://api.ipstack.com/${config.ip}?access_key=${config.ipStackAccessKey}`, (err, data) => {
                console.log(JSON.parse(data.body));
            });

            console.log("Request method: "+req.method);

        }
    }
};