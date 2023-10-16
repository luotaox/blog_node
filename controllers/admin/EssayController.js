const EssayService = require("../../services/admin/EssayService");

const EssayController = {
  getList: async (req, res) => {
    const result = await EssayService.getList();

    res.status(201).send({
      ActiveType: "OK",
      data: result
    })
  },
  putIshot: async (req, res) => {
    const { isHot, _id } = req.body;
    const result = await EssayService.putIshot({
      _id,
      isHot
    })

    res.status(201).send({
      ActiveType: "OK",
    })
  },
  putIstop: async (req, res) => {
    const { isTop, _id } = req.body;
    const result = await EssayService.putIstop({
      _id,
      isTop
    })

    res.status(201).send({
      ActiveType: "OK",
    })
  },
  getImg: async (req, res) => {
    const img = req.file ? `/essayimg/${req.file.filename}` : '';
    const result = await EssayService.getImg({
      img
    });

    res.status(201).send({
      ActiveType: "OK",
      data: result
    })
  },
  add: async (req, res) => {
    const cover = req.file ? `/essayimg/${req.file.filename}` : '';
    const { title, summary, content, category } = req.body;
    const result = await EssayService.add({
      title,
      summary,
      content,
      category,
      pubTime: new Date(),
      cover
    });

    res.status(201).send({
      ActiveType: "OK",
      message: "添加成功"
    })
  },
  delEssay: async (req, res) => {
    const result = await EssayService.delEssay({
      _id: req.params.id
    });

    res.status(201).send({
      ActiveType: "OK",
      message: '删除成功'
    })
  },
  getOneEssay: async (req, res) => {
    const result = await EssayService.getOneEssay({
      _id: req.params.id
    });
    res.status(201).send({
      ActiveType: "OK",
      data: result
    })
  },
  putOneEssay: async (req, res) => {
    const cover = req.file ? `/essayimg/${req.file.filename}` : '';
    const { title, summary, content, category } = req.body;
    const result = await EssayService.putOneEssay({
      _id: req.params.id,
      title,
      summary,
      content,
      category,
      pubTime: new Date(),
      cover
    });
    res.status(201).send({
      ActiveType: "OK",
      data: result
    })
  },
  putIsPublish: async (req, res) => {
    const { isPublish, _id } = req.body;
    const result = await EssayService.putIsPublish({
      _id,
      isPublish
    })

    res.status(201).send({
      ActiveType: "OK",
    })
  }
}

module.exports = EssayController;