const CommentService = require("../../services/web/CommentService");

const CommentController = {
  getList: async (req, res) => {
    const result = await CommentService.getList();

    res.status(201).send({
      ActionType: "OK",
      data: result
    })
  },
  add: async (req, res) => {
    const { content, fromUserAvatar, fromUserName, toUserAvatar, toUserName, toUserId } = req.body
    const result = await CommentService.add({
      content,
      fromUserAvatar,
      fromUserName,
      toUserAvatar,
      toUserName,
      toUserId,
      createTime: new Date()
    });

    res.status(201).send({
      ActionType: "OK",
      message: "添加成功",
      data: result
    })
  }
}

module.exports = CommentController;