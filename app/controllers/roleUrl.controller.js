var RoleUrl = require('../service/roleUrl.service');
const db = require('../models/index');

exports.getList = function(req, res) {
    RoleUrl.getAll(req, res);
}

exports.getById = function(req, res) {
    var id = req.params.id;
    RoleUrl.getById(id, req, res);
}

exports.getByRole = function(req, res) {
    var role = req.params.role;
    RoleUrl.getByRole(role, req, res);
}

exports.getByUrl = function(req, res) {
    var url = req.body.link;
    RoleUrl.getByUrl(url, req, res);
}

exports.getByRoleUrl = function(req, res) {
    var data = req.body;
    RoleUrl.getByRoleUrl(data.role, data.link, req, res);
}

exports.create = async function(req, res) {
    try {
        let inputData = req.body;
        let data = await db.role_url.findOne({
            include: [{
                model: db.role,
                where: { name: inputData.role }
            }, {
                model: db.url,
                where: { link: inputData.link }
            }]
        });
        if (!data) {
            let role = await db.role.findOne({ where: { name: inputData.role } });
            if (!role) {
                res.status(404).send({ Error: "Not found role" });
                return;
            };
            let url = await db.url.findOne({ where: { link: inputData.link } });
            if (!url) {
                res.status(404).send({ Error: "Not found url" });
                return;
            };
            const newRoleUrl = {
                roleId: role.id,
                urlId: url.id
            }
            RoleUrl.create(newRoleUrl, req, res)
        } else {
            res.status(400).send({ Error: "Existed" });
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.delete = function(req, res) {
    var id = req.params.id;
    RoleUrl.remove(id, req, res)
}