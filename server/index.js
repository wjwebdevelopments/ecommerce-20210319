const dotenv = require('dotenv');
const errorhandler = require('errorhandler');
const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../config/config.env') });
const { api } = require('../keys');

const productsRouter = require('../routes/products');
const categoriesRouter = require('../routes/categories');
const usersRouter = require('../routes/user');

module.exports = (app) => {

    app.set('port', process.env.PORT);
    app.set('env', process.env.NODE_ENV);

    // Middlewares
    app.use(cors());
    app.options('*', cors());
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());

    // Development mode
    if (app.get('env') === 'development') {
        app.use(morgan('dev'));
        app.use(errorhandler());
    } 

    // Routers
    app.use(`${api}/products`, productsRouter);
    app.use(`${api}/categories`, categoriesRouter);
    app.use(`${api}/users`, usersRouter);

    return app;
}