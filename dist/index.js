"use strict";

var _restify = require("restify");

var _restify2 = _interopRequireDefault(_restify);

var _server = require("./util/server");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var globals = require("../globals.json");
var conf = require("../package.json");

var server = _restify2.default.createServer({
    name: conf.name,
    version: conf.version
});
server.use(_restify2.default.plugins.acceptParser(server.acceptable));
server.use(_restify2.default.plugins.queryParser());
server.use(_restify2.default.plugins.bodyParser({ mapParams: true }));
server.get('/health', function (req, res, next) {
    res.send(200);
});
server.get('/version', function (req, res, next) {
    res.send(conf.name + " " + conf.version);
});
server.get(/\/renders\/monster\/?.*/, _restify2.default.plugins.serveStatic({ directory: __dirname + "/renders", appendRequestPath: false }));
server.post('/order/:details', _server.Server.transformSanitizeAndSend);
server.listen(globals.SERVER_PORT, function () {
    console.log('%s listening at %s', server.name, server.url);
});