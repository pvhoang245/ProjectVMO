var Category = require('../models/formCategory.model');

exports.getList = function(req, res) {
    Category.getAll(function(data) {
        res.send({ result: data });
    })
}

exports.getOne = function(req, res) {
    var id = req.params.id;
    Category.getById(id, function(data) {
        res.send({ result: data });
    })
}

exports.createCategory = async function(req, res) {
    try {
        const newCategory = await new Category({
            name: req.body.name,
        })
        Category.create(newCategory, function(response) {
            res.send({ result: response });
        })
    } catch (error) {
        res.send(500).json(error);
    }
}

exports.update = async function(req, res) {
    var id = await req.params.id;
    var data = req.body;
    Category.update(id, data, function(response) {
        res.send({ result: response });
    })
}
exports.delete = function(req, res) {
    var id = req.params.id;
    Category.remove(id, function(response) {
        res.send({ result: response });
    })
}