// 评论
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConnentType = {
  content: String,
  createTime: Date,
  fromUserAvatar: String,
  fromUserName: String,
  toUserAvatar: String,
  toUserName: String,
  toUserId: String
}

const CommentModel = mongoose.model('comment', new Schema(ConnentType));

module.exports = CommentModel;