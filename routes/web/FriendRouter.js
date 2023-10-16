const express = require('express');
const FriendRouter = express.Router();
const FriendController = require('../../controllers/web/FriendController');

// 获取友联
FriendRouter.get("/webapi/friend", FriendController.getList);
// 添加友联
FriendRouter.post("/webapi/friend", FriendController.add);


module.exports = FriendRouter;