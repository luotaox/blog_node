const CateModel = require("../../models/CateModel");
const EssayModel = require("../../models/EssayModel")

const CateService = {
  getList: async () => {
    return CateModel.find();
  },
  getOneHref: ({ href }) => {
    return CateModel.find({
      href
    });
  },
  putViewCount: ({ _id }) => {
    return EssayModel.updateOne({
      _id
    }, {
      $inc: { viewsCount: 1 }
    });
  },
}

module.exports = CateService;