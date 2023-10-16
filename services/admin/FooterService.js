const FooterModel = require("../../models/FooterModel");

const FooterService = {
  getList: async () => {
    return FooterModel.find();
  },
  edit: async ({ title, href }) => {
    return FooterModel.updateOne({
      title,
      href
    })
  },
  add: async ({ title, href }) => {
    return FooterModel.create({
      title,
      href
    })
  },
  delFooter: async ({ _id }) => {
    return FooterModel.deleteOne({
      _id
    })
  }
};

module.exports = FooterService;