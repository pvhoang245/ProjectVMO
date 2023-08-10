var Category = require('../service/category.service');

exports.getList = function(req, res) {
    Category.getAll(req, res);
}

exports.getById = function(req, res) {
    var id = req.params.id;
    Category.getById(id, req, res);
}

exports.create = async function(req, res) {
    try {
        const newCategory = {
            name: req.body.name,
        }
        Category.create(newCategory, req, res)
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.update = async function(req, res) {
    var id = await req.params.id;
    var data = req.body;
    Category.update(id, data, req, res)
}
exports.delete = function(req, res) {
    var id = req.params.id;
    Category.remove(id, req, res)
}