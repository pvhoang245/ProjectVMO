let isAuth = async function(req, res, next) {
    var _jwt = require('../common/jwt');
    var _token = req.headers.authorization;
    if (_token) {
        try {
            var authData = await _jwt.check(_token);

            req.auth = authData;
            next();
        } catch (err) {
            return res.send({ data: "Token khong hop le" });
        }
    } else {
        return res.send({ data: "Chua co ma token" });
    }
    console.log(req.headers);
}

module.exports = {
    isAuth: isAuth
}