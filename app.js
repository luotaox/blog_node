var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// web端
const EssayRouter = require("./routes/web/EssayRouter");
const FocusRouter = require("./routes/web/FocusRouter");
const CateRouter = require("./routes/web/CateRouter");
const FriendRouter = require("./routes/web/FriendRouter")
const SiteInfoRouter = require("./routes/web/SiteInfoRouter");
const CommentRouter = require("./routes/web/CommentRouter");

// admin端
const UserRouter = require("./routes/admin/UserRouter");
const SiteRouter = require("./routes/admin/SiteRouter");
const FooterRouter = require("./routes/admin/FooterRouter");
const EssayAdminRouter = require("./routes/admin/EssayRouter");
const CateAdminRouter = require("./routes/admin/CateRouter");
const FriendAdminRouter = require("./routes/admin/FriendRouter");


const JWT = require('./util/JWT');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(EssayRouter);
app.use(FocusRouter);
app.use(CateRouter);
app.use(FriendRouter);
app.use(SiteInfoRouter);
app.use(CommentRouter);

// 设置中间件 token验证
app.use((req, res, next) => {
  if (req.url === "/adminapi/user/login") return next();
  // 获取token
  const token = req.headers["authorization"].split(" ")[1];
  if (token) {
    const payload = JWT.verify(token);
    // token有效 更新token
    if (payload) {
      const newToken = JWT.generate({
        _id: payload._id,
        username: payload.username
      }, "1d");
      res.header("Authorization", newToken)
      next();
    } else {
      return res.status(401).send({ errCode: "-1", errorInfo: "token过期" })
    }

  }
})



app.use(UserRouter);
app.use(SiteRouter);
app.use(FooterRouter);
app.use(EssayAdminRouter);
app.use(CateAdminRouter);
app.use(FriendAdminRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
