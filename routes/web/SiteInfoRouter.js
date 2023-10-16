const express = require('express');
const SiteInfoRouter = express.Router();
const SiteInfoController = require('../../controllers/web/SiteInfoController');

// 获取社交信息
SiteInfoRouter.get("/webapi/site", SiteInfoController.getList);
// 获取个人信息
SiteInfoRouter.get("/webapi/user", SiteInfoController.getUserInfo);
// 获取网站背景图片
SiteInfoRouter.get("/webapi/site/img", SiteInfoController.getImg);
// 获取公告
SiteInfoRouter.get("/webapi/notice", SiteInfoController.getNotice);
// 获取页脚
SiteInfoRouter.get("/webapi/footer", SiteInfoController.getFooter);


module.exports = SiteInfoRouter;