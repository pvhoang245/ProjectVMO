const db = require('../common/connect');
const Book = function(book) {
    this.id = book.id;
    this.name = book.name;
    this.email = book.email;
    this.country = book.country;
}

Book.getAll = function(result) {
    db.query("select * from users", function(err, user) {
        if (err) {
            result(null);
        } else {
            result(user);
        }
    })
}

Book.getById = function(id) {
    var data = { "id": id, "name": "Book 1" };
    return data;
}

Book.create = function(data, result) {
    result(data);
}

Book.remove = function(id, result) {
    result("Xoa thanh cong: " + id);
}

Book.update = function(data, result) {
    result(data);
}

module.exports = Book;