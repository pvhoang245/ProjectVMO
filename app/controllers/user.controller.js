var User = require('../models/user.model');
var bcrypt = require('bcrypt');

exports.getAll = function(req, res) {
    User.getAll(function(data) {
        res.send({ result: data });
    })
}

exports.getById = function(req, res) {
    var id = req.params.id;
    User.getById(id, function(data) {
        res.send({ result: data });
    })
}

exports.getByName = function(req, res) {
    User.getByName(req.body.username, function(data) {
        res.send({ result: data });
    })
}

exports.create = async function(req, res) {
    try {
        User.create(data, function(response) {
            res.send({ result: response })
        })
    } catch (error) {
        res.send(error);
    }
}

exports.update = async function(req, res) {
    var id = await req.params.id;
    User.update(id, data, function(response) {
        res.send({ result: response });
    })
}
exports.delete = function(req, res) {
    var id = req.params.id;
    User.remove(id, function(response) {
        res.send({ result: response });
    })
}

















// var User = require('../models/user.model');
// const bcrypt = require('bcrypt')

// exports.getList = function(req, res) {
//     User.getAll(function(data) {
//         res.send({ result: data });
//     })
// }

// exports.createUser = async function(req, res) {
//     try {
//         const salt = await bcrypt.genSalt(10);
//         const hashed = await bcrypt.hash(req.body.password, salt);
//         const newUser = await new User({
//             username: req.body.username,
//             email: req.body.email,
//             password: hashed
//         })
//         await User.create(newUser, function(response) {
//             res.send({ result: response });
//         })

//     } catch (error) {
//         res.send(500).json(error);
//     }
// }