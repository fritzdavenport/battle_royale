"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ = require("lodash");
var globals = require("../../globals.json");

var Character = function () {
    function Character() {
        _classCallCheck(this, Character);
    }

    _createClass(Character, null, [{
        key: "getCharAndVariantId",
        value: function getCharAndVariantId(char, variant) {
            try {
                return [globals.CHAR_DICT[char.toLowerCase()]["id"], globals.CHAR_DICT[char.toLowerCase()]["variant"][variant.toLowerCase()]];
            } catch (e) {
                throw new Error("Malformed ID or Variant: Given(" + char + ", " + variant + "), searching in \n " + JSON.stringify(globals.CHAR_DICT));
            }
        }
    }, {
        key: "getCharactersFromLineItem",
        value: function getCharactersFromLineItem(item) {
            function findValueByName(name) {
                return _.find(item.properties, ['name', name])["value"];
            }

            var left_name = findValueByName("Left");
            var right_name = findValueByName("Right");

            var _Character$getCharAnd = Character.getCharAndVariantId(left_name, findValueByName(left_name)),
                _Character$getCharAnd2 = _slicedToArray(_Character$getCharAnd, 2),
                left_id = _Character$getCharAnd2[0],
                left_var_id = _Character$getCharAnd2[1];

            var _Character$getCharAnd3 = Character.getCharAndVariantId(right_name, findValueByName(right_name)),
                _Character$getCharAnd4 = _slicedToArray(_Character$getCharAnd3, 2),
                right_id = _Character$getCharAnd4[0],
                right_var_id = _Character$getCharAnd4[1];

            return {
                "left": { "id": left_id, "var": left_var_id, "image_url": this.getLocalImageUrl(left_id, left_var_id, true) },
                "right": { "id": right_id, "var": right_var_id, "image_url": this.getLocalImageUrl(right_id, right_var_id) }
            };
        }
    }, {
        key: "getLocalImageUrl",
        value: function getLocalImageUrl(id, variant) {
            var isLeft = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            try {
                return "../src_images/" + id.toString().toUpperCase() + "_" + variant.toString().toUpperCase() + "_" + (isLeft ? 'L' : 'R') + ".png";
            } catch (e) {
                throw new Error("Specified Image Combination Malformed " + id + ", " + variant);
            }
        }
    }]);

    return Character;
}();

exports.Character = Character;