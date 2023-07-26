module.exports = function(router) {
    var formController = require('../controllers/form.controller');

    router.get("/form/list", formController.getAll);
    router.get("/form/getById/:id", formController.getById);
    router.get("/form/getByYear", formController.getByYear);
    router.get("/form/getByCategory/:id", formController.getByCategory);
    router.post("/form/create", formController.createForm);
    router.put("/form/update/:id", formController.updateForm);
    router.delete("/form/remove/:id", formController.deleteForm);
}