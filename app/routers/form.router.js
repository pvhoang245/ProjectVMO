const _authMiddleware = require("../common/_authMiddleware");
module.exports = function(router) {
    var formController = require('../controllers/form.controller');
    //ad, hr, dr
    router.get("/form/list", _authMiddleware.checkPermission("/form/list"), formController.getAll);
    //ad, hr, dr
    router.get("/form/getById/:id", _authMiddleware.checkPermission("/form/getById"), formController.getById);
    //ad, hr, dr
    router.get("/form/getByCategoryId/:id", _authMiddleware.checkPermission("/form/getByCategoryId"), formController.getByCategoryId);
    //ad, hr, dr
    router.post("/form/create", _authMiddleware.checkPermission("/form/create"), formController.create);
    //ad, hr, dr
    router.put("/form/update/:id", _authMiddleware.checkPermission("/form/update"), formController.update);
    //ad, hr, dr
    router.delete("/form/remove/:id", _authMiddleware.checkPermission("/form/remove"), formController.delete);
}