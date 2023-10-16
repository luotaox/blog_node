const SiteInfoModel = require("../../models/SiteInfoModel");
const AboutModel = require("../../models/AboutModel");
const UserModel = require("../../models/UserModel");
const FooterModel = require("../../models/FooterModel")

const SiteInfoService = {
  getList: async () => {
    return SiteInfoModel.find();
  },
  getUserInfo: async () => {
    return UserModel.find({
      role: 1,
    }).select({
      password: 0
    })
  },
  getImg: async () => {

    return AboutModel.find();
  },
  getNotice: async () => {
    return AboutModel.find();
  },
  getFooter: async () => {
    return FooterModel.find();
  }
}

module.exports = SiteInfoService;