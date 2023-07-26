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
    //         var _token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJBZG1pbiIsImVtYWlsIjoiYUBnbWFpbC5jb20ifSwiaWF0IjoxNjg5NzQzMzE3LCJleHAiOjE2ODk3NDY5MTd9.NVZieZNmKXy2I9f-E2Gg_oBFAq2OAq7KhC6eYOclBK4";
    //         const data = await jwt.check(_token);
    //         res.send({ data: data });
    //     } catch (err) {
    //         res.send({ data: "Token khong hop le" });
    //     }
    // });
};