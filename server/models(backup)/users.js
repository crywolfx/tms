const mongoose = require('mongoose')
const UserSchema = require('../schemas/users')
const AdminSchema = require('../schemas/admin')

const Users = mongoose.model('Users',UserSchema)
const Admin = mongoose.model('Admin',AdminSchema)

module.exports.user = Users;
module.exports.admin = Admin;