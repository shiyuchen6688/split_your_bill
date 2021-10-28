"use strict";

var mongoose = require("mongoose");

var connectionStr = "mongodb+srv://shiyuchen6688:csy6688@split-your-bill.1hooc.mongodb.net/SPLIT-YOUR-BIILL?retryWrites = true & w=majority";
mongoose.connect(connectionStr, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(function () {
  return console.log("connected to the db");
})["catch"](function (err) {
  return console.log("There is an error: ".concat(err));
});