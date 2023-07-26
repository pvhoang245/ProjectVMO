const db = require('../common/connect');
const User = function(user) {
    this.id = user.id;
    this.name = user.name;
    this.birthday = user.birthday;
    this.address = user.address;
    this.image = user.image;
    this.role = user.role;
    this.bhxh = user.bhxh;
    this.phone = user.phone;
    this.email = user.email;
    this.accountId = user.accountId;
    this.managerId = user.managerId;
}

User.getAll = function(result) {
    db.query("select * from user", function(err, data) {
        if (err) {
            result(null);
        } else {
            result(data);
        }
    })
}

User.getById = function(id, result) {
    db.query("select * from user where id = ?", id, function(err, data) {
        if (err || data.length == 0) {
            result(null);
        } else {
            result(data[0]);
        }
    })
}

User.getByName = function(username, result) {
    db.query("select * from user where username like ?", username, function(err, data) {
        if (err || data.length == 0) {
            result(null);
        } else {
            result(data[0]);
        }
    })
}

User.create = function(data, result) {
    db.query("insert into user set?", data, function(err, res) {
        if (err) {
            result(err);
        } else {
            result({ id: res.insertId, ...data });
        }
    })
}

User.update = function(id, data, result) {
    db.query("update user set name=?, birthday=?, address=?, image=?, role=?, bhxh=?, phone=?, email=?, accountId=?, managerId=? where id = ?", [data.name, data.birthday, data.address, data.image, data.role, data.bhxh, data.phone, data.email, data.accountId, data.managerId, id], function(err, res) {
        if (err) {
            result(err);
        } else {
            result({ id: id, ...data });
        }
    })
}

User.remove = function(id, result) {
    db.query("delete from user where id = ?", id, function(err, data) {
        if (err) {
            result(err);
        } else {
            var kq = User.getById
            result("Xoa du lieu user co id " + id + " thanh cong.");
        }
    })
}

module.exports = User;










// const db = require('../common/connect');
// const User = function(user) {
//     this.id = user.id;
//     this.username = user.username;
//     this.password = user.password;
//     this.email = user.email;
// }

// User.getAll = function(result) {
//     db.query("select * from user", function(err, user) {
//         if (err) {
//             result(null);
//         } else {
//             result(user);
//         }
//     })
// }

// User.create = function(data, result) {
//     db.query("INSERT INTO user SET ?", data, function(err, res) {
//         if (err) {
//             result(err);
//         } else {
//             result({ id: res.insertId, ...data })
//         }
//     })
// }

// module.exports = User;