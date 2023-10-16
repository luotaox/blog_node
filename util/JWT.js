const jsonwebtoken = require('jsonwebtoken');
// 密钥
const secret = "luo__tao";
const JWT = {
  generate(value, exprires) {
    return jsonwebtoken.sign(value, secret, { expiresIn: exprires })
  },
  verify(token) {
    return jsonwebtoken.verify(token, secret);
    // token失效提示
    // return jsonwebtoken.verify(token, secret, err => {
    //   if (err == null) return true
    // })
  }
}

module.exports = JWT