const db = require('../models/index');
const mail = require('../../sendEmail');
const bcrypt = require('bcrypt')
module.exports = function(router) {
    var jwt = require("../common/jwt");
    router.post("/login", async function(req, res) {
        try {
            let data = await db.account.findOne({
                where: { username: req.body.username }
            });
            data = data.get();
            if (!data) {
                res.send("Tai khoan hoac mat khau khong dung")
            } else {
                bcrypt.compare(req.body.password, data.password, async function(err, isMatch) {
                    if (err) {
                        console.error('Lỗi kiểm tra mật khẩu:', err);
                        return;
                    }
                    if (isMatch) {
                        var user = {
                            id: data.id
                        };
                        const _token = await jwt.make(user);
                        res.cookie('token', _token, { httpOnly: true, maxAge: 3600000 });
                        res.send({ token: _token });
                        console.log(_token)
                    } else {
                        console.log('Mật khẩu không khớp.');
                        res.send("Tai khoan hoac mat khau khong dung")
                    }
                });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
    router.post("/forgetPassword", async function(req, res) {
        try {
            let data = await db.account.findOne({
                include: {
                    model: db.user,
                    where: {
                        email: req.body.email
                    }
                },
                where: {
                    username: req.body.username
                }
            });
            if (data) {
                const salt = await bcrypt.genSalt(10);
                const hashed = await bcrypt.hash(req.body.password, salt);
                await db.account.update({ password: hashed }, {
                    where: {
                        username: req.body.username
                    }
                })
                res.status(200).send("Đã thay đổi mật khẩu thành công");
            } else {
                res.status(400).send("Username, email không đúng");
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
    router.post("/sendMailResetPassword", async function(req, res) {
        let data = {
            email: req.body.email,
            name: "Mã đặt lại mật khẩu",
            html: ` Mã code của bạn là: ${req.body.code}`
        }
        mail.sendMailResetPassword(data, req, res);
    })
    router.get("/logout", function(req, res) {
        res.clearCookie('token', { httpOnly: true });
        res.status(200).json({ Message: "Đã logout" });
    })
};