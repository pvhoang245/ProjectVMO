var _app = require('./app/common/_app')
const db = require("./app/models/index")
const nodemailer = require('nodemailer')
const sendMail = async(data, req, res) => {
    let transporter = await nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: _app.EMAIL_USERNAME,
            pass: _app.EMAIL_PASSWORD
        }
    });

    let mail = await db.user.findAll({
        attributes: ["email"]
    })
    let list = [];
    for (let i = 0; i < mail.length; i++) {
        list.push(mail[i].email);
    }

    await transporter.sendMail({
            from: _app.EMAIL_USERNAME,
            to: list,
            subject: data.name,
            text: "Hi",
            html: `Báo cáo thử việc đã có, vui lòng cập nhật và nộp lại trước ngày <b>${data.duedate}<b>`
        },
        (err) => {
            if (err) {
                return res.json({
                    message: "Lỗi",
                    err
                });
            }
            return res.json({
                message: "Đã gửi mail"
            })
        })
}


module.exports = { sendMail: sendMail };