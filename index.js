var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
const _authMiddleware = require('./app/common/_authMiddleware');
const PORT = process.env.PORT || 3000;
const db = require("./app/models/index")

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));

// db.sequelize.sync({ alter: true })
//     .then(() => {
//         console.log("Synced db.");
//     })
//     .catch((err) => {
//         console.log("Failed to sync db: " + err.message);
//     });

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'API Documentation',
            version: '1.0.0',
        },
    },
    apis: ['./app/swagger/*.js'],
};
const swaggerSpec = swaggerJSDoc(swaggerOptions);
const swaggerUi = require('swagger-ui-express');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


require('./app/routers/login.router')(app);
// app.use(_authMiddleware.isAuth);
require('./app/routers/user.router')(app);
require('./app/routers/category.router')(app);
require('./app/routers/account.router')(app);
require('./app/routers/form.router')(app);
require('./app/routers/userForm.router')(app);
require('./app/routers/userFormDetail.router')(app);
require('./app/routers/url.router')(app);
require('./app/routers/roleUrl.router')(app);

app.listen(PORT, function() {
    console.log(`App listening on port: ${PORT}`);
})