const db = require('../models/index');
const sequelize = require('sequelize')

const Form = function(form) {
    this.id = form.id;
    this.name = form.name;
    this.description = form.description;
    this.date = form.date;
    this.categoryId = form.categoryId;
    this.duedate = form.duedate;
}

Form.getAll = async function(result) {
    // db.query("select * from form", function(err, data) {
    //     if (err) {
    //         result(null);
    //     } else {
    //         result(data);
    //     }
    // })
    let data = [];
    data = await db.Form.findAll();
    result(data);

}

Form.getById = async function(id, result) {
    // db.query("select * from form where id = ?", id, function(err, data) {
    //     if (err || data.length == 0) {
    //         result(null);
    //     } else {
    //         result(data[0]);
    //     }
    // })
    let data = {};
    data = await db.Form.findOne({ where: { id: id } });
    result(data);
}

Form.getByYear = async function(year, result) {
    // db.query("select * from form where year = ?", year, function(err, data) {
    //     if (err || data.length == 0) {
    //         result(null);
    //     } else {
    //         result(data);
    //     }
    // })
    let data = [];
    data = await db.Form.findAll({
        where: sequelize.where(sequelize.fn('YEAR', sequelize.col('date')), year)
    })
    result(data);
}

Form.getByCategory = async function(id, result) {
    // db.query("select * from form where categoryId = ?", id, function(err, data) {
    //     if (err || data.length == 0) {
    //         result(null);
    //     } else {
    //         result(data);
    //     }
    // })
    let data = [];
    data = await db.Form.findAll({ where: { categoryId: id } });
    result(data);
}

Form.createForm = async function(data, result) {
    // db.query("insert into form set?", data, function(err, res) {
    //     if (err) {
    //         result(err);
    //     } else {
    //         result({ id: res.insertId, ...data });
    //     }
    // })
    try {
        await db.Form.create({
            name: data.name,
            description: data.description,
            date: data.date,
            categoryId: data.categoryId,
            duedate: data.duedate
        });
        result(data);
    } catch (err) {
        result(err);
    }
}

Form.updateForm = async function(id, data, result) {
    // db.query("update form set name = ?, year = ?, duedate = ?,  description = ?, link = ?, categoryId = ? where id = ?", [data.name, data.year, data.duedate, data.description, data.link, data.categoryId, id], function(err, res) {
    //     if (err) {
    //         result(err);
    //     } else {
    //         result({ id: id, ...data });
    //     }
    // })
    let dataFind = await db.Form.findByPk(id);
    if (!dataFind) {
        result("Form khong ton tai");
    } else {
        await db.Form.update({
            name: data.name,
            description: data.description,
            date: data.date,
            categoryId: data.categoryId,
            duedate: data.duedate
        }, {
            where: {
                id: id
            }
        });
        result(data);
    }
}

Form.removeForm = async function(id, result) {
    //     db.query("delete from form where id = ?", id, function(err, data) {
    //         if (err) {
    //             result(err);
    //         } else {
    //             var kq = Form.getById
    //             result("Xoa du lieu form co id " + id + " thanh cong.");
    //         }
    //     })
    let data = await db.Form.findByPk(id);
    if (!data) {
        result("Form khong ton tai");
    } else {
        await db.Form.destroy({
            where: {
                id: id
            }
        });
        result("Xoa du lieu form co id " + id + " thanh cong.");
    }
}

module.exports = Form;