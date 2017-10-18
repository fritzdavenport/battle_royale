"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Server = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _printful = require("./printful");

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _character = require("./character");

var _renderer = require("./renderer");

var _notifier = require("./notifier");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var request = require('request');
var globals = require("../../globals.json");

var Server = function () {
    function Server() {
        _classCallCheck(this, Server);
    }

    _createClass(Server, null, [{
        key: "transformSanitizeAndSend",
        value: function transformSanitizeAndSend(req, res, next) {
            console.log("NEW ORDER FROM SHOPIFY \n details--> " + req.params + " \n " + req.params.email + " \n " + req.params.total_price);
            res.send(req.params); // todo - is this the right thing to send back...? The docs just say any "200"

            try {
                var printfulObject = _printful.Printful.getPrintfulRequestObject(req.params);
                printfulObject.items = _lodash2.default.map(req.params.line_items, Server.parseLineItems);
                request.post({
                    url: globals.PRINTFUL_API_URL,
                    body: JSON.stringify(printfulObject),
                    headers: {
                        'Content-Type': ' application/json',
                        'Authorization': "Basic " + globals.PRINTFUL_AUTH_TOKEN
                    }
                }, function optionalCallback(err, _, __) {
                    if (err) throw err;
                });
            } catch (err) {
                _notifier.Notifier.sendErrorMail(err);
            }
        }
    }, {
        key: "parseLineItems",
        value: function parseLineItems(line_item) {
            var item = {
                "cut": _lodash2.default.find(line_item.properties, { 'name': "Cut" })["value"],
                "size": _lodash2.default.find(line_item.properties, { 'name': "Size" })["value"],
                "characters": _character.Character.getCharactersFromLineItem(line_item)
            };

            return {
                "variant_id": _printful.Printful.getPrintfulID(item.cut, item.size),
                "external_id": line_item.external_id,
                "quantity": line_item.quantity,
                "files": [{ "url": this.getServerUrlForMonster(_renderer.Renderer.generateImageFromCharacters(item.characters)) }, { "type": "inside", "url": this.getServerUrlForInside(item.size) /* todo - ????*/
                }]
            };
        }
    }, {
        key: "getServerUrlForMonster",
        value: function getServerUrlForMonster(image_id) {
            return "http://" + globals.SERVER_URL + ":" + globals.SERVER_PORT + "/renders/monster/" + image_id + ".png";
        }
    }, {
        key: "getServerUrlForInside",
        value: function getServerUrlForInside(size) {
            return "http://" + globals.SERVER_URL + ":" + globals.SERVER_PORT + "/renders/monster/inside/insideprint_" + size + ".png";
        }
    }]);

    return Server;
}();

exports.Server = Server;