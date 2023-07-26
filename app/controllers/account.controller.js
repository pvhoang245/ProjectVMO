var Account = require('../models/account.model');
var bcrypt = require('bcrypt');

exports.getAll = function(req, res) {
    Account.getAll(function(data) {
        res.send({ result: data });
    })
}

exports.getById = function(req, res) {
    var id = req.params.id;
    Account.getById(id, function(data) {
        res.send({ result: data });
    })
}

exports.getByUsername = async function(req, res) {
    try {
        await Account.getByUsername(req.body.username, req.body.password, async function(data) {
            await res.send({ result: data });
        })
    } catch (err) {
        res.send(err)
    }
}

exports.createAccount = async function(req, res) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(req.body.password, salt);
        var newAccount = await new Account({
            username: req.body.username,
            password: hashed
        });
        await Account.create(newAccount, function(response) {
            res.send({ result: response })
        })
    } catch (error) {
        res.send(error);
    }
}

exports.resetPassword = async function(req, res) {
    var id = await req.params.id;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password, salt);
    var data = await new Account({
        username: "",
        password: hashed
    });
    await Account.resetPass(id, data, function(response) {
        res.send({ result: response });
    })
}

exports.deleteAccount = function(req, res) {
    var id = req.params.id;
    Account.remove(id, function(response) {
        res.send({ result: response });
    })
}