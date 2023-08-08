const db = require('../models/index');
const Category = function(category) {
    this.id = category.id;
    this.name = category.name;
}

Category.getAll = async function(result) {
    // db.query("select * from form_category", function(err, user) {
    //     if (err) {
    //         result(null);
    //     } else {
    //         result(user);
    //     }
    // })


    // let data = [];
    // data = await db.Category.findAll();
    // result(data);

    let data = [];
    data = await db.Category.findAll({
        include: {
            model: db.Form,
            where: {
                categoryId: 1
            }
        }
    });
    result(data);
}

Category.getById = async function(id, result) {
    // db.query("select * from form_category where id = ?", id, function(err, data) {
    //     if (err || data.length == 0) {
    //         result(null);
    //     } else {
    //         result(data[0]);
    //     }
    // })
    let data = {};
    data = await db.Category.findOne({ where: { id: id } });
    result(data);
}

Category.create = async function(data, result) {
    // db.query("INSERT INTO form_category SET ?", data, function(err, res) {
    //     if (err) {
    //         result(err);
    //     } else {
    //         result({ id: res.insertId, ...data })
    //     }
    // })
    try {
        await db.Category.create({
            name: data.name
        });
        result(data)
    } catch (error) {
        result(error)
    }
}

Category.update = async function(id, data, result) {
    // Category.getById(id, function(check) {
    //     if (check === null) {
    //         result("Loại form này không tồn tại");
    //     } else {
    //         db.query("update form_category set name=? where id = ?", [data.name, id], function(err, res) {
    //             if (err) {
    //                 result(err);
    //             } else {
    //                 result({ id: id, ...data });
    //             }
    //         })
    //     }
    // });
    let dataFind = await db.Category.findByPk(id);
    if (!dataFind) {
        result("Category khong ton tai");
    } else {
        await db.Category.update({
            name: data.name
        }, {
            where: {
                id: id
            }
        });
        result(data);
    }

}

Category.remove = async function(id, result) {
    // Category.getById(id, function(check) {
    //     if (check === null) {
    //         result("Loại form này không tồn tại");
    //     } else {
    //         db.query("delete from form_category where id = ?", id, function(err, data) {
    //             if (err) {
    //                 result(err);
    //             } else {
    //                 result("Xoa du lieu form_category co id " + id + " thanh cong.");
    //             }
    //         })
    //     }
    // });
    let data = await db.Category.findByPk(id);
    if (!data) {
        result("Category khong ton tai");
    } else {
        await db.Category.destroy({
            where: {
                id: id
            }
        });
        result("Xoa du lieu category co id " + id + " thanh cong.");
    }
}

module.exports = Category;