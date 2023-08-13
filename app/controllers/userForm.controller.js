var UserForm = require('../service/userForm.service');
const codeErr = require('../common/status');

exports.getAll = function(req, res) {
    UserForm.getAll(req, res);
}

exports.getById = function(req, res) {
    var id = req.params.id;
    UserForm.getById(id, req, res);
}

exports.getByFormId = function(req, res) {
    var id = req.params.id;
    UserForm.getByFormId(id, req, res);
}

exports.getByUserId = function(req, res) {
    var id = req.params.id;
    UserForm.getByUserId(id, req, res);
}

exports.getByFormIdUserId = function(req, res) {
    var data = req.body;
    UserForm.getByFormIdUserId(data, req, res);
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