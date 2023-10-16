const UserService = require('../../services/admin/UserService')
const JWT = require('../../util/JWT')

const UserController = {
  login: async (req, res) => {
    let result = await UserService.login(req.body);
    if (result.length === 0) {
      res.send({
        code: "-1",
        error: "用户名或密码错误"
      })
    }

    // 生成token
    const token = JWT.generate({
      _id: result[0]._id,
      name: result[0].username
    }, "1d");
    res.header("Authorization", token);
    res.status(201).send({
      ActiveType: "OK",
      message: "成功",
      data: {
        username: result[0].username,
        gender: result[0].gender ? result[0].gender : 0, //性别0，1，2
        introduction: result[0].introduction, //简介
        avatar: result[0].avatar, //头像
        role: result[0].role, //管理员1，编辑2
        _id: result[0]._id
      }
    })
  },
  // 个人信息更新接口
  upload: async (req, res) => {
    const { username, introduction, gender } = req.body;
    // 根据token获取用户id
    const token = req.headers["authorization"].split(" ")[1];
    const payload = JWT.verify(token)
    // 拼接头像路径(判断是否更新头像avatar字段)
    const avatar = req.file ? `/avateruploads/${req.file.filename}` : '';
    await UserService.upload({
      _id: payload._id,
      username,
      introduction,
      gender: Number(gender),
      avatar,
    })
    // avatar为空 不返回
    if (avatar) {
      res.status(201).send({
        ActiveType: "ok",
        message: '成功',
        data: {
          username,
          introduction,
          gender: Number(gender),
          avatar,
        }
      })
    } else {
      res.status(201).send({
        ActiveType: "ok",
        message: '成功',
        data: {
          username,
          introduction,
          gender: Number(gender),
        }
      })
    }
  },
  // 添加用户
  add: async (req, res) => {
    const { username, introduction, gender, role, password } = req.body;
    // 拼接头像路径(判断是否更新头像avatar字段)
    const avatar = req.file ? `/avateruploads/${req.file.filename}` : '';
    await UserService.add({
      username,
      introduction,
      gender: Number(gender),
      avatar,
      role: Number(role),
      password
    })

    res.status(201).send({
      ActiveType: "ok",
      message: '成功',
    })
  },

  // 用户列表
  getList: async (req, res) => {
    const result = await UserService.getList({
      _id: req.params.id
    });
    res.status(201).send({
      ActiveType: "ok",
      data: result
    })
  },

  // 删除用户
  delList: async (req, res) => {
    const result = await UserService.delList({
      _id: req.params.id
    });
    res.status(201).send({
      ActiveType: "OK"
    })
  },

  // 用户更新
  putList: async (req, res) => {
    const result = await UserService.putList(req.body);
    res.status(201).send({
      ActiveType: "OK"
    })
  },

  // 检测重复
  distinct: async (req, res) => {
    const result = await UserService.distinct(req.body);
    if (result.length) {
      res.status(201).send({
        ActiveType: '用户名重复',
        distinct: 0
      })
    } else {
      res.status(201).send({
        ActiveType: '用户名可用',
        distinct: 1
      })
    }
  }
}

module.exports = UserController