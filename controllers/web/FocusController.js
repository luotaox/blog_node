const FocusService = require("../../services/web/FocusService");

const FocusController = {
  getList: async (req, res) => {
    const result = await FocusService.getList();

    res.status(201).send({
      ActionType: "OK",
      data: result
    })
  }
}

module.exports = FocusController;