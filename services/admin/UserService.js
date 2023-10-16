const UserModel = require('../../models/UserModel')

const UserService = {
  // 登录数据库
  login: ({ username, password }) => {
    return UserModel.find({
      username,
      password
    })
  },
  // 个人信息修改数据库
  upload: ({ username, introduction, gender, avatar, _id }) => {
    // avatar为空 不更新该字段
    if (avatar) {
      return UserModel.updateOne({
        _id
      }, {
        username,
        introduction,
        gender,
        avatar,
      })
    } else {
      return UserModel.updateOne({
        _id
      }, {
        username,
        introduction,
        gender,

      })
    }

  },
  // 添加用户
  add: ({ username, introduction, gender, avatar, password, role }) => {
    return UserModel.create({
      username,
      introduction,
      gender,
      avatar,
      password,
      role
    })
  },

  // 用户列表
  getList: ({ _id }) => {
    return UserModel.find({
      _id: { $ne: _id }
    });
  },

  // 删除用户
  delList: ({ _id }) => {
    return UserModel.deleteOne(({ _id }));
  },

  // 用户更新
  putList: (body) => {
    return UserModel.updateOne({ _id: body._id }, body)
  },

  // 检测重复
  distinct: ({ username }) => {
    return UserModel.find(({ username }));
  }
}
module.exports = UserService

