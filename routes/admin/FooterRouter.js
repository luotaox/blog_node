const express = require('express');
const FooterRouter = express.Router();
const FooterController = require('../../controllers/admin/FooterController');

// 获取页脚信息
FooterRouter.get("/adminapi/footer", FooterController.getList);
// 更改页脚信息
FooterRouter.post("/adminapi/footer/edit", FooterController.edit);
// 添加页脚信息
FooterRouter.post("/adminapi/footer/add", FooterController.add);
// 删除页脚信息
FooterRouter.delete("/adminapi/footer/:id", FooterController.delFooter);



module.exports = FooterRouter;