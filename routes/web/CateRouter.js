const express = require('express');
const CateRouter = express.Router();

const CateController = require('../../controllers/web/CateController');

// 类别
CateRouter.get("/webapi/category", CateController.getList);
// 根据路径查类别
CateRouter.post("/webapi/category", CateController.getOneHref);
// 更新viewCount
CateRouter.put("/webapi/category", CateController.putViewCount);


module.exports = CateRouter;