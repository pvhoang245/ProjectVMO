const db = require('../models/index');
const mail = require("../../sendEmail")
const bcrypt = require('bcrypt')
module.exports = function(router) {
    var homeController = require('../controllers/home.controller')
    var jwt = require("../common/jwt");

    router.get("/", homeController.home);
    router.get("/about", homeController.about);
    router.get("/decode", async function(req, res) {
        const decode = await jwt.decode(req.cookies.token);
        res.send({ decode: decode })
    })
    router.post("/login", async function(req, res, result) {
        try {
            // Truy vấn cơ sở dữ liệu để kiểm tra quyền truy cập
            let data = await db.account.findOne({
                where: { username: req.body.username }
            });
            data = data.get();

            if (!data) {
                result(null);
            } else {
                bcrypt.compare(req.body.password, data.password, async function(err, isMatch) {
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

    router.get("/sendEmail", async(req, res) => {
        let data = {
            name: "bao cao dinh ki t8",
            duedate: "31-08-2023"
        }
        await mail.sendMail(data, req, res)
    })
};