const { Product } = require('../models');

exports.getProducts = async (req, res) => {
    try {
        const productList = await Product.find();
        if (productList.length == 0) {
            return res.status(404).json({
                success: false,
                msg: 'La lista de productos esta vacia'
            });
        }
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
}

exports.postProducts = (req, res) => {
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
}