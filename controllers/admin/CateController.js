const CateService = require("../../services/admin/CateService");

const CateController = {
  getList: async (req, res) => {
    const result = await CateService.getList();

    res.status(201).send({
      ActionType: "OK",
      data: result
    })
  },
  putList: async (req, res) => {
    const { title, href, _id } = req.body;
    const result = await CateService.putList({
      title,
      href,
      _id
    });

    res.status(201).send({
      ActionType: "OK",
      message: '修改成功'
    })
  },
  addCate: async (req, res) => {
    const { title, href, } = req.body;
    const result = await CateService.addCate({
      title,
      href,
    });

    res.status(201).send({
      ActionType: "OK",
      message: '添加成功'
    })
  },
  delCate: async (req, res) => {
    const result = await CateService.delCate({
      _id: req.params.id
    });

    res.status(201).send({
      ActionType: "OK",
      message: '删除成功'
    })
  },
}

module.exports = CateController;