'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var globals = require('../../globals');

var Printful = function () {
    function Printful() {
        _classCallCheck(this, Printful);
    }

    _createClass(Printful, null, [{
        key: 'getPrintfulID',
        value: function getPrintfulID(cut, size) {
            try {
                return globals.PRINTFUL_CUTS[cut.toLowerCase()][size.toLowerCase()];
            } catch (e) {
                return null;
            }
        }
    }, {
        key: 'getPrintfulRequestObject',
        value: function getPrintfulRequestObject(params) {
            return {
                shipping: "STANDARD",
                "recipient": {
                    "name": params.shipping_address.name,
                    "address1": params.shipping_address.address1,
                    "company": params.shipping_address.company,
                    "city": params.shipping_address.city,
                    "state_code": params.shipping_address.province_code,
                    "country_code": params.shipping_address.country_code,
                    "zip": params.shipping_address.zip,
                    "phone": params.shipping_address.phone,
                    "email": params.customer.email
                },
                items: []
            };
        }
    }]);

    return Printful;
}();

exports.Printful = Printful;