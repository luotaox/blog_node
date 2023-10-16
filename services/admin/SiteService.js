const AboutModel = require("../../models/AboutModel");
const SiteInfoModel = require("../../models/SiteInfoModel");
const FocusModel = require('../../models/FocusModel')

const SiteService = {
  getList: async () => {
    return SiteInfoModel.find().select({
      icon: 0
    });
  },
  edit: async ({ href, color, _id }) => {
    return SiteInfoModel.updateOne({
      _id
    }, {
      href,
      color,
    })
  },
  uploadImg: async (backgrondImg) => {
    return AboutModel.updateOne({
      img: backgrondImg
    })
  },
  notice: ({ notice, name, href, desc, content }) => {
    return AboutModel.updateOne({
      notice,
      name,
      href,
      desc,
      content
    })
  },
  getNotice: () => {
    return AboutModel.find().select({
      _id: 0
    })
  },
  getFocus: () => {
    return FocusModel.find();
  },
  focusEdit: async ({ img, title, href, _id }) => {
    if (img) {
      return FocusModel.updateOne({
        _id
      }, {
        img,
        title,
        href
      })
    } else {
      return FocusModel.updateOne({
        _id
      }, {
        title,
        href
      })
    }

  },
  upFriend: ({ href, name, desc }) => {
    return AboutModel.updateOne({
      href,
      name,
      desc
    })
  },
}

module.exports = SiteService;