module.exports = function(router) {
    var bookController = require('../controllers/book.controller')

    router.get("/book/list", bookController.getList);
    router.get("/book/detail/:id", bookController.detail);
    router.post("/book/add", bookController.addBook);
    router.delete("/book/delete/:id", bookController.deleteBook);
    router.put("/book/update/:id", bookController.updateBook);
};