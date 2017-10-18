"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var globals = require("../../globals.json");
var nodemailer = require("nodemailer");
var aws = require('aws-sdk');

var Notifier = function () {
    function Notifier() {
        _classCallCheck(this, Notifier);
    }

    _createClass(Notifier, null, [{
        key: "sendErrorMail",
        value: function sendErrorMail(error) {
            nodemailer.createTransport({ SES: new aws.SES({ apiVersion: '2010-12-01' }) }).sendMail({
                from: globals.FROM_EMAIL_ADDRESS,
                to: globals.TO_EMAIL_ADDRESS,
                subject: "Battle Royale API Error",
                text: error.toString()
            }, function (error, _) {
                // now you're really fucked...
                if (error) {
                    return console.log(error);
                }
            });
        }
    }]);

    return Notifier;
}();

exports.Notifier = Notifier;