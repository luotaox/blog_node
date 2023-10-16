const FriendModel = require("../../models/FriendModel");

const FriendService = {
  getList: async () => {
    return FriendModel.find();
  },
  putList: async ({ siteName, path, desc, _id }) => {
    return FriendModel.updateOne({
      _id
    }, {
      siteName,
      path,
      desc
    });
  },
  delList: ({ _id }) => {
    return FriendModel.deleteOne({
      _id
    })
  },
  addFriend: ({ siteName, path, desc }) => {
    return FriendModel.create({
      siteName,
      path,
      desc
    })
  },
};

module.exports = FriendService;