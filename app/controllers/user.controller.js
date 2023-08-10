var User = require('../service/user.service');
const db = require('../models/index');

exports.getAll = async function(req, res) {
    var jwt = require("../common/jwt");
    try {
        const decode = await jwt.decode(req.cookies.token);
        id = await decode.data.id;
        console.log(id)
        let data = await db.user.findOne({
            where: {
                accountId: id
            }
        });
        data = await data.get();

        let roleId = await data.roleId;
        let role = await db.role.findOne({ where: { id: roleId } })
        role = await role.get();
        User.getAll(data.id, role.name, req, res);
    } catch (error) {
        res.send(error);
    }
}

exports.getById = async function(req, res) {
    var id = req.params.id;
    var jwt = require("../common/jwt");
    try {
        const decode = await jwt.decode(req.cookies.token);
        id = await decode.data.id;
        console.log(id)
        let data = await db.user.findOne({
            where: {
                accountId: id
            }
        });
        data = await data.get();

        let roleId = await data.roleId;
        let role = await db.role.findOne({ where: { id: roleId } })
        role = await role.get();
        User.getById(id, role.name, req, res);
    } catch (error) {
        res.send(error);
    }
}

exports.getByName = function(req, res) {
    User.getByName(req.body.name, req, res);
}

exports.create = async function(req, res) {
    try {
        let data = await req.body;
        let role = await db.role.findOne({
            where: { id: data.roleId }
        });
        role = await role.get();
        if (role.name == "admin") {
            res.status(403).send({ Error: "Access denied" });
        } else {
            User.create(data, req, res);
        }
    } catch (error) {
        res.status(500).send({
            Error: error
        });
    }
}

exports.update = async function(req, res) {
    var id = await req.params.id;
    let data = req.body;
    User.update(id, data, req, res);
}
exports.delete = function(req, res) {
    var id = req.params.id;
    User.remove(id, req, res);
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