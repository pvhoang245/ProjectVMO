const db = require('../models/index');
const codeErr = require('../common/status');

exports.getAll = async function(req, res) {
    await db.category.findAll()
        .then(data => {
            if (data.length != 0) {
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
    await db.category.findOne({ where: { id: id } })
        .then(data => {
            if (data.length != 0) {
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
        await db.category.create({
            name: data.name
        });
        res.status(200).send("Da tao thanh cong category");
    } catch (error) {
        res.status(500).send({
            Error: error
        });
    }
}

exports.update = async function(id, data, req, res) {
    try {
        let dataFind = await db.category.findByPk(id);
        if (!dataFind) {
            res.status(404).send({ Error: codeErr(404) });
        } else {
            await db.category.update({
                name: data.name
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
        let data = await db.category.findByPk(id);
        if (!data) {
            res.status(404).send({ Error: codeErr(404) });
        } else {
            await db.category.destroy({
                where: {
                    id: id
                }
            });
            res.status(200).send("Xoa du lieu category co id " + id + " thanh cong.");
        }
    } catch (error) {
        res.status(500).send({
            Error: error
        });
    }
}