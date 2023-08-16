const db = require('../models/index');
const codeErr = require('../common/status');

exports.getAll = async function(req, res) {
    await db.role_url.findAll({
            include: [{
                model: db.role,
                attributes: ["name"]
            }, {
                model: db.url,
                attributes: ["link"]
            }],
            attributes: ["id"]
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
    await db.role_url.findOne({
            include: [{
                model: db.role,
                attributes: ["name"]
            }, {
                model: db.url,
                attributes: ["link"]
            }],
            attributes: ["id"],
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

exports.getByRole = async function(role, req, res) {
    await db.role_url.findAll({
            include: [{
                model: db.role,
                attributes: ["name"],
                where: { name: role }
            }, {
                model: db.url,
                attributes: ["link"]
            }],
            attributes: ["id"]
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

exports.getByUrl = async function(link, req, res) {
    await db.role_url.findAll({
            include: [{
                model: db.role,
                attributes: ["name"]
            }, {
                model: db.url,
                attributes: ["link"],
                where: { link: link }
            }],
            attributes: ["id"]
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

exports.getByRoleUrl = async function(role, url, req, res) {
    await db.role_url.findAll({
            include: [{
                model: db.role,
                attributes: ["name"],
                where: { name: role }
            }, {
                model: db.url,
                attributes: ["link"],
                where: { link: url }
            }],
            attributes: ["id"],
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
        await db.role_url.create({
            roleId: data.roleId,
            urlId: data.urlId
        });
        res.status(200).send("Da tao thanh cong role_url");
    } catch (error) {
        res.status(500).send({
            Error: error
        });
    }
}

exports.remove = async function(id, req, res) {
    try {
        let data = await db.role_url.findByPk(id);
        if (!data) {
            res.status(404).send({ Error: codeErr(404) });
        } else {
            await db.role_url.destroy({
                where: {
                    id: id
                }
            });
            res.status(200).send("Xoa du lieu role_url co id " + id + " thanh cong.");
        }
    } catch (error) {
        res.status(500).send({
            Error: error
        });
    }
}