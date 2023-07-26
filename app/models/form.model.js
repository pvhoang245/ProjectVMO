const db = require('../common/connect');

const Form = function(form) {
    this.id = form.id;
    this.year = form.year;
    this.name = form.name;
    this.description = form.description;
    this.link = form.link;
    this.categoryId = form.categoryId;
    this.duedate = form.duedate;
}

Form.getAll = function(result) {
    db.query("select * from form", function(err, data) {
        if (err) {
            result(null);
        } else {
            result(data);
        }
    })
}

Form.getById = function(id, result) {
    db.query("select * from form where id = ?", id, function(err, data) {
        if (err || data.length == 0) {
            result(null);
        } else {
            result(data[0]);
        }
    })
}

Form.getByYear = function(year, result) {
    db.query("select * from form where year = ?", year, function(err, data) {
        if (err || data.length == 0) {
            result(null);
        } else {
            result(data);
        }
    })
}

Form.getByCategory = function(id, result) {
    db.query("select * from form where categoryId = ?", id, function(err, data) {
        if (err || data.length == 0) {
            result(null);
        } else {
            result(data);
        }
    })
}

Form.createForm = function(data, result) {
    db.query("insert into form set?", data, function(err, res) {
        if (err) {
            result(err);
        } else {
            result({ id: res.insertId, ...data });
        }
    })
}

Form.updateForm = function(id, data, result) {
    db.query("update form set name = ?, year = ?, duedate = ?,  description = ?, link = ?, categoryId = ? where id = ?", [data.name, data.year, data.duedate, data.description, data.link, data.categoryId, id], function(err, res) {
        if (err) {
            result(err);
        } else {
            result({ id: id, ...data });
        }
    })
}

Form.removeForm = function(id, result) {
    db.query("delete from form where id = ?", id, function(err, data) {
        if (err) {
            result(err);
        } else {
            var kq = Form.getById
            result("Xoa du lieu form co id " + id + " thanh cong.");
        }
    })
}

module.exports = Form;