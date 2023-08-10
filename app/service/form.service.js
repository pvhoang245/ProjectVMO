const db = require('../models/index');
const codeErr = require('../common/status');
const mail = require('../../sendEmail')

exports.getAll = async function(req, res) {
    await db.form.findAll()
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
    await db.form.findOne({ where: { id: id } })
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

exports.getByCategoryId = async function(id, req, res) {
    await db.form.findAll({ where: { categoryId: id } })
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
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    try {
        await db.form.create({
            name: data.name,
            description: data.description,
            date: formattedDate,
            categoryId: data.categoryId,
            duedate: data.duedate
        });
        let dataMail = {
            name: "bao cao dinh ki t8",
            duedate: "31-08-2023"
        }
        await mail.sendMail(dataMail, req, res)
        res.status(200).send("Da tao thanh cong form");
    } catch (err) {
        res.status(500).send({
            Error: err.message
        });
    }
}

exports.update = async function(id, data, req, res) {
    try {
        let dataFind = await db.form.findByPk(id);
        if (!dataFind) {
            res.status(404).send({ Error: codeErr(404) });
        } else {
            await db.form.update({
                name: data.name,
                description: data.description,
                date: data.date,
                categoryId: data.categoryId,
                duedate: data.duedate
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
        let data = await db.form.findByPk(id);
        if (!data) {
            res.status(404).send({ Error: codeErr(404) });
        } else {
            await db.form.destroy({
                where: {
                    id: id
                }
            });
            res.status(200).send("Xoa du lieu form co id " + id + " thanh cong.");
        }
    } catch (error) {
        res.status(500).send({
            Error: error
        });
    }
}