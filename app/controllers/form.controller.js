var Form = require('../models/form.model');

exports.getAll = function(req, res) {
    Form.getAll(function(data) {
        res.send({ result: data });
    })
}

exports.getById = function(req, res) {
    var id = req.params.id;
    Form.getById(id, function(data) {
        res.send({ result: data });
    })
}

exports.getByYear = function(req, res) {
    Form.getByYear(req.body.year, function(data) {
        res.send({ result: data });
    })
}

exports.getByCategory = function(req, res) {
    var id = req.params.categoryId;
    Form.getByCategory(id, function(data) {
        res.send({ result: data });
    })
}

exports.createForm = function(req, res) {
    try {
        Form.createForm(data, function(response) {
            res.send({ result: response })
        })
    } catch (error) {
        res.send(error);
    }
}

exports.updateForm = async function(req, res) {
    var id = await req.params.id;
    Form.updateForm(id, data, function(response) {
        res.send({ result: response });
    })
}
exports.deleteForm = function(req, res) {
    var id = req.params.id;
    Form.removeForm(id, function(response) {
        res.send({ result: response });
    })
}