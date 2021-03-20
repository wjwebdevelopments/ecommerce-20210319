const dotenv = require('dotenv');
const errorhandler = require('errorhandler');
const morgan = require('morgan');
const express = require('express');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../config/config.env') });
const api = process.env.API_URL;

const { Product } = require('../models');

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

    app.get(`${api}/products`, async (req, res) => {
        try {
            const productList = await Product.find();
            res.json({
                succes: true,
                productList
            });
        } catch (err) {
            res.status(500).json({
                succes: false,
                error: err
            });
        }
    })
    
    app.post(`${api}/products`, (req, res) => {
        const product = new Product({
            name: req.body.name,
            image: req.body.image,
            countInStock: req.body.countInStock
        });
        product.save()
            .then((createdProduct => {
                res.status(201).json({
                    succes: true,
                    product: createdProduct
                });
            }))
            .catch(err => {
                res.status(500).json({
                    succes: false,
                    error: err
                });
            });
    });

    return app;
}