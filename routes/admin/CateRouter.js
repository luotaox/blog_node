const express = require('express');
const CateRouter = express.Router();

const CateController = require('../../controllers/admin/CateController');

// 获取目录
CateRouter.get("/adminapi/category/list", CateController.getList);
// 修改目录
CateRouter.put("/adminapi/category", CateController.putList);
// 增加目录
CateRouter.post("/adminapi/category/add", CateController.addCate);
// 删除目录
CateRouter.delete("/adminapi/category/:id", CateController.delCate);

module.exports = CateRouter;