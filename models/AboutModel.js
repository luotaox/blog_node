// 分类
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AboutType = {
  img: String,
  notice: String,
  name: String,
  href: String,
  desc: String,
  content: String
}

const AboutModel = mongoose.model('about', new Schema(AboutType));

module.exports = AboutModel;