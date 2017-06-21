const mongoose = require('mongoose');
const db = mongoose.connection;
const MD5 = require('md5');

db.on('error', console.error.bind(console, '连接错误：'))
db.once('open', (callback) => {
    console.log('MongoDB连接成功！！')
})
//申明一个mongoons对象
const UsersSchema = new mongoose.Schema({
    name: {
        unique: true,
        type: String,
    },
    password: String,
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
UsersSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now();
    } else {
        this.meta.updateAt = Date.now();
    }
    this.password = MD5(this.password);
    next();
})
//查询的静态方法
UsersSchema.statics = {
    fetch: function (callback) { //查询所有数据
        return this
            .find()
            .sort('meta.updateAt') //排序
            .exec(callback) //回调
    },
    findById: function (id, callback) { //根据id查询单条数据
        return this
            .findOne({
                _id: id
            })
            .exec(callback)
    }
}

module.exports = UsersSchema