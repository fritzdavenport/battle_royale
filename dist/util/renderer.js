"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require("fs");
var child_process = require("child_process");
var globals = require("../../globals.json");

var Renderer = function () {
    function Renderer() {
        _classCallCheck(this, Renderer);
    }

    _createClass(Renderer, null, [{
        key: "generateImageFromCharacters",
        value: function generateImageFromCharacters(characters) {
            var isTest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var render_dir = (isTest ? "../test_resources" : "../") + "/renders/monster";
            var image_id = characters.left.id.toUpperCase() + "_" + characters.left.var.toUpperCase() + "+" + characters.right.id.toUpperCase() + "_" + characters.right.var.toUpperCase();
            var render_name = render_dir + "/" + image_id + ".png";
            if (fs.existsSync(characters.left.image_url) && fs.existsSync(characters.right.image_url)) {
                if (!fs.existsSync(render_name)) {
                    // if it hasn't been made yet
                    var cmd = "composite " + characters.left.image_url + " " + characters.right.image_url + " - > " + render_name;
                    try {
                        child_process.execSync("mkdir -p " + render_dir, { timeout: globals.COMPOSITE_TIMEOUT });
                        child_process.execSync(cmd, { timeout: globals.COMPOSITE_TIMEOUT });
                        return image_id;
                    } catch (e) {
                        throw new Error("Error executing - " + e);
                    }
                } else {
                    return image_id;
                }
            } else {
                if (!fs.existsSync(characters.left.image_url)) throw new Error("Missing character stub! " + characters.left.image_url);else throw new Error("Missing character stub! " + characters.right.image_url);
            }
        }
    }]);

    return Renderer;
}();

exports.Renderer = Renderer;