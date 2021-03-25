const { Product,Category } = require('../models');

exports.getProducts = async (req, res) => {
    try {
        const productList = await Product.find()
            .select('name image category -_id') // REVIEW: select()
            .populate('category', 'name -_id'); // REVIEW: populate()

        if (productList.length == 0) {
            return res.status(404).json({
                success: false,
                msg: 'La lista de productos esta vacia'
            });
        }
        res.json({
            succes: true,
            data: {
                products: productList
            }
        });
    } catch (err) {
        res.status(500).json({
            succes: false,
            error: err
        });
    }
}

exports.getProductById = async (req, res) => {

    const product = await Product.findById(req.params._id)
        .populate('category');

    if (!product) 
        return res.status(404).json({
            succes: false,
            msg: 'the product with the given ID does not exist'
        });
    
    res.json({
        succes: true,
        data: {
            product
        }
    })
}

exports.postProducts = async (req, res) => {

    const category = await Category.findById(req.body.category);
    if (!category) 
        return res.status(400).json({
            success: false,
            msg: 'Invalid category!'
        });

    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        richDescription: req.body.richDescription,
        image: req.body.image,
        images: req.body.images,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        isFeature: req.body.isFeature,
        dateCreated: req.body.dateCreated
    });

    const newProduct = await product.save();

    if (!newProduct)
        return res.status(500).json({
            success: false,
            msg: 'The product cannot be created!'
        });
    
    res.json({
        success: true,
        product: newProduct
    });
    
}

exports.updateProduct = async (req, res) => {
    const _id = req.params['_id'];

    const category = await Category.findById(req.body.category);
    if (!category) 
        return res.status(400).json({
            success: false,
            msg: 'Invalid category!'
        });

    try {

        const product = await Product.findByIdAndUpdate(_id, {
            name: req.body.name,
            description: req.body.description,
            richDescription: req.body.richDescription,
            image: req.body.image,
            images: req.body.images,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            countInStock: req.body.countInStock,
            rating: req.body.rating,
            numReviews: req.body.numReviews,
            isFeature: req.body.isFeature,
            dateCreated: req.body.dateCreated
        }, {new: true});

        if ( !product ) {
            return res.status(500).json({ 
                succes: false, 
                msg: 'the product cannot be updated!' 
            });
        }

        res.json({
            succes: true,
            msg: 'The product has been successfully updated!',
            data: { product }
        });

    } catch (err) {
        res.status(500).json({
            succes: false,
            error: err
        });
    }
}