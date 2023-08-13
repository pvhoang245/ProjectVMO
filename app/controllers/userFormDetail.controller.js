var UserFormDetail = require('../service/userFormDetail.service');
var jwt = require('../common/jwt');

exports.getAll = async function(req, res) {
    var id = await req.params.id;
    UserFormDetail.getAll(id, req, res);
}

exports.getById = function(req, res) {
    var id = req.params.id;
    UserFormDetail.getById(id, req, res);
}

exports.create = async function(req, res) {
    let data = req.body;
    UserFormDetail.create(data, req, res);
}

exports.update = async function(req, res) {
    var id = await req.params.id;
    let data = req.body;
    UserFormDetail.update(id, data, req, res);
}
exports.delete = function(req, res) {
    var id = req.params.id;
    UserFormDetail.remove(id, req, res);
}