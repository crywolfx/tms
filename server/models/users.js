const mongoose = require('mongoose');
const MD5 = require('md5');

//申明一个mongoons对象
const UsersSchema = new mongoose.Schema({
    name: {
        unique: true,
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    token: {
        type: String
    },
    meta: {
        createAt: {
            type: Date,
            dafault: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
})
//每次执行都会调用,时间更新操作
UsersSchema.pre('save', function(next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now();
    } else {
        this.meta.updateAt = Date.now();
    }
    next();
})
//查询的静态方法
UsersSchema.statics = {
    fetch: function(callback) { //查询所有数据
        return this
            .find()
            .sort('meta.updateAt') //排序
            .exec(callback) //回调
    },
    findById: function(id, callback) { //根据id查询单条数据
        return this
            .findOne({
                _id: id
            })
            .exec(callback)
    }
}

module.exports = mongoose.model('Users', UsersSchema)