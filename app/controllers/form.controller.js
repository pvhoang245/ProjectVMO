var Form = require('../service/form.service');

exports.getAll = function(req, res) {
    Form.getAll(req, res);
}

exports.getById = function(req, res) {
    var id = req.params.id;
    Form.getById(id, req, res);
}

exports.getByCategoryId = function(req, res) {
    var id = req.params.id;
    Form.getByCategoryId(id, req, res);
}

exports.create = function(req, res) {
    let data = req.body;
    Form.create(data, req, res);
}

exports.update = async function(req, res) {
    var id = await req.params.id;
    let data = req.body;
    Form.update(id, data, req, res);
}
exports.delete = function(req, res) {
    var id = req.params.id;
    Form.remove(id, req, res);
}