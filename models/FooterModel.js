const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FooterType = {
  title: String,
  href: String
};

const FooterModel = mongoose.model('footer', new Schema(FooterType));

module.exports = FooterModel;