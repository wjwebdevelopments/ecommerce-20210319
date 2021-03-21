const { Category } = require('../models');

exports.getCategory = async (req, res) => {
    try {
        const categoryList = await Category.find();
        if (categoryList.length == 0) {
            return res.status(404).json({
                success: false,
                msg: 'The list of categories is empty!'
            });
        }
        res.json({
            succes: true,
            msg: 'Showing list of categories!',
            data: {
                categoryList
            }
        });
    } catch (err) {
        res.status(500).json({
            succes: false,
            error: err
        });
    }
}

exports.getCategoryById = async (req, res) => {
    const _id = req.params['_id'];
    try {
        let category = await Category.findById(_id);
        if ( !category ) {
            return res.status(404).json({ 
                succes: false, 
                msg: 'the category with the given ID does not exist!' 
            });
        }
        res.json({
            succes: true,
            msg: 'Showing category detail!',
            data: { category }
        }); 
    } catch (err) {
        res.status(500).json({
            succes: false,
            error: err
        });
    }
}

exports.postCategory = async (req, res) => {
    let category = new Category({
        name: req.body.name,
        icon: req.body.icon,
        color: req.body.color
    });
    try {
        category = await category.save(); 
        // Handdler error
        if (!category) {
            return res.status(404).json({ 
                succes: false, 
                msg: 'the category cannot be created!' 
            });
        }
        // Return success results
        res.json({
            succes: true,
            msg: 'Category created successfully!',
            data: { category }
        });
    } catch (err) {
        res.status(500).json({
            succes: false,
            error: err
        });
    }
}

exports.updateCategory = async (req, res) => {
    const _id = req.params['_id'];
    try {
        const category = await Category.findByIdAndUpdate(_id, {
            name: req.body.name,
            icon: req.body.icon,
            color: req.body.color
        }, {new: true});
        if ( !category ) {
            return res.status(404).json({ 
                succes: false, 
                msg: 'the category with the given ID does not exist!' 
            });
        }
        res.json({
            succes: true,
            msg: 'The category has been successfully updated!',
            data: { category }
        });
    } catch (err) {
        res.status(500).json({
            succes: false,
            error: err
        });
    }
}

exports.deleteCategory = async (req, res) => {
    const _id = req.params['_id'];
    try {
        let category = await Category.findById(_id);
        if ( !category ) {
            return res.status(404).json({ 
                succes: false, 
                msg: 'the category with the given ID does not exist!' 
            });
        }
        category = await Category.findByIdAndRemove(_id);
        if ( !category ) {
            return res.status(404).json({ 
                succes: false, 
                msg: 'the category cannot be removed!' 
            });
        }
        res.json({
            succes: true,
            msg: 'The category has been successfully removed!',
            data: { category }
        });
    } catch (err) {
        res.status(500).json({
            succes: false,
            error: err
        });
    }
}