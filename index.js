import restify from "restify";
import {Server} from "./util/server";

let globals = require("./globals.json");
let conf = require("./package.json");

const server = restify.createServer({
  name: conf.name,
  version: conf.version
});
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser({ mapParams: true }));
server.get('/health', function(req, res, next){ res.send(200) });
server.get('/version', function(req, res, next){ res.send(`${conf.name} ${conf.version}`) });
server.get(/\/renders\/monster\/?.*/,
    restify.plugins.serveStatic({ directory: `${__dirname}/renders`, appendRequestPath: false})
);
server.post('/order/:details',
    Server.transformSanitizeAndSend
);
server.listen(globals.SERVER_PORT, function () { console.log('%s listening at %s', server.name, server.url); });

