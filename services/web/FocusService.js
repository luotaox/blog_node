const FocusModel = require("../../models/FocusModel");

const FocusService = {
  getList: async () => {
    return FocusModel.find();
  }
}

module.exports = FocusService;