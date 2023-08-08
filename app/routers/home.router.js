const db = require('../models/index');
const bcrypt = require('bcrypt')
module.exports = function(router) {
    var homeController = require('../controllers/home.controller')
    var jwt = require("../common/jwt");

    router.get("/", homeController.home);
    router.get("/about", homeController.about);
    // router.get("/token", async function(req, res) {
    //     var user = {
    //         name: "Admin",
    //         email: "a@gmail.com"
    //     };
    //     const _token = await jwt.make(user);
    //     res.cookie('token', _token, { httpOnly: true, maxAge: 3600000 });
    //     res.send({ token: _token });
    //     console.log(_token)
    // });
    router.get("/decode", async function(req, res) {
            const decode = await jwt.decode(req.cookies.token);
            res.send({ decode: decode })
        })
        // router.get("/tokenn", async function(req, res) {
        //     var user = {
        //         name: "Test",
        //         email: "a@gmail.com"
        //     };
        //     const _token = await jwt.make(user);
        //     res.cookie('token', _token, { httpOnly: true, maxAge: 3600000 });
        //     res.send({ token: _token });
        //     console.log(_token)
        // });
    router.post("/login", async function(req, res, result) {
        try {
            // Truy vấn cơ sở dữ liệu để kiểm tra quyền truy cập
            let data = await db.Account.findOne({
                where: { username: req.body.username }
            });
            data = data.get();

            if (!data) {
                result(null);
            } else {
                await bcrypt.compare(req.body.password, data.password, async function(err, isMatch) {
                    if (err) {
                        // Xử lý lỗi
                        console.error('Lỗi kiểm tra mật khẩu:', err);
                        return;
                    }
                    if (isMatch) {
                        // Mật khẩu hợp lệ
                        var user = {
                            id: data.id
                        };
                        const _token = await jwt.make(user);
                        res.cookie('token', _token, { httpOnly: true, maxAge: 3600000 });
                        res.send({ token: _token });
                        console.log(_token)
                    } else {
                        // Mật khẩu không khớp
                        console.log('Mật khẩu không khớp.');
                        res.send("Tai khoan hoac mat khau khong dung")
                    }
                });
            }
        } catch (error) {
            // Xử lý lỗi nếu có
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    })


    // router.get("/check_token", async function(req, res) {
    //     try {
    //         var _token = "";
    //         const data = await jwt.check(_token);
    //         res.send({ data: data });
    //     } catch (err) {
    //         res.send({ data: "Token khong hop le" });
    //     }
    // });
};