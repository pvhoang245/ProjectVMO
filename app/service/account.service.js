const db = require('../models/index');
const codeErr = require('../common/status');

exports.getAll = async function(req, res) {
    await db.account.findAll({
            attributes: ["id", "username"]
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

exports.getById = async function(id, req, res) {
    await db.account.findOne({
            attributes: ["id", "username"],
            where: { id: id }
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

exports.getByUsername = async function(username, req, res) {
    await db.account.findOne({
            attributes: ["id", "username"],
            where: { username: username }
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
    await db.account.create({
            username: data.username,
            password: data.password
        })
        .then(account => {
            db.user.create({
                roleId: data.roleId,
                accountId: account.id,
                managerId: data.managerId,
            })
            res.status(200).send("Da tao thanh cong account");
        })
        .catch(error => {
            res.status(500).send({
                Error: error.message
            });
        });
}

exports.changePass = async function(id, password, req, res) {
    await db.account.update({ password: password }, {
            where: {
                id: id
            }
        })
        .then(data => {
            res.status(200).send("Update thành công");
        })
        .catch(err => {
            res.status(500).send({
                Error: err.message
            });
        });
}

exports.removeById = async function(id, req, res) {
    try {
        let data = await db.account.findOne({ where: { id: id } });
        if (!data) {
            res.status(404).send({ Error: codeErr(404) });
        } else {
            await db.account.destroy({
                where: {
                    id: id
                }
            });
            res.status(200).send("Xoa du lieu account co id " + id + " thanh cong.");
        }
    } catch (error) {
        res.status(500).send({
            Error: error
        });
    }
}

exports.removeByUsername = async function(username, req, res) {
    try {
        let data = await db.account.findOne({ where: { username: username } });
        if (!data) {
            res.status(404).send({ Error: codeErr(404) });
        } else {
            await db.account.destroy({
                where: {
                    username: username
                }
            });
            res.status(200).send("Xoa du lieu account co username " + username + " thanh cong.");
        }
    } catch (error) {
        res.status(500).send({
            Error: error
        });
    }
}