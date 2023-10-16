const FooterService = require("../../services/admin/FooterService");

const FooterController = {
  getList: async (req, res) => {
    const result = await FooterService.getList();

    res.status(201).send({
      ActionType: "OK",
      data: result
    })
  },
  edit: async (req, res) => {
    const { title, href } = req.body;
    const result = await FooterService.edit({
      title,
      href
    });

    res.status(201).send({
      ActionType: "OK",
      message: "修改成功"
    })
  },
  add: async (req, res) => {
    const { title, href } = req.body;
    const result = await FooterService.add({
      title,
      href
    });

    res.status(201).send({
      ActionType: "OK",
      message: "添加成功"
    })
  },
  delFooter: async (req, res) => {
    const result = await FooterService.delFooter({
      _id: req.params.id
    });

    res.status(201).send({
      ActionType: "OK",
      message: "删除成功"
    })
  },
}

module.exports = FooterController;