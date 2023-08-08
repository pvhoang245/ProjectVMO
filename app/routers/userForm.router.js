const _authMiddleware = require('../common/_authMiddleware');
module.exports = function(router) {
    var userFormController = require('../controllers/userForm.controller');
    // router.use("/userForm", _authMiddleware.checkPermission());
    router.get("/userForm/list", _authMiddleware.checkPermission("/userForm/list"), userFormController.getAll);
    router.get("/userForm/getById/:id", userFormController.getById);
    router.get("/userForm/getByFormId/:id", userFormController.getByFormId);
    router.get("/userForm/getByUserId/:id", userFormController.getByUserId);
    router.post("/userForm/create", userFormController.create);
    router.put("/userForm/update/:id", userFormController.update);
    router.delete("/userForm/remove/:id", userFormController.delete);
}