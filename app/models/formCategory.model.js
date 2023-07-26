const db = require('../common/connect');
const Category = function(category) {
    this.id = category.id;
    this.name = category.name;
}

Category.getAll = function(result) {
    db.query("select * from form_category", function(err, user) {
        if (err) {
            result(null);
        } else {
            result(user);
        }
    })
}

Category.getById = function(id, result) {
    db.query("select * from form_category where id = ?", id, function(err, data) {
        if (err || data.length == 0) {
            result(null);
        } else {
            result(data[0]);
        }
    })
}

Category.create = function(data, result) {
    db.query("INSERT INTO form_category SET ?", data, function(err, res) {
        if (err) {
            result(err);
        } else {
            result({ id: res.insertId, ...data })
        }
    })
}

Category.update = function(id, data, result) {
    Category.getById(id, function(check) {
        if (check === null) {
            result("Loại form này không tồn tại");
        } else {
            db.query("update form_category set name=? where id = ?", [data.name, id], function(err, res) {
                if (err) {
                    result(err);
                } else {
                    result({ id: id, ...data });
                }
            })
        }
    });
}

Category.remove = function(id, result) {
    Category.getById(id, function(check) {
        if (check === null) {
            result("Loại form này không tồn tại");
        } else {
            db.query("delete from form_category where id = ?", id, function(err, data) {
                if (err) {
                    result(err);
                } else {
                    result("Xoa du lieu form_category co id " + id + " thanh cong.");
                }
            })
        }
    });
}

module.exports = Category;