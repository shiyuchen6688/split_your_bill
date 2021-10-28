"use strict";

require("./db/connect.js");

var express = require("express");

var app = express();

var path = require("path");

var billRouter = require("./routers/bills");

var port = 5000; // middlewares

app.use(express["static"]("./public")); // parses incoming requests with JSON payloads and is based on body - parser.

app.use(express.json()); // routes

app.use("/api/v1/bills", billRouter);
app.get("/bills", function (req, res) {}); // start server

app.listen(port, function () {
  console.log("server is listening on port ".concat(port));
});