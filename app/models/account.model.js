const db = require('../common/connect');
var bcrypt = require('bcrypt');

const Account = function(account) {
    this.id = account.id;
    this.username = account.username;
    this.password = account.password;
}

Account.getAll = function(result) {
    db.query("select * from account", function(err, data) {
        if (err) {
            result(null);
        } else {
            result(data);
        }
    })
}

Account.getById = function(id, result) {
        db.query("select * from account where id = ?", id, function(err, data) {
            if (err || data.length == 0) {
                result(null);
            } else {
                result(data[0]);
            }
        })
    }
    // ...

Account.getByUsername = function(username, password, result) {
    db.query("select * from account where username = ?", username, async function(err, data) {
        if (err || data.length == 0) {
            result(null);
        } else {
            await bcrypt.compare(password, data[0].password, async function(err, isMatch) {
                if (err) {
                    // Xử lý lỗi
                    console.error('Lỗi kiểm tra mật khẩu:', err);
                    return;
                }
                if (isMatch) {
                    // Mật khẩu hợp lệ
                    console.log('Mật khẩu đúng.');
                } else {
                    // Mật khẩu không khớp
                    console.log('Mật khẩu không khớp.');
                }
            });
            await result(data[0]);
        }
    })
}

Account.create = function(data, result) {
    db.query("insert into account set?", data, function(err, res) {
        if (err) {
            result(err);
        } else {
            result({ id: res.insertId, ...data });
        }
    })
}

Account.resetPass = function(id, data, result) {
    db.query("update account set password = ? where id = ?", [data.password, id], function(err, res) {
        if (err) {
            result(err);
        } else {
            result({ id: id, password: data.password });
        }
    })
}

Account.remove = function(id, result) {
    db.query("delete from account where id = ?", id, function(err, data) {
        if (err) {
            result(err);
        } else {
            var kq = Account.getById
            result("Xoa du lieu account co id " + id + " thanh cong.");
        }
    })
}

module.exports = Account;