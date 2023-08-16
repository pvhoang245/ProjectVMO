const _authMiddleware = require("../common/_authMiddleware");
module.exports = function(router) {
    var roleUrlController = require('../controllers/roleUrl.controller')
        //ad
    router.get("/roleUrl/list", _authMiddleware.checkPermission("/roleUrl/list"), roleUrlController.getList);
    //ad
    router.get("/roleUrl/getById/:id", _authMiddleware.checkPermission("/roleUrl/getById"), roleUrlController.getById);
    //ad
    router.get("/roleUrl/getByRole/:role", _authMiddleware.checkPermission("/roleUrl/getByRole"), roleUrlController.getByRole);
    //ad
    router.get("/roleUrl/getByUrl/:link", _authMiddleware.checkPermission("/roleUrl/getByUrl"), roleUrlController.getByUrl);
    //ad
    router.get("/roleUrl/getByRoleUrl/:role/:link", _authMiddleware.checkPermission("/roleUrl/getByRoleUrl"), roleUrlController.getByRoleUrl);
    //ad
    router.post("/roleUrl/create", _authMiddleware.checkPermission("/roleUrl/create"), roleUrlController.create);
    //ad
    router.delete("/roleUrl/delete/:id", _authMiddleware.checkPermission("/roleUrl/delete"), roleUrlController.delete);
};