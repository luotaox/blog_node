const FriendService = require("../../services/web/FriendService");

const FriendController = {
  getList: async (req, res) => {
    const result = await FriendService.getList();

    res.status(201).send({
      ActionType: "OK",
      data: result
    })
  },
  add: async (req, res) => {
    const result = await FriendService.add({
      siteName: req.body.siteName,
      path: req.body.path,
      desc: req.body.desc
    });
    res.status(201).send({
      ActionType: "添加成功",
    })
  }
}

module.exports = FriendController;