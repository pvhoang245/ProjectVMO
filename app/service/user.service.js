const db = require('../models/index');
const { Op } = require('sequelize');
const codeErr = require('../common/status');

exports.getAll = async function(id, role, req, res) {
    if (role == "admin") {
        await db.user.findAll()
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
    } else {
        await db.user.findAll({
                attributes: ["id", "name", "birthday", "address", "image", "sex", "bhxh", "phone", "email"],
                where: { managerId: id }
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
}

exports.getById = async function(id, role, req, res) {
    if (role == "admin") {
        await db.user.findOne({ where: { id: id } })
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
    } else {
        await db.user.findOne({
                attributes: ["id", "name", "birthday", "address", "image", "sex", "bhxh", "phone", "email"],
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
}

exports.getByName = async function(name, role, req, res) {
    if (role == "admin") {
        await db.user.findAll({
                where: {
                    name: {
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
    } else {
        await db.user.findAll({
                attributes: ["id", "name", "birthday", "address", "image", "sex", "bhxh", "phone", "email"],
                where: {
                    name: {
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
}

exports.create = async function(data, req, res) {
    try {
        await db.user.create({
            name: data.name,
            birthday: data.birthday,
            address: data.address,
            image: data.image,
            roleId: data.roleId,
            bhxh: data.bhxh,
            phone: data.phone,
            email: data.email,
            accountId: data.accountId,
            managerId: data.managerId,
            sex: data.sex
        });
        res.status(200).send("Da tao thanh cong user");
    } catch (err) {
        res.status(500).send({
            Error: err.message
        });;
    }
}

exports.update = async function(id, data, req, res) {
    var jwt = require('../common/jwt');
    try {
        const decode = await jwt.decode(req.cookies.token);
        console.log(decode.data.id)
        let checkRole = await db.user.findOne({
            include: {
                model: db.role,
                required: true
            },
            where: {
                accountId: decode.data.id
            }
        });
        if (checkRole.role.name == "admin") {
            let dataFind = await db.user.findByPk(id);
            if (!dataFind) {
                res.status(404).send({ Error: codeErr(404) });
                return;
            } else {
                await db.user.update({
                    name: data.name,
                    birthday: data.birthday,
                    address: data.address,
                    image: data.image,
                    bhxh: data.bhxh,
                    phone: data.phone,
                    email: data.email,
                    managerId: data.managerId,
                    sex: data.sex,
                    roleId: roleId
                }, {
                    where: {
                        id: id
                    }
                });
                res.status(200).send("Update thành công");
            }
        } else if (id == checkRole.id) {
            let dataFind = await db.user.findByPk(id);
            if (!dataFind) {
                res.status(404).send({ Error: codeErr(404) });
                return;
            } else {
                await db.user.update({
                    name: data.name,
                    birthday: data.birthday,
                    address: data.address,
                    image: data.image,
                    bhxh: data.bhxh,
                    phone: data.phone,
                    email: data.email,
                    sex: data.sex
                }, {
                    where: {
                        id: id
                    }
                });
                res.status(200).send("Update thành công");
            }
        } else {
            res.status(403).send({ Error: "Access denied" });
        }
    } catch (err) {
        res.status(500).send({
            Error: err.message
        });
    }
}

exports.remove = async function(id, req, res) {
    try {
        let data = await db.user.findByPk(id);
        if (!data) {
            res.status(404).send({ Error: codeErr(404) });
        } else {
            await db.user.destroy({
                where: {
                    id: id
                }
            });
            res.status(200).send("Xoa du lieu user co id " + id + " thanh cong.");
        }
    } catch (error) {
        res.status(500).send({
            Error: error.message
        });
    }
}