// 文章重点展示
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FriendType = {
  siteName: String,
  path: String,
  desc: String
}

const FriendModel = mongoose.model('friend', new Schema(FriendType));

module.exports = FriendModel;