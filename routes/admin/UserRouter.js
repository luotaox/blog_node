const express = require("express");

const UserRouter = express.Router();

const UserController = require("../../controllers/admin/UserController");

// 图片上传包
const multer = require('multer');
const upload = multer({ dest: 'public/avateruploads/' });

// 登录
UserRouter.post("/adminapi/user/login", UserController.login);
// 个人信息更新
UserRouter.post("/adminapi/user/upload", upload.single("file"), UserController.upload);
// 添加用户
UserRouter.post('/adminapi/user/add', upload.single('file'), UserController.add);
// 用户列表
UserRouter.get('/adminapi/user/list/:id', UserController.getList);
// 用户更新
UserRouter.put('/adminapi/user/list/:id', UserController.putList);
// 删除用户
UserRouter.delete('/adminapi/user/list/:id', UserController.delList);
// 检测重复
UserRouter.post('/adminapi/user/distinct', UserController.distinct);


module.exports = UserRouter