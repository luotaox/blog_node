const express = require('express');
const EssayRouter = express.Router();

const EssayController = require("../../controllers/admin/EssayController");
// 图片上传包
const multer = require('multer');
const upload = multer({ dest: 'public/essayimg/' });

// 获取文章列表
EssayRouter.get("/adminapi/essay/list", EssayController.getList);
// 更新文章置顶热门
EssayRouter.put("/adminapi/essay/ishot", EssayController.putIshot);
EssayRouter.put("/adminapi/essay/istop", EssayController.putIstop);
// 上传图片
EssayRouter.post("/adminapi/essay/img", upload.single('file'), EssayController.getImg);
// 添加文章
EssayRouter.post("/adminapi/essay/add", upload.single("file"), EssayController.add);
// 删除文章
EssayRouter.delete("/adminapi/essay/:id", EssayController.delEssay);
// 获取单个文章
EssayRouter.get("/adminapi/essay/list/:id", EssayController.getOneEssay);
// 更新文章
EssayRouter.post("/adminapi/essay/list/:id", upload.single("file"), EssayController.putOneEssay);
// 修改发布状态
EssayRouter.put("/adminapi/essay/ispublish", EssayController.putIsPublish);



module.exports = EssayRouter;