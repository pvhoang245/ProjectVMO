const _authMiddleware = require("../common/_authMiddleware");
module.exports = function(router) {
    var userController = require('../controllers/user.controller');
    //ad, hr, dr
    router.get("/user/list", _authMiddleware.checkPermission("/user/list"), userController.getAll);
    //ad, hr, dr
    router.get("/user/getById/:id", _authMiddleware.checkPermission("/user/getById"), userController.getById);
    //ad, hr, dr
    router.get("/user/getByName/:name", _authMiddleware.checkPermission("/user/getByName"), userController.getByName);
    //ad
    router.post("/user/create", _authMiddleware.checkPermission("/user/create"), userController.create);
    //ALL
    router.put("/user/update/:id", userController.update);
    //ad
    router.delete("/user/remove/:id", _authMiddleware.checkPermission("/user/remove"), userController.delete);
}