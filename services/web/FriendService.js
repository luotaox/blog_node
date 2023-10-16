const FriendModel = require("../../models/FriendModel");

const FriendService = {
  getList: async () => {
    return FriendModel.find();
  },
  add: async ({ siteName, path, desc }) => {
    return FriendModel.create({
      siteName,
      path,
      desc
    })
  }
}

module.exports = FriendService;