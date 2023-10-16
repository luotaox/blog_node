// 文章重点展示
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FocusType = {
  title: String,
  img: String,
  href: String
}

const FocusModel = mongoose.model('focus', new Schema(FocusType));

module.exports = FocusModel;