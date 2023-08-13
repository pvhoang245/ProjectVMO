const _authMiddleware = require("../common/_authMiddleware");
module.exports = function(router) {
    var accountController = require('../controllers/account.controller');
    //ad
    router.get("/account/list", _authMiddleware.checkPermission("/account/list"), accountController.getAll);
    //ad
    router.get("/account/getById/:id", _authMiddleware.checkPermission("/account/getById"), accountController.getById);
    //ad
    router.get("/account/getByUsername/:username", _authMiddleware.checkPermission("/account/getByUsername"), accountController.getByUsername);
    //ad
    router.post("/account/create", _authMiddleware.checkPermission("/account/create"), accountController.create);
    // ALL
    router.put("/account/changePassword/:id", accountController.changePassword);
    //ad
    router.delete("/account/removeById/:id", _authMiddleware.checkPermission("/account/removeById"), accountController.deleteById);
    //ad
    router.delete("/account/removeByUsername/:username", _authMiddleware.checkPermission("/account/removeByUsername"), accountController.deleteByUsername);
}