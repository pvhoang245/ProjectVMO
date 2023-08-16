var User = require('../service/user.service');
const db = require('../models/index');

exports.getAll = async function(req, res) {
    var jwt = require("../common/jwt");
    try {
        const decode = await jwt.decode(req.cookies.token);
        id = await decode.data.id;
        console.log(id)
        let data = await db.user.findOne({
            include: {
                model: db.role
            },
            where: {
                accountId: id
            }
        });
        User.getAll(data.id, data.role.name, req, res);
    } catch (error) {
        res.status(500).send({
            Error: error.message
        });
    }
}

exports.getById = async function(req, res) {
    var id = req.params.id;
    var jwt = require("../common/jwt");
    try {
        const decode = await jwt.decode(req.cookies.token);
        id = await decode.data.id;
        console.log(id)
        let data = await db.user.findOne({
            include: {
                model: db.role
            },
            where: {
                accountId: id
            }
        });
        User.getById(req.params.id, data.role.name, req, res);
    } catch (error) {
        res.status(500).send({
            Error: error.message
        });
    }
}

exports.getByName = async function(req, res) {
    var id = req.params.id;
    var jwt = require("../common/jwt");
    try {
        const decode = await jwt.decode(req.cookies.token);
        id = await decode.data.id;
        console.log(id)
        let data = await db.user.findOne({
            include: {
                model: db.role
            },
            where: {
                accountId: id
            }
        });
        User.getByName(req.params.name, data.role.name, req, res);
    } catch (error) {
        res.status(500).send({
            Error: error.message
        });
    }
}

exports.create = async function(req, res) {
    try {
        let data = await req.body;
        let check = await db.user.findOne({ where: { accountId: data.accountId } });
        if (check) {
            res.status(400).send({ Error: "Tài khoản đã được liên kết" });
            return;
        }
        if (data.roleId) {
            let role = await db.role.findOne({
                where: { id: data.roleId }
            });
            role = await role.get();
            if (role.name == "admin") {
                res.status(403).send({ Error: "Access denied" });
            } else {
                User.create(data, req, res);
            }
        } else {
            User.create(data, req, res);
        }
    } catch (error) {
        res.status(500).send({
            Error: error.message
        });
    }
}

exports.update = async function(req, res) {
    try {
        let data = await req.body;
        if (data.roleId) {
            let role = await db.role.findOne({
                where: { id: data.roleId }
            });
            role = await role.get();
            if (role.name == "admin") {
                res.status(403).send({ Error: "Access denied" });
            } else {
                User.update(req.params.id, data, req, res);
            }
        } else {
            User.update(req.params.id, data, req, res);
        }
    } catch (error) {
        res.status(500).send({
            Error: error.message
        });
    }
}
exports.delete = function(req, res) {
    var id = req.params.id;
    User.remove(id, req, res);
}