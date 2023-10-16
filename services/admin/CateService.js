const CateModel = require("../../models/CateModel");

const CateService = {
  getList: async () => {
    return CateModel.find();
  },
  putList: async ({ title, href, _id }) => {
    return CateModel.updateOne({
      _id
    }, {
      title,
      href
    })
  },
  addCate: async ({ title, href }) => {
    return CateModel.create({
      title,
      href
    })
  },
  delCate: async ({ _id }) => {
    return CateModel.deleteOne({
      _id
    })
  },
}

module.exports = CateService;