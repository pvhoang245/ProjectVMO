module.exports = function(router) {
    var homeController = require('../controllers/home.controller')
    var jwt = require("../common/jwt");

    router.get("/", homeController.home);
    router.get("/about", homeController.about);
    router.get("/token", async function(req, res) {
        var user = {
            name: "Admin",
            email: "a@gmail.com"
        };
        const _token = await jwt.make(user);
        res.send({ token: _token });
    });

    // router.get("/check_token", async function(req, res) {
    //     try {
    //         var _token = "";
    //         const data = await jwt.check(_token);
    //         res.send({ data: data });
    //     } catch (err) {
    //         res.send({ data: "Token khong hop le" });
    //     }
    // });
};