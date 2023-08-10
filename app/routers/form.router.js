module.exports = function(router) {
    var formController = require('../controllers/form.controller');

    router.get("/form/list", formController.getAll);
    router.get("/form/getById/:id", formController.getById);
    //router.get("/form/getByYear", formController.getByYear);
    router.get("/form/getByCategoryId/:id", formController.getByCategoryId);
    router.post("/form/create", formController.create);
    router.put("/form/update/:id", formController.update);
    router.delete("/form/remove/:id", formController.delete);
}