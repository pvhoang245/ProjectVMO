const db = require('../models/index');
const codeErr = require('../common/status');
const mail = require('../../sendEmail')

exports.getAll = async function(req, res) {
    await db.form_user.findAll()
        .then(data => {
            if (data && data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(404).send({ Error: codeErr(404) });
            }
        })
        .catch(err => {
            res.status(500).send({
                Error: err.message
            });
        });
}

exports.getById = async function(id, req, res) {
    await db.form_user.findOne({ where: { id: id } })
        .then(data => {
            if (data && data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(404).send({ Error: codeErr(404) });
            }
        })
        .catch(err => {
            res.status(500).send({
                Error: err.message
            });
        });
}

exports.getByFormId = async function(formId, req, res) {
    await db.form_user.findAll({ where: { formId: formId } })
        .then(data => {
            if (data && data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(404).send({ Error: codeErr(404) });
            }
        })
        .catch(err => {
            res.status(500).send({
                Error: err.message
            });
        });
}

exports.getByUserId = async function(userId, req, res) {
    await db.form_user.findAll({ where: { userId: userId } })
        .then(data => {
            if (data && data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(404).send({ Error: codeErr(404) });
            }
        })
        .catch(err => {
            res.status(500).send({
                Error: err.message
            });
        });
}

exports.getByFormIdUserId = async function(formId, userId, req, res) {
    await db.form_user.findAll({ where: { userId: userId, formId: formId } })
        .then(data => {
            if (data && data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(404).send({ Error: codeErr(404) });
            }
        })
        .catch(err => {
            res.status(500).send({
                Error: err.message
            });
        });
}

exports.getListOfManager = async function(managerId, formId, req, res) {
    await db.form_user.findAll({
            include: {
                model: db.user,
                where: { managerId: managerId }
            },
            where: {
                formId: formId
            }
        })
        .then(data => {
            if (data && data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(404).send({ Error: codeErr(404) });
            }
        })
        .catch(err => {
            res.status(500).send({
                Error: err.message
            });
        });
}

exports.create = async function(data, req, res) {
    try {
        await db.form_user.create({
            status: "new",
            formId: data.formId,
            userId: data.userId
        });
        res.status(200).send("Da tao thanh cong form_user");
    } catch (err) {
        res.status(500).send({
            Error: err.message
        });
    }
}

exports.update = async function(id, data, req, res) {
    try {
        let dataFind = await db.form_user.findByPk(id);
        if (!dataFind) {
            res.status(404).send({ Error: codeErr(404) });
            return;
        } else {
            await db.form_user.update({
                status: data.status,
                managerCmt: data.managerCmt,
                userCmt: data.userCmt
            }, {
                where: {
                    id: id
                }
            });
        };
        let dataMail = await db.user.findOne({
            include: {
                model: db.form_user,
                where: { id: id }
            }
        })
        if (data.status == "accepted") {
            let dataSend = {
                email: dataMail.email,
                name: "Báo cáo đã được accepted",
                html: `Báo cáo thử việc đã được chấp nhận, vui lòng đọc comment để xem nhận xét của manager`
            };
            mail.sendMailChangeStatus(dataSend, req, res)
        } else if (data.status == "reject") {
            let dataSend = {
                email: dataMail.email,
                name: "Báo cáo đã bị reject",
                html: `Báo cáo của bạn đã bị từ chối, vui lòng đọc comment để cập nhật và nộp lại`
            };
            mail.sendMailChangeStatus(dataSend, req, res)
        }
        res.status(200).send("Update thanh cong");
    } catch (err) {
        res.status(500).send({
            Error: err.message
        });
    }
}

exports.remove = async function(id, req, res) {
    try {
        let data = await db.form_user.findByPk(id);
        if (!data) {
            res.status(404).send({ Error: codeErr(404) });
        } else {
            await db.form_user.destroy({
                where: {
                    id: id
                }
            });
            res.status(200).send("Xoa du lieu form_user co id " + id + " thanh cong.");
        }
    } catch (error) {
        res.status(500).send({
            Error: error.message
        });
    }
}