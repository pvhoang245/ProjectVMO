var UserFormDetail = require('../service/userFormDetail.service');

exports.getAll = function(req, res) {
    UserFormDetail.getAll(function(data) {
        res.send({ result: data });
    })
}

exports.getById = function(req, res) {
    var id = req.params.id;
    UserFormDetail.getById(id, function(data) {
        res.send({ result: data });
    })
}

exports.getByUserFormId = function(req, res) {
    var id = req.params.id;
    UserFormDetail.getByUserFormId(id, function(data) {
        res.send({ result: data });
    })
}

exports.create = async function(req, res) {
    let data = req.body;
    try {
        UserFormDetail.create(data, function(response) {
            res.send({ result: response })
        })
    } catch (error) {
        res.send(error);
    }
}

exports.update = async function(req, res) {
    var id = await req.params.id;
    let data = req.body;
    UserFormDetail.update(id, data, function(response) {
        res.send({ result: response });
    })
}
exports.delete = function(req, res) {
    var id = req.params.id;
    UserFormDetail.remove(id, function(response) {
        res.send({ result: response });
    })
}