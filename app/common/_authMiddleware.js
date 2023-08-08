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
        return res.send({ data: "Chua co ma token" });
    }
    console.log(req.headers);
}

const checkPermission = (url) => async(req, res, next) => {
    var jwt = require("../common/jwt");
    try {
        const decode = await jwt.decode(req.cookies.token);
        id = await decode.data.id;
        await console.log(id)
            // Truy vấn cơ sở dữ liệu để kiểm tra quyền truy cập
        let data = await db.User.findOne({
            where: {
                accountId: id
            }
        });
        data = data.get();
        // await console.log(data)
        let role = await data.roleId;
        // await console.log(role)
        const permission = await db.Role_Url.findOne({
            include: {
                model: db.Url,
                where: {
                    link: url // và URL được yêu cầu
                }
            },
            where: {
                roleId: role
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