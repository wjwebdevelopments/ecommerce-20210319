const dotenv = require('dotenv');
const errorhandler = require('errorhandler');
const morgan = require('morgan');
const express = require('express');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../config/config.env') });
const api = process.env.API_URL;

module.exports = app => {

    app.set('port', process.env.PORT);
    app.set('env', process.env.NODE_ENV);

    // Middlewares
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());

    // Development mode
    if (app.get('env') === 'development') {
        app.use(morgan('dev'));
        app.use(errorhandler());
    }  
    
    app.get(`${api}/products`, (req, res) => {
        const product = {
            id: 1,
            name: 'televisor lcd 40\"',
            image: 'some_image.png'
        }
        res.send(product);
    });

    return app;
}