const db = require('../models/index');

exports.getAll = async function(result) {
    await db.form_user_detail.findAll()
        .then(data => {
            result(data);
        })
        .catch(err => {
            result(err)
        });
}

exports.getById = async function(id, result) {
    await db.form_user_detail.findOne({ where: { id: id } })
        .then(data => {
            result(data);
        })
        .catch(err => {
            result(err)
        });
}

exports.getByUserFormId = async function(id, result) {
    await db.form_user_detail.findAll({ where: { formUserId: id } })
        .then(data => {
            result(data);
        })
        .catch(err => {
            result(err)
        });
}

exports.create = async function(data, result) {
    try {
        await db.form_user_detail.create({
            description: data.description,
            score: data.score,
            formUserId: data.formUserId
        });
        result(data);
    } catch (err) {
        result(err);
    }
}

exports.update = async function(id, data, result) {
    let dataFind = await db.form_user_detail.findByPk(id);
    if (!dataFind) {
        result("form_user_detail khong ton tai");
    } else {
        await db.form_user_detail.update({
            description: data.description,
            score: data.score,
            formUserId: data.formUserId
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
        let data = await db.form_user_detail.findByPk(id);
        if (!data) {
            result("form_user_detail khong ton tai");
        } else {
            await db.form_user_detail.destroy({
                where: {
                    id: id
                }
            });
            result("Xoa du lieu form_user_detail co id " + id + " thanh cong.");
        }
    } catch (error) {
        result(error)
    }
}