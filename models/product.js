const { Schema, model } = require('mongoose');

const productSchema = Schema({
    name: { type: String, required: true },
    image: { type: String, default: 'no-image.jpg'},
    countInStock: { type: Number, default: 0 }
});

module.exports = model('Product', productSchema);