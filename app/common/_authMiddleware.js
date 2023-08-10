const db = require('../models/index');
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
        return res.status(403).send("hiii");
    }
    console.log(req.headers);
}

const checkPermission = (url) => async(req, res, next) => {
    var jwt = require("../common/jwt");
    try {
        const decode = await jwt.decode(req.cookies.token);
        id = await decode.data.id;

        let data = await db.user.findOne({
            where: {
                accountId: id
            }
        });
        data = await data.get();

        let roleId = await data.roleId;
        let dataUrl = await db.url.findOne({
            where: {
                link: url
            }
        });
        dataUrl = await dataUrl.get();
        let urlId = await dataUrl.id;

        const permission = await db.role_url.findOne({
            where: {
                roleId: roleId,
                urlId: urlId
            }

        });

        if (permission) {
            next(); // Nếu có quyền truy cập, tiếp tục xử lý yêu cầu
        } else {
            // Nếu không có quyền truy cập, trả về lỗi hoặc chuyển hướng đến trang báo lỗi
            res.status(403).json({ error: 'Forbidden' });
        }
    } catch (error) {
        // Xử lý lỗi nếu có
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    isAuth: isAuth,
    checkPermission: checkPermission
}