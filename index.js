var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
const _authMiddleware = require('./app/common/_authMiddleware');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));

require('./app/routers/home.router')(app);
app.use(_authMiddleware.isAuth);
require('./app/routers/book.router')(app);
require('./app/routers/user.router')(app);
require('./app/routers/formCategory.router')(app);
require('./app/routers/account.router')(app);

app.listen(PORT, function() {
    console.log(`App listening on port: ${PORT}`);

})