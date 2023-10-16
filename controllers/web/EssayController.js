const EssayService = require("../../services/web/EssayService");

const EssayController = {
  getList: async (req, res) => {
    const result = await EssayService.getList(req.body);

    res.status(201).send({
      ActionType: "OK",
      data: result
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
  serarch: async (req, res) => {
    const { query } = req.body;
    console.log(query);
    const result = await EssayService.serarch({
      query
    });
    res.status(201).send({
      ActiveType: "OK",
      data: result
    })
  },
  getCateList: async (req, res) => {
    const { category } = req.body;
    const result = await EssayService.getCateList({
      category
    });

    res.status(201).send({
      ActionType: "OK",
      data: result
    })
  },
}

module.exports = EssayController;