const CommentModel = require("../../models/CommentModel");

const CommentService = {
  getList: async () => {
    const pipeline = [
      {
        $match: { toUserId: null },
      },
      {
        $lookup: {
          from: "comments",
          let: { commentId: { $toString: "$_id" } },
          pipeline: [
            { $match: { $expr: { $eq: ["$$commentId", "$toUserId"] } } },
          ],
          as: "reply",
        },
      },
    ];

    const data = await CommentModel.aggregate(pipeline);

    return data.map((item) => ({
      comment: item,
      reply: item.reply,
    }));
  },

  add: async ({ content, fromUserAvatar, fromUserName, toUserAvatar, toUserName, toUserId, createTime }) => {
    return CommentModel.create({
      content, fromUserAvatar, fromUserName, toUserAvatar, toUserName, toUserId, createTime
    })
  }
};

module.exports = CommentService;