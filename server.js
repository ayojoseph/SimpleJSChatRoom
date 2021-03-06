var express = require("express");
var app = express();
var admin = require("firebase-admin");
var serviceAccount = require("./servkey.json");
var http = require("http");
var server = http.Server(app);
var port = process.env.PORT || 8080;

app.use(express.static("client"));

var io = require("socket.io")(server);

io.on("connection", function(socket) {
  socket.on("message", function(msg) {
    io.emit("message", msg);
  });
});

server.listen(port, function() {
  console.log("Chat Server Running....");
});
