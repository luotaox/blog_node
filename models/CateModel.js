// 分类
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CateType = {
  title: String,
  href: String
}

const CateModel = mongoose.model('category', new Schema(CateType));

module.exports = CateModel;