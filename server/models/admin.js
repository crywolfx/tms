const mongoose = require('mongoose');
const MD5 = require('md5');

const AdminSchema = new mongoose.Schema({
    name: {
        unique: true,
        type: String,
    },
})

AdminSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now();
    } else {
        this.meta.updateAt = Date.now();
    }
    next();
}) 
module.exports = mongoose.model('Admin',AdminSchema)