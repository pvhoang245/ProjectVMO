const db = require('../models/index');
const { Op } = require('sequelize')
const User = function(user) {
    this.id = user.id;
    this.name = user.name;
    this.birthday = user.birthday;
    this.address = user.address;
    this.image = user.image;
    this.roleId = user.roleId;
    this.bhxh = user.bhxh;
    this.phone = user.phone;
    this.email = user.email;
    this.accountId = user.accountId;
    this.managerId = user.managerId;
    this.sex = user.sex;
}

User.getAll = async function(result) {
    // db.query("select * from user", function(err, data) {
    //     if (err) {
    //         result(null);
    //     } else {
    //         result(data);
    //     }
    // })
    let data = [];
    data = await db.User.findAll();
    result(data);
}

User.getById = async function(id, result) {
    // db.query("select * from user where id = ?", id, function(err, data) {
    //     if (err || data.length == 0) {
    //         result(null);
    //     } else {
    //         result(data[0]);
    //     }
    // })
    let data = {};
    data = await db.User.findByPk(id);
    result(data);
}

User.getByName = async function(name, result) {
    // db.query("select * from user where username like ?", username, function(err, data) {
    //     if (err || data.length == 0) {
    //         result(null);
    //     } else {
    //         result(data[0]);
    //     }
    // })
    let data = {};
    data = await db.User.findAll({
        where: {
            name: {
                [Op.substring]: name
            }
        }
    });
    result(data);
}

User.create = async function(data, result) {
    // db.query("insert into user set?", data, function(err, res) {
    //     if (err) {
    //         result(err);
    //     } else {
    //         result({ id: res.insertId, ...data });
    //     }
    // })
    try {
        await db.User.create({
            name: data.name,
            birthday: data.birthday,
            address: data.address,
            image: data.image,
            roleId: data.roleId,
            bhxh: data.bhxh,
            phone: data.phone,
            email: data.email,
            accountId: data.accountId,
            managerId: data.managerId,
            sex: data.sex
        });
        result(data);
    } catch (err) {
        result(err);
    }
}

User.update = async function(id, data, result) {
    // db.query("update user set name=?, birthday=?, address=?, image=?, roleId=?, bhxh=?, phone=?, email=?, accountId=?, managerId=? where id = ?", [data.name, data.birthday, data.address, data.image, data.roleId, data.bhxh, data.phone, data.email, data.accountId, data.managerId, id], function(err, res) {
    //     if (err) {
    //         result(err);
    //     } else {
    //         result({ id: id, ...data });
    //     }
    // })
    let dataFind = await db.User.findByPk(id);
    if (!dataFind) {
        result("User khong ton tai");
    } else {
        await db.User.update({
            name: data.name,
            birthday: data.birthday,
            address: data.address,
            image: data.image,
            roleId: data.roleId,
            bhxh: data.bhxh,
            phone: data.phone,
            email: data.email,
            accountId: data.accountId,
            managerId: data.managerId,
            sex: data.sex
        }, {
            where: {
                id: id
            }
        });
        result(data);
    }
}

User.remove = async function(id, result) {
    // db.query("delete from user where id = ?", id, function(err, data) {
    //     if (err) {
    //         result(err);
    //     } else {
    //         var kq = User.getById
    //         result("Xoa du lieu user co id " + id + " thanh cong.");
    //     }
    // })
    let data = await db.User.findByPk(id);
    if (!data) {
        result("User khong ton tai");
    } else {
        await db.User.destroy({
            where: {
                id: id
            }
        });
        result("Xoa du lieu user co id " + id + " thanh cong.");
    }
}

module.exports = User;

// "name": "name",
// "birthday": "birthday",
// "address": "address",
// "image": "image",
// "roleId": "roleId",
// "bhxh": "bhxh",
// "phone": "phone",
// "email": "email",
// "accountId": "accountId",
// "managerId": "managerId"