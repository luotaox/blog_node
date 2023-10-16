const express = require('express');
const FriendRouter = express.Router();
const FriendController = require('../../controllers/admin/FriendController');

// 获取信息
FriendRouter.get("/adminapi/friend", FriendController.getList);
// 更新
FriendRouter.put("/adminapi/friend/", FriendController.putList);
// 删除
FriendRouter.delete("/adminapi/friend/:id", FriendController.delList);
// 添加
FriendRouter.post("/adminapi/friend/add", FriendController.addFriend);

module.exports = FriendRouter;