const jwt = require('jsonwebtoken');
const _app = require("./_app")

let make = function(user) {
    return new Promise(function(resolve, reject) {
        jwt.sign({ data: user }, _app.ACCESS_TOKEN, {
                algorithm: "HS256",
                expiresIn: _app.TOKEN_TIME_LIFE
            },
            function(err, _token) {
                if (err) {
                    return reject(err)
                } else return resolve(_token);
            });
    })
}

let check = function(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, _app.ACCESS_TOKEN, function(err, data) {
            if (err) {
                return reject(err);
            } else {
                return resolve(data);
            }
        });
    });
}

module.exports = {
    make: make,
    check: check
}