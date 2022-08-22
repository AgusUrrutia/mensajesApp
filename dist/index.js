"use strict";

var _app = _interopRequireDefault(require("./app"));

var _socket = require("socket.io");

var _http = _interopRequireDefault(require("http"));

var _db = require("./db");

var _sockets = _interopRequireDefault(require("./sockets.js"));

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _db.connectDB)();

var server = _http["default"].createServer(_app["default"]);

var hhtpServer = server.listen(_config.PORT);
var io = new _socket.Server(server);
console.log("server is runnign in puerto ", _config.PORT);
(0, _sockets["default"])(io);