const express = require('express');
const EssayRouter = express.Router();

const EssayController = require('../../controllers/web/EssayController');

// 获取文章列表
EssayRouter.post("/webapi/post/list", EssayController.getList);
// 获取单个文章
EssayRouter.get("/webapi/essay/list/:id", EssayController.getOneEssay);
// 搜索文章
EssayRouter.post("/webapi/essay/list/serarch", EssayController.serarch);
// 根据分类查文章列表
EssayRouter.post("/webapi/post/list/cate", EssayController.getCateList);


module.exports = EssayRouter;