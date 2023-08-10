const Account = require('../service/account.service');
const codeErr = require('../common/status');
var bcrypt = require('bcrypt');

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
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(req.body.password, salt);
        let newAccount = {
            username: req.body.username,
            password: hashed
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
        } else {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            Account.changePass(id, hashed, req, res)
        }
    } catch (error) {
        res.send(error);
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