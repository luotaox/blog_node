const EssayModel = require("../../models/EssayModel")
const ImgModel = require("../../models/ImgModel")

const EssayService = {
  getList: () => {
    return EssayModel.find();
  },
  putIshot: ({ _id, isHot }) => {
    return EssayModel.updateOne({
      _id
    }, {
      isHot
    })
  },
  putIstop: ({ _id, isTop }) => {
    return EssayModel.updateOne({
      _id
    }, {
      isTop
    })
  },
  getImg: ({ img }) => {
    return ImgModel.create({
      img
    });
  },
  add: ({ title, summary, content, category, pubTime, cover }) => {
    return EssayModel.create({
      title,
      summary,
      content,
      category,
      pubTime,
      commentsCount: 0,
      isHot: false,
      isTop: false,
      viewsCount: 0,
      cover
    })
  },
  delEssay: ({ _id }) => {
    return EssayModel.deleteOne({
      _id
    })
  },
  getOneEssay: ({ _id }) => {
    return EssayModel.find({
      _id
    })
  },
  putOneEssay: ({ title, summary, content, category, pubTime, cover, _id }) => {
    console.log(cover);
    if (cover) {
      return EssayModel.updateOne({
        _id
      }, {
        title,
        summary,
        content,
        category,
        pubTime,
        cover
      })
    } else {
      return EssayModel.updateOne({
        _id
      }, {
        title,
        summary,
        content,
        category,
        pubTime,
      })
    }
  },
  putIsPublish: ({ _id, isPublish }) => {
    return EssayModel.updateOne({
      _id
    }, {
      isPublish
    })
  },
}

module.exports = EssayService;