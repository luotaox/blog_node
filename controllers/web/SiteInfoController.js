const SiteInfoService = require("../../services/web/SiteInfoService");

const SiteInfoController = {
  getList: async (req, res) => {
    const result = await SiteInfoService.getList();

    res.status(201).send({
      ActionType: "OK",
      data: result
    })
  },
  // 获取个人信息
  getUserInfo: async (req, res) => {
    const result = await SiteInfoService.getUserInfo();
    res.status(201).send({
      ActionType: "OK",
      data: result
    })
  },
  getImg: async (req, res) => {
    const result = await SiteInfoService.getImg();
    res.status(201).send({
      ActionType: "OK",
      data: result
    })
  },
  getNotice: async (req, res) => {
    const result = await SiteInfoService.getNotice();
    res.status(201).send({
      ActionType: "OK",
      data: result
    })
  },
  getFooter: async (req, res) => {
    const result = await SiteInfoService.getFooter();
    res.status(201).send({
      ActionType: "OK",
      data: result
    })
  }
}

module.exports = SiteInfoController;