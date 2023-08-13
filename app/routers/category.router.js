const _authMiddleware = require("../common/_authMiddleware");
module.exports = function(router) {
    var categoryController = require('../controllers/category.controller')
        //ad, hr, dr
    router.get("/category/list", _authMiddleware.checkPermission("/category/list"), categoryController.getList);
    //ad, hr, dr
    router.get("/category/getById/:id", _authMiddleware.checkPermission("/category/getById"), categoryController.getById);
    //ad
    router.post("/category/create", _authMiddleware.checkPermission("/category/create"), categoryController.create);
    //ad
    router.put("/category/update/:id", _authMiddleware.checkPermission("/category/update"), categoryController.update);
    //ad
    router.delete("/category/delete/:id", _authMiddleware.checkPermission("/category/delete"), categoryController.delete);
};