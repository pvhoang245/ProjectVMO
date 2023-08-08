var UserForm = require('../service/userForm.model');

exports.getAll = function(req, res) {
    UserForm.getAll(function(data) {
        res.send({ result: data });
    })
}

exports.getById = function(req, res) {
    var id = req.params.id;
    UserForm.getById(id, function(data) {
        res.send({ result: data });
    })
}

exports.getByFormId = function(req, res) {
    var id = req.params.id;
    UserForm.getByFormId(id, function(data) {
        res.send({ result: data });
    })
}

exports.getByUserId = function(req, res) {
    var id = req.params.id;
    UserForm.getByUserId(id, function(data) {
        res.send({ result: data });
    })
}

exports.create = async function(req, res) {
    let data = req.body;
    try {
        UserForm.create(data, function(response) {
            res.send({ result: response })
        })
    } catch (error) {
        res.send(error);
    }
}

exports.update = async function(req, res) {
    var id = await req.params.id;
    let data = req.body;
    UserForm.update(id, data, function(response) {
        res.send({ result: response });
    })
}
exports.delete = function(req, res) {
    var id = req.params.id;
    UserForm.remove(id, function(response) {
        res.send({ result: response });
    })
}