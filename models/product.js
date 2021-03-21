const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const productSchema = Schema({
    name: { type: String, required: true },
    description: { type: String, require: true },
    richDescription: { type: String, default: '' },
    image: { type: String, default: 'no-image.jpg' },
    images: [{ type: String }],
    brand: { type: String, default: '' },
    price: { type: Number, default: 0 },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    countInStock: { type: Number, require: true, min: 0, max: 255 },
    rating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
    isFeature: { type: Boolean, default: false },
    dateCreated: { type: Date, default: Date.now }
});

module.exports = model('Product', productSchema);