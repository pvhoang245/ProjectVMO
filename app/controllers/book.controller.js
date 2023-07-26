var Book = require('../models/book.model');

exports.getList = function(req, res) {
    Book.getAll(function(data) {
        res.send({ result: data });
    })
}

exports.detail = function(req, res) {
    var data = Book.getById(req.params.id);
    res.send({ result: data });
}

exports.addBook = function(req, res) {
    var data = req.body;
    Book.create(data, function(response) {
        res.send({ result: response });
    })
}

exports.deleteBook = function(req, res) {
    var id = req.params.id;
    Book.remove(id, function(response) {
        res.send({ result: response });
    })
}

exports.updateBook = function(req, res) {
    var data = req.body;
    Book.update(data, function(response) {
        res.send({ result: response });
    })
}