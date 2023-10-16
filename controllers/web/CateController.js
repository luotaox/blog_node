const CateService = require("../../services/web/CateService");

const CateController = {
  getList: async (req, res) => {
    const result = await CateService.getList();

    res.status(201).send({
      ActionType: "OK",
      data: result
    })
  },
  getOneHref: async (req, res) => {
    const { href } = req.body;
    const result = await CateService.getOneHref({
      href
    });
    res.status(201).send({
      ActionType: "OK",
      data: result
    })
  },
  putViewCount: async (req, res) => {
    const result = await CateService.putViewCount({
      _id: req.body._id
    });

    res.status(201).send({
      ActionType: "OK",
    })
  }
}

module.exports = CateController;