module.exports = function(router) {
    var accountController = require('../controllers/account.controller');

    router.get("/account/list", accountController.getAll);
    router.get("/account/getById/:id", accountController.getById);
    router.get("/account/getByUsername", accountController.getByUsername);
    // router.get("/account/forgetPassword", accountController.forgetPassword);
    router.post("/account/create", accountController.createAccount);
    router.put("/account/resetPassword/:id", accountController.resetPassword);
    router.delete("/account/remove/:id", accountController.deleteAccount);
}