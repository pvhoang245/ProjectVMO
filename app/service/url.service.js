const db = require('../models/index');
const codeErr = require('../common/status');
const { Op } = require('sequelize')

exports.getAll = async function(req, res) {
    await db.url.findAll()
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
    await db.url.findOne({ where: { id: id } })
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

exports.getByLink = async function(name, req, res) {
    await db.url.findOne({
            where: {
                link: {
                    [Op.substring]: name
                }
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
        await db.url.create({
            link: data.link,
            description: data.description
        });
        res.status(200).send("Da tao thanh cong url");
    } catch (error) {
        res.status(500).send({
            Error: error
        });
    }
}

exports.update = async function(id, data, req, res) {
    try {
        let dataFind = await db.url.findByPk(id);
        if (!dataFind) {
            res.status(404).send({ Error: codeErr(404) });
        } else {
            await db.url.update({
                link: data.link,
                description: data.description
            }, {
                where: {
                    id: id
                }
            });
            res.status(200).send("Update thành công");
        }
    } catch (error) {
        res.status(500).send({
            Error: error
        });
    }

}

exports.remove = async function(id, req, res) {
    try {
        let data = await db.url.findByPk(id);
        if (!data) {
            res.status(404).send({ Error: codeErr(404) });
        } else {
            await db.url.destroy({
                where: {
                    id: id
                }
            });
            res.status(200).send("Xoa du lieu url co id " + id + " thanh cong.");
        }
    } catch (error) {
        res.status(500).send({
            Error: error
        });
    }
}