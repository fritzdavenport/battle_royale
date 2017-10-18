import restify from "restify";
import {Server} from "./util/server";

let globals = require("./globals.json");

const server = restify.createServer({
  name: 'battle_royale',
  version: '1.0.0'
});
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser({ mapParams: true }));
server.get(/\/renders\/monster\/?.*/,
    restify.plugins.serveStatic({ directory: `${__dirname}/renders`, appendRequestPath: false})
);
server.post('/order/:details',
    Server.transformSanitizeAndSend
);
server.listen(globals.SERVER_PORT, function () { console.log('%s listening at %s', server.name, server.url); });

