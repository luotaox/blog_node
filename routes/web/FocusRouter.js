const express = require('express');
const FocusRouter = express.Router();
const FocusController = require('../../controllers/web/FocusController');

// 获取重点展示
FocusRouter.get("/webapi/focus/list", FocusController.getList);

module.exports = FocusRouter;