module.exports = function(router) {
    var categoryController = require('../controllers/category.controller')

    router.get("/category/list", categoryController.getList);
    router.get("/category/getById/:id", categoryController.getById);
    router.post("/category/create", categoryController.create);
    router.put("/category/update/:id", categoryController.update);
    router.delete("/category/delete/:id", categoryController.delete);
};