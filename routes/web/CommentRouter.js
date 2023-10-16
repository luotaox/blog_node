const express = require('express');
const CommentRouter = express.Router();

const CommentController = require('../../controllers/web/CommentController');

// 获取评论
CommentRouter.get("/webapi/comment", CommentController.getList);

// 添加评论
CommentRouter.post("/webapi/comment/add", CommentController.add);

module.exports = CommentRouter;