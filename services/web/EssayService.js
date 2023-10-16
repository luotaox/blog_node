const EssayModel = require("../../models/EssayModel");

const EssayService = {
  getList: async (body) => {
    let size = parseInt(body.size || 3);
    let page = parseInt(body.page || 1);
    let query = { isPublish: 1 };
    let totalCount;
    let list;
    let num = size * page;
    let cateList = {
      isPublish: 1,
      category: `/category/${body.category}`
    }

    // 查询满足条件且isTop为1的数据
    let isTopList = await EssayModel.find({ ...query, isTop: 1 }).exec();
    if (isTopList.length) {
      num -= isTopList.length;
    }

    let normalList;
    if (body.category) {
      let normalListQuery = { ...query, isTop: { $ne: 1 }, category: `/category/${body.category}` };
      normalList = await EssayModel.find(normalListQuery).limit(num).exec();
      totalCount = await EssayModel.countDocuments(cateList).exec();
    } else {
      // 查询满足条件且非isTop为1的数据进行分页查询
      let normalListQuery = { ...query, isTop: { $ne: 1 } };
      normalList = await EssayModel.find(normalListQuery).limit(num).exec();
      totalCount = await EssayModel.countDocuments(query).exec();
    }

    // 合并结果
    list = isTopList.concat(normalList);
    let data = {
      items: list,
      total: totalCount,
      hasNextPage: page * size < totalCount,
      page: page,
      size: size
    }
    return data;

  },
  getOneEssay: ({ _id }) => {
    return EssayModel.find({
      _id
    })
  },
  serarch: ({ query }) => {
    const regex = new RegExp(query, "i");
    return EssayModel.find({
      $or: [
        { title: { $regex: new RegExp(regex, 'i') } },
        { content: { $regex: new RegExp(regex, 'i') } },
        { summary: { $regex: new RegExp(regex, 'i') } }
      ]

    })
  },
  getCateList: async ({ category }) => {
    let num = 3;
    let query = { isPublish: 1 };

    let isTopList = await EssayModel.find({ ...query, isTop: 1 }).exec();
    if (isTopList.length) {
      num -= isTopList.length;
    }
    let normalListQuery = { ...query, isTop: { $ne: 1 }, category };
    let normalList = await EssayModel.find(normalListQuery).limit(num).exec();

    totalCount = await EssayModel.countDocuments(query).exec();

    list = isTopList.concat(normalList);
    return list;
  },
}

module.exports = EssayService;