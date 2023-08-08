const db = require('../models/index');
const UserForm = function(userForm) {
    this.id = userForm.id;
    this.status = userForm.status;
    this.managerCmt = userForm.managerCmt;
    this.userCmt = userForm.userCmt;
    this.userId = userForm.userId;
    this.formId = userForm.formId;
}

UserForm.getAll = async function(result) {
    // db.query("select * from user_form", function(err, data) {
    //     if (err) {
    //         result(null);
    //     } else {
    //         result(data);
    //     }
    // })
    let data = [];
    data = await db.Form_User_Detail.findAll({});
    result(data);
}

UserForm.getById = async function(id, result) {
    // db.query("select * from user_form where id = ?", id, function(err, data) {
    //     if (err || data.length == 0) {
    //         result(null);
    //     } else {
    //         result(data[0]);
    //     }
    // })
    let data = [];
    data = await db.Form_User.findByPk(id);
    result(data);
}

UserForm.getByFormId = async function(id, result) {
    // db.query("select * from user_form where username = ?", username, function(err, data) {
    //     if (err || data.length == 0) {
    //         result(null);
    //     } else {
    //         result(data[0]);
    //     }
    // })
    let data = {};
    data = await db.Form_User.findAll({
        where: {
            formId: id
        }
    });
    result(data);
}

UserForm.getByUserId = async function(id, result) {
    // db.query("select * from user_form where username = ?", username, function(err, data) {
    //     if (err || data.length == 0) {
    //         result(null);
    //     } else {
    //         result(data[0]);
    //     }
    // })
    let data = {};
    data = await db.Form_User.findAll({
        where: {
            userId: id
        }
    });
    result(data);
}

UserForm.create = async function(data, result) {
    // db.query("insert into user_form set?", data, function(err, res) {
    //     if (err) {
    //         result(err);
    //     } else {
    //         result({ id: res.insertId, ...data });
    //     }
    // })
}

UserForm.update = async function(id, data, result) {
    // db.query("update user_form set password = ? where id = ?", [data.password, id], function(err, res) {
    //     if (err) {
    //         result(err);
    //     } else {
    //         result({ id: id, password: data.password });
    //     }
    // })

    // let dataFind = await db.User.findByPk(id);
    // if (!dataFind) {
    //     result("User khong ton tai");
    // } else {
    //     await db.Form_User.update({
    //         status : data.status,
    //         managerCmt : data.managerCmt,
    //         userCmt : data.userCmt
    //     }, {
    //         where: {
    //             id: id
    //         }
    //     });
    //     result(data);
    // }
}

UserForm.remove = async function(id, result) {
    // db.query("delete from user_form where id = ?", id, function(err, data) {
    //     if (err) {
    //         result(err);
    //     } else {
    //         var kq = UserForm.getById
    //         result("Xoa du lieu account co id " + id + " thanh cong.");
    //     }
    // })let data = await db.User.findByPk(id);

    // if (!data) {
    //     result("User khong ton tai");
    // } else {
    //     await db.Form_User.destroy({
    //         where: {
    //             id: id
    //         }
    //     });
    //     result("Xoa du lieu user_form co id " + id + " thanh cong.");
    // }
}

module.exports = UserForm;