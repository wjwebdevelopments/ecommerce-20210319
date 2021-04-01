/**
 * Created by wjweb on 30/03/2021.
 */
const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: { type: String, require: true  },
    email: { type: String, require: true },
    passwordHash: { type: String, require: true },
    phone: { type: String, require: true },
    isAdmin: { type: String, default: false },
    street: { type: String, default: '' },
    apartment: { type: String, default: '' },
    zip: { type: String, default: '' },
    city: { type: String, default: '' },
    country: { type: String, default: '' }
});

userSchema.virtual('id').get(function() {
   return this._id.toHexString();
});

userSchema.set('toJSON', {
    virtuals: true
});

exports.User = model('User', userSchema);
exports.userSchema = userSchema;