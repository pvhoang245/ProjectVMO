var Url = require('../service/url.service');

exports.getList = function(req, res) {
    Url.getAll(req, res);
}

exports.getById = function(req, res) {
    var id = req.params.id;
    Url.getById(id, req, res);
}

exports.getByLink = function(req, res) {
    Url.getByLink(req.params.link, req, res);
}

exports.create = function(req, res) {
    const newUrl = {
        link: req.body.link,
        description: req.body.description,
    }
    Url.create(newUrl, req, res)
}

exports.update = function(req, res) {
    var id = req.params.id;
    var data = req.body;
    Url.update(id, data, req, res)
}
exports.delete = function(req, res) {
    var id = req.params.id;
    Url.remove(id, req, res)
}