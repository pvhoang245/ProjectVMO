var UserForm = require('../service/userForm.service');
const codeErr = require('../common/status');
const db = require('../models/index');

exports.getAll = function(req, res) {
    UserForm.getAll(req, res);
}

exports.getById = function(req, res) {
    var id = req.params.id;
    UserForm.getById(id, req, res);
}

exports.getByFormId = function(req, res) {
    UserForm.getByFormId(req.params.formId, req, res);
}

exports.getByStatus = function(req, res) {
    UserForm.getByStatus(req.params.formId, req.params.status, req, res);
}

exports.getByUserId = function(req, res) {
    UserForm.getByUserId(req.params.userId, req, res);
}

exports.getByFormIdUserId = function(req, res) {
    UserForm.getByFormIdUserId(req.params.formId, req.params.userId, req, res);
}

exports.getListOfManager = async function(req, res) {
    var jwt = require("../common/jwt");
    try {
        const decode = await jwt.decode(req.cookies.token);
        idUser = await decode.data.id;
        let data = await db.user.findOne({ where: { accountId: idUser } });
        if (!data) {
            res.status(404).send({ Error: codeErr(404) });
            return;
        }
        data = await data.get();
        UserForm.getListOfManager(data.id, req.params.formId, req, res);
    } catch (error) {
        res.status(500).send({
            Error: error.message
        });
    }
}

exports.create = async function(req, res) {
    let data = req.body;
    UserForm.create(data, req, res);
}

exports.update = async function(req, res) {
    var id = await req.params.id;
    let data = req.body;
    UserForm.update(id, data, req, res);
}
exports.delete = function(req, res) {
    var id = req.params.id;
    UserForm.remove(id, req, res);
}