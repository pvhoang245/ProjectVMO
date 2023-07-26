module.exports = function(router) {
    var categoryController = require('../controllers/formCategory.controller')

    router.get("/category/list", categoryController.getList);
    router.get("/category/getOne/:id", categoryController.getOne);
    router.post("/category/create", categoryController.createCategory);
    router.put("/category/update/:id", categoryController.update);
    router.delete("/category/delete/:id", categoryController.delete);
};