const mongoose = require('mongoose')
const UserSchema = require('../schemas/users')
const Users = mongoose.model('Users',UserSchema)

module.exports = Users;