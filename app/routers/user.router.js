module.exports = function(router) {
    var userController = require('../controllers/user.controller');

    router.get("/user/list", userController.getAll);
    router.get("/user/getById/:id", userController.getById);
    router.get("/user/getByName", userController.getByName);
    router.post("/user/create", userController.create);
    router.put("/user/update/:id", userController.update);
    router.delete("/user/remove/:id", userController.delete);
}




// module.exports = function(router) {
//     var userController = require('../controllers/user.controller')

//     router.get("/user/list", userController.getList);
//     router.post("/user/register", userController.createUser);
// };