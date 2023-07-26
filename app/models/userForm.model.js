const db = require('../common/connect');
const UserForm = function(userForm) {
    this.id = userForm.id;
    this.status = userForm.status;
    this.managerComment = userForm.managerComment;
    this.userComment = userForm.userComment;
    this.userId = userForm.userId;
    this.formId = userForm.formId;
}

UserForm.getAll = function(result) {
    db.query("select * from user_form", function(err, data) {
        if (err) {
            result(null);
        } else {
            result(data);
        }
    })
}

UserForm.getById = function(id, result) {
    db.query("select * from user_form where id = ?", id, function(err, data) {
        if (err || data.length == 0) {
            result(null);
        } else {
            result(data[0]);
        }
    })
}

UserForm.getByUsername = function(username, result) {
    db.query("select * from user_form where username = ?", username, function(err, data) {
        if (err || data.length == 0) {
            result(null);
        } else {
            result(data[0]);
        }
    })
}

UserForm.create = function(data, result) {
    db.query("insert into user_form set?", data, function(err, res) {
        if (err) {
            result(err);
        } else {
            result({ id: res.insertId, ...data });
        }
    })
}

UserForm.resetPass = function(id, data, result) {
    db.query("update user_form set password = ? where id = ?", [data.password, id], function(err, res) {
        if (err) {
            result(err);
        } else {
            result({ id: id, password: data.password });
        }
    })
}

UserForm.remove = function(id, result) {
    db.query("delete from user_form where id = ?", id, function(err, data) {
        if (err) {
            result(err);
        } else {
            var kq = UserForm.getById
            result("Xoa du lieu account co id " + id + " thanh cong.");
        }
    })
}

module.exports = UserForm;