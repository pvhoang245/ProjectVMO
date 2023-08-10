const _authMiddleware = require("../common/_authMiddleware")
module.exports = function(router) {
    var accountController = require('../controllers/account.controller');

    router.get("/account/list", accountController.getAll);

    router.get("/account/getById/:id", accountController.getById);

    router.get("/account/getByUsername/:username", accountController.getByUsername);

    // router.get("/account/forgetPassword/:username", accountController.forgetPassword);
    router.post("/account/create", accountController.create);

    router.put("/account/changePassword/:id", accountController.changePassword);

    router.delete("/account/removeById/:id", accountController.deleteById);

    router.delete("/account/removeByUsername/:username", accountController.deleteByUsername);
}