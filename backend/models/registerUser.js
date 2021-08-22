const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const userSchema = new Schema({
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    age: {type: Number, required: true},
    profession: {type: String, required: true}
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('User', userSchema);