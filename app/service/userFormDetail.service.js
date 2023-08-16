const db = require('../models/index');
const codeErr = require('../common/status');

exports.getAll = async function(formUserId, req, res) {
    await db.form_user_detail.findAll({ where: { formUserId: formUserId } })
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
    await db.form_user_detail.findOne({ where: { id: id } })
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
        await db.form_user_detail.create({
            description: data.description,
            score: data.score,
            formUserId: data.formUserId
        });
        res.status(200).send("Da tao thanh cong task");
    } catch (err) {
        res.status(500).send({
            Error: err.message
        });
    }
}

exports.update = async function(id, data, req, res) {
    try {
        let dataFind = await db.form_user_detail.findByPk(id);
        if (!dataFind) {
            res.status(404).send({ Error: codeErr(404) });
        } else {
            await db.form_user_detail.update({
                description: data.description,
                score: data.score,
                formUserId: data.formUserId
            }, {
                where: {
                    id: id
                }
            });
            res.status(200).send("Update thành công");
        }
    } catch (error) {
        res.status(500).send({
            Error: error.message
        });
    }
}

exports.remove = async function(id, req, res) {
    try {
        let data = await db.form_user_detail.findByPk(id);
        if (!data) {
            res.status(404).send({ Error: codeErr(404) });
        } else {
            await db.form_user_detail.destroy({
                where: {
                    id: id
                }
            });
            res.status(200).send("Xoa du lieu form_user_detail co id " + id + " thanh cong.");
        }
    } catch (error) {
        res.status(500).send({
            Error: error.message
        });
    }
}