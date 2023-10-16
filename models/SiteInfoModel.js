// 网站信息
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SiteInfoType = {
  // 通知
  notice: String,
  // 个人描述
  title: String,
  icon: String,
  color: String,
  href: String,
}

const SiteInfoModel = mongoose.model('siteinfo', new Schema(SiteInfoType));

module.exports = SiteInfoModel;