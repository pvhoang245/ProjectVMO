var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
const _authMiddleware = require('./app/common/_authMiddleware');
const PORT = process.env.PORT || 3000;
var connection = require('./app/config/connect');
const sequelize = require('sequelize')
const db = require("./app/models/index")

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));
connection();
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });

require('./app/routers/home.router')(app);
// app.use(_authMiddleware.isAuth);
require('./app/routers/user.router')(app);
require('./app/routers/formCategory.router')(app);
require('./app/routers/account.router')(app);
require('./app/routers/form.router')(app);
require('./app/routers/userForm.router')(app);

app.listen(PORT, function() {
    console.log(`App listening on port: ${PORT}`);
})