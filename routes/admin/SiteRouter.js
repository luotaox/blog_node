const express = require('express');
const SiteRouter = express.Router();
const SiteController = require('../../controllers/admin/SiteController');

// 图片上传包
const multer = require('multer');
const upload = multer({ dest: 'public/backgroundimg/' });

// 获取社交信息
SiteRouter.get("/adminapi/site", SiteController.getList);
// 修改社交信息
SiteRouter.put("/adminapi/site/edit", SiteController.edit);
// 修改背景图片
SiteRouter.post("/adminapi/site/img", upload.single("file"), SiteController.uploadImg);
// 修改公告信息
SiteRouter.post("/adminapi/notice", SiteController.notice);
// 获取公告信息
SiteRouter.get("/adminapi/notice", SiteController.getNotice);
// 获取聚焦信息
SiteRouter.get("/adminapi/focus", SiteController.getFocus);
// 修改聚焦信息
SiteRouter.post("/adminapi/focus/edit", upload.single("file"), SiteController.focusEdit);
// 更新友联示例
SiteRouter.put("/adminapi/site/friend", SiteController.upFriend);



module.exports = SiteRouter;