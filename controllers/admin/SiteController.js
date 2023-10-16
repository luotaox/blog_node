const SiteService = require("../../services/admin/SiteService");

const SiteController = {
  getList: async (req, res) => {
    const result = await SiteService.getList();

    res.status(201).send({
      ActionType: "OK",
      data: result
    })
  },
  edit: async (req, res) => {
    const { href, color, _id } = req.body;
    const result = await SiteService.edit({
      _id,
      href,
      color,
    });

    res.status(201).send({
      ActionType: "OK",
      message: "修改成功"
    })
  },
  uploadImg: async (req, res) => {
    const backgroundImg = req.file ? `/backgroundimg/${req.file.filename}` : '';
    const result = await SiteService.uploadImg(backgroundImg);
    res.status(201).send({
      ActionType: "OK",
      data: {
        backgroundImg
      },
      message: "修改成功"
    })
  },
  notice: async (req, res) => {
    const { notice, name, href, desc, content } = req.body;
    const result = await SiteService.notice({
      notice,
      name,
      href,
      desc,
      content
    });
    res.status(201).send({
      ActionType: "OK",
      message: "修改成功"
    })
  },
  getNotice: async (req, res) => {
    const result = await SiteService.getNotice();
    res.status(201).send({
      ActionType: "OK",
      data: result,
    })
  },
  getFocus: async (req, res) => {
    const result = await SiteService.getFocus();

    res.status(201).send({
      ActionType: "OK",
      data: result
    })
  },
  focusEdit: async (req, res) => {
    const img = req.file ? `/backgroundimg/${req.file.filename}` : '';
    const { title, href, _id } = req.body;
    const result = await SiteService.focusEdit({
      img,
      title,
      href,
      _id
    });
    res.status(201).send({
      ActionType: "OK",
      data: {
        result
      },
      message: "修改成功"
    })
  },
  upFriend: async (req, res) => {
    const { href, name, desc } = req.body;
    const result = await SiteService.upFriend({
      href,
      name,
      desc
    });

    res.status(201).send({
      ActionType: "OK",
      data: result
    })
  }
}

module.exports = SiteController;