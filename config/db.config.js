const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/blog", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

mongoose.connect("mongodb://blog:CwyyhtsQ58!@139.9.102.224:27017/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', function () {
  console.log('连接成功');
});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose连接失败', err);
});