const db = require('../models/index');
var bcrypt = require('bcrypt');

const Account = function(account) {
    this.id = account.id;
    this.username = account.username;
    this.password = account.password;
    this.role = account.role;
}

Account.getAll = async function(result) {
    // db.query("select * from account", function(err, data) {
    //     if (err) {
    //         result(null);
    //     } else {
    //         result(data);
    //     }
    // })

    // let data = [];
    // data = await db.Account.findAll();
    // result(data);

    let data = [];
    // data = await db.Account.findAll({
    //     include: [{
    //         model: db.User,
    //         through: {
    //             model: db.Form_User
    //         },
    //         include: [{
    //             model: db.Form,
    //             through: {
    //                 model: db.Form_User_Detail,
    //             },
    //         }, ],
    //     }, ],
    // });
    data = await db.Account.findAll({
        include: [{
            model: db.User,
            include: [{
                model: db.Form,
                inculde: [{
                    model: db.Form_User,
                    through: [{
                        model: db.Form_User_Detail
                    }]
                }],
            }, ],
        }, ],
    });
    result(data);
}

Account.getById = async function(id, result) {
    // db.query("select * from account where id = ?", id, function(err, data) {
    //     if (err || data.length == 0) {
    //         result(null);
    //     } else {
    //         result(data[0]);
    //     }
    // })
    let data = await db.Account.findByPk(id);
    if (!data) {
        result(null);
    } else {
        result(data);
    }
}

Account.getByUsername = async function(username, password, result) {
    // db.query("select * from account where username = ?", username, async function(err, data) {
    //     if (err || data.length == 0) {
    //         result(null);
    //     } else {
    //         await bcrypt.compare(password, data[0].password, async function(err, isMatch) {
    //             if (err) {
    //                 // Xử lý lỗi
    //                 console.error('Lỗi kiểm tra mật khẩu:', err);
    //                 return;
    //             }
    //             if (isMatch) {
    //                 // Mật khẩu hợp lệ
    //                 console.log('Mật khẩu đúng.');
    //             } else {
    //                 // Mật khẩu không khớp
    //                 console.log('Mật khẩu không khớp.');
    //             }
    //         });
    //         await result(data[0]);
    //     }
    // })
    let data = {};
    data = await db.Account.findOne({
        where: { username: username }
    });
    // console.log("data", data.get({ plane: true }));
    if (!data) {
        result(null);
    } else {
        await bcrypt.compare(password, data.password, async function(err, isMatch) {
            if (err) {
                // Xử lý lỗi
                console.error('Lỗi kiểm tra mật khẩu:', err);
                return;
            }
            if (isMatch) {
                // Mật khẩu hợp lệ
                console.log('Mật khẩu đúng.');
                result(data);
            } else {
                // Mật khẩu không khớp
                console.log('Mật khẩu không khớp.');
                result(null);
            }
        });
    }
}

Account.create = async function(data, result) {
    // db.query("insert into account set?", data, function(err, res) {
    //     if (err) {
    //         result(err);
    //     } else {
    //         result({ id: res.insertId, ...data });
    //     }
    // })

    try {
        await db.Account.create({
            username: data.username,
            password: data.password,
            role: data.role
        });
        result(data);
    } catch (err) {
        result(err);
    }
}

Account.resetPass = function(id, data, result) {
    // db.query("update account set password = ? where id = ?", [data.password, id], function(err, res) {
    //         if (err) {
    //             result(err);
    //         } else {
    //             result({ id: id, password: data.password });
    //         }
    //     })
    // await User.update({ lastName: "Doe" }, {
    //     where: {
    //       lastName: null
    //     }
    //   });
}

Account.remove = async function(id, result) {
    // db.query("delete from account where id = ?", id, function(err, data) {
    //     if (err) {
    //         result(err);
    //     } else {
    //         var kq = Account.getById
    //         result("Xoa du lieu account co id " + id + " thanh cong.");
    //     }
    // })
    let data = await db.Account.findByPk(id);
    if (!data) {
        result("Account khong ton tai");
    } else {
        await db.Account.destroy({
            where: {
                id: id
            }
        });
        result("Xoa du lieu account co id " + id + " thanh cong.");
    }
}

module.exports = Account;