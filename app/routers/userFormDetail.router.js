const _authMiddleware = require('../common/_authMiddleware');
module.exports = function(router) {
    var userFormDetailController = require('../controllers/userFormDetail.controller');
    //ALL
    router.get("/userFormDetail/list/:formUserId", userFormDetailController.getAll);
    router.get("/userFormDetail/getById/:id", userFormDetailController.getById);
    router.post("/userFormDetail/create", userFormDetailController.create);
    router.put("/userFormDetail/update/:id", userFormDetailController.update);
    router.delete("/userFormDetail/remove/:id", userFormDetailController.delete);
}