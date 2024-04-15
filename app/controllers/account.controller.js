const Account = require('../service/account.service');
const codeErr = require('../common/status');
var bcrypt = require('bcrypt');
const db = require('../models/index');

exports.getAll = function(req, res) {
    Account.getAll(req, res);
}

exports.getById = function(req, res) {
    let id = req.params.id;
    Account.getById(id, req, res);
}

exports.getByUsername = function(req, res) {
    let username = req.params.username;
    Account.getByUsername(username, req, res);
}

exports.create = async function(req, res) {
    try {
        if (req.body.role === "admin") {
            res.status(403).send({ Error: "Access denied" });
            return;
        }
        let checkRole = await db.role.findOne({ where: { name: req.body.role } });
        if (!checkRole) {
            res.status(404).send({ Error: "Role not found" });
            return;
        }
        let data = await db.account.findOne({ where: { username: req.body.username } });
        if (data) {
            res.status(400).send({ Error: "Username existed" });
            return;
        }
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(req.body.password, salt);
        let newAccount = {
            username: req.body.username,
            password: hashed,
            roleId: checkRole.id,
            managerId: req.body.managerId
        };
        Account.create(newAccount, req, res)
    } catch (error) {
        res.send(error);
    }
}

exports.changePassword = async function(req, res) {
    var jwt = require("../common/jwt");
    try {
        const decode = await jwt.decode(req.cookies.token);
        idUser = await decode.data.id;
        var id = await req.params.id;
        if (id != idUser) {
            res.status(403).send({ Error: codeErr(403) });
            return;
        } else {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            Account.changePass(id, hashed, req, res)
        }
    } catch (error) {
        res.send({ Error: error.message });
    }
}

exports.deleteById = function(req, res) {
    var id = req.params.id;
    Account.removeById(id, req, res)
}

exports.deleteByUsername = function(req, res) {
    var username = req.params.username;
    Account.removeByUsername(username, req, res)
}