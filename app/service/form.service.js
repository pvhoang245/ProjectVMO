const db = require('../models/index');
const codeErr = require('../common/status');
const mail = require('../../sendEmail')
const { Op } = require('sequelize');

exports.getAll = async function(req, res) {
    await db.form.findAll()
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
    await db.form.findOne({ where: { id: id } })
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

exports.getByCategoryId = async function(categoryId, req, res) {
    await db.form.findAll({ where: { categoryId: categoryId } })
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
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    await db.form.create({
            name: data.name,
            description: data.description,
            date: formattedDate,
            categoryId: data.categoryId,
            duedate: data.duedate
        })
        .then(async account => {
            let listId = await db.user.findAll({
                include: {
                    model: db.role,
                    where: {
                        name: {
                            [Op.or]: ["manager", "employee"]
                        }
                    }
                },
                attributes: ["id"]
            })
            let list = [];
            for (let i = 0; i < listId.length; i++) {
                list.push(listId[i].id);
                await db.form_user.create({
                    status: "new",
                    formId: account.id,
                    userId: listId[i].id
                });
            }
            let dataMail = {
                name: data.name,
                duedate: data.duedate
            }
            await mail.sendMailCreateForm(list, dataMail, req, res)
            res.status(200).send("Da tao thanh cong form va gui mail");
        })
        .catch(error => {
            res.status(500).send({
                Error: error.message
            });
        });
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
            Error: error.message
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
            Error: error.message
        });
    }
}