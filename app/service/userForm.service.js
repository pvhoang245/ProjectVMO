const db = require('../models/index');

exports.getAll = async function(result) {
    await db.form_user.findAll()
        .then(data => {
            result(data);
        })
        .catch(err => {
            result(err)
        });
}

exports.getById = async function(id, result) {
    await db.form_user.findOne({ where: { id: id } })
        .then(data => {
            result(data);
        })
        .catch(err => {
            result(err)
        });
}

exports.getByFormId = async function(id, result) {
    await db.form_user.findAll({ where: { formId: id } })
        .then(data => {
            result(data);
        })
        .catch(err => {
            result(err)
        });
}

exports.getByUserId = async function(id, result) {
    await db.form_user.findAll({ where: { userId: id } })
        .then(data => {
            result(data);
        })
        .catch(err => {
            result(err)
        });
}

exports.create = async function(data, result) {
    try {
        await db.form_user.create({
            status: data.status,
            formId: data.formId,
            userId: data.userId
        });
        result(data);
    } catch (err) {
        result(err);
    }
}

exports.update = async function(id, data, result) {
    let dataFind = await db.form_user.findByPk(id);
    if (!dataFind) {
        result("form_user khong ton tai");
    } else {
        await db.form_user.update({
            status: data.status,
            managerCmt: data.managerCmt,
            userCmt: data.userCmt
        }, {
            where: {
                id: id
            }
        });
        result(data);
    }
}

exports.remove = async function(id, result) {
    try {
        let data = await db.form_user.findByPk(id);
        if (!data) {
            result("form_user khong ton tai");
        } else {
            await db.form_user.destroy({
                where: {
                    id: id
                }
            });
            result("Xoa du lieu form_user co id " + id + " thanh cong.");
        }
    } catch (error) {
        result(error)
    }
}