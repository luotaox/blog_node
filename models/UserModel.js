const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserType = {
  username: String,
  password: String,
  gender: Number, //性别0，1，2
  introduction: String, //简介
  avatar: String, //头像
  role: Number, //管理员1，编辑2
}

const UserModel = mongoose.model('user', new Schema(UserType));

module.exports = UserModel