var _app = require('./app/common/_app')
const db = require("./app/models/index")
const nodemailer = require('nodemailer')
const sendMailCreateForm = async(data, req, res) => {
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
const sendMailChangeStatus = async(data, req, res) => {
    let transporter = await nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: _app.EMAIL_USERNAME,
            pass: _app.EMAIL_PASSWORD
        }
    });
    await transporter.sendMail({
            from: _app.EMAIL_USERNAME,
            to: data.email,
            subject: data.name,
            text: "Hi",
            html: data.html
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

const sendMailResetPassword = async(data, req, res) => {
    let transporter = await nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: _app.EMAIL_USERNAME,
            pass: _app.EMAIL_PASSWORD
        }
    });
    await transporter.sendMail({
            from: _app.EMAIL_USERNAME,
            to: data.email,
            subject: data.name,
            text: "Hi",
            html: data.html
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

module.exports = {
    sendMailCreateForm: sendMailCreateForm,
    sendMailChangeStatus: sendMailChangeStatus,
    sendMailResetPassword: sendMailResetPassword
};