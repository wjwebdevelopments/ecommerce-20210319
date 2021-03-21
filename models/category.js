const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const categorySchema = Schema({
    name: { type: String, require: true },
    icon: { type: String },
    color: { type: String }
});

module.exports = model('Category', categorySchema);