const _authMiddleware = require('../common/_authMiddleware');
module.exports = function(router) {
    var userFormDetailController = require('../controllers/userFormDetail.controller');
    router.get("/userFormDetail/list", userFormDetailController.getAll);
    router.get("/userFormDetail/getById/:id", userFormDetailController.getById);
    router.get("/userFormDetail/getByUserFormId/:id", userFormDetailController.getByUserFormId);
    router.post("/userFormDetail/create", userFormDetailController.create);
    router.put("/userFormDetail/update/:id", userFormDetailController.update);
    router.delete("/userFormDetail/remove/:id", userFormDetailController.delete);
}