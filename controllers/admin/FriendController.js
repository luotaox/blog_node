const FriendService = require("../../services/admin/FriendService");

const FriendController = {
  getList: async (req, res) => {
    const result = await FriendService.getList();

    res.status(201).send({
      ActionType: "OK",
      data: result
    })
  },
  putList: async (req, res) => {
    const { siteName, path, desc, _id } = req.body;
    const result = await FriendService.putList({
      _id,
      siteName,
      path,
      desc
    });

    res.status(201).send({
      ActionType: "OK",
      data: result
    })
  },
  delList: async (req, res) => {
    const result = await FriendService.delList({
      _id: req.params.id
    });

    res.status(201).send({
      ActionType: "OK",
    })
  },
  addFriend: async (req, res) => {
    const { siteName, path, desc } = req.body;
    const result = await FriendService.addFriend({
      siteName,
      path,
      desc
    });

    res.status(201).send({
      ActionType: "OK",
    })
  },
}

module.exports = FriendController;