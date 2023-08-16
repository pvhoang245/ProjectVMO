const _authMiddleware = require('../common/_authMiddleware');
module.exports = function(router) {
    var userFormController = require('../controllers/userForm.controller');
    //ad
    router.get("/userForm/list", _authMiddleware.checkPermission("/userForm/list"), userFormController.getAll);
    //ALL
    router.get("/userForm/getById/:id", userFormController.getById);
    //ad
    router.get("/userForm/getByFormId/:formId", _authMiddleware.checkPermission("/userForm/getByFormId"), userFormController.getByFormId);
    //ALL
    router.get("/userForm/getByUserId/:userId", userFormController.getByUserId);
    //hr, dr, mn
    router.get("/userForm/getListOfManager/:formId", userFormController.getListOfManager);
    //ALL
    router.get("/userForm/getByFormIdUserId/:formId/:userId", userFormController.getByFormIdUserId);
    //ad
    router.post("/userForm/create", _authMiddleware.checkPermission("/userForm/create"), userFormController.create);
    //ALL
    router.put("/userForm/update/:id", userFormController.update);
    //ad
    router.delete("/userForm/remove/:id", _authMiddleware.checkPermission("/userForm/remove"), userFormController.delete);
}