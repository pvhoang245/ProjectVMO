const _authMiddleware = require("../common/_authMiddleware");
module.exports = function(router) {
    var urlController = require('../controllers/url.controller')
        //ad
    router.get("/url/list", _authMiddleware.checkPermission("/url/list"), urlController.getList);
    router.get("/url/getById/:id", _authMiddleware.checkPermission("/url/getById"), urlController.getById);
    router.post("/url/getByLink", _authMiddleware.checkPermission("/url/getByLink"), urlController.getByLink);
    router.post("/url/create", _authMiddleware.checkPermission("/url/create"), urlController.create);
    router.put("/url/update/:id", _authMiddleware.checkPermission("/url/update"), urlController.update);
    router.delete("/url/delete/:id", _authMiddleware.checkPermission("/url/delete"), urlController.delete);
};