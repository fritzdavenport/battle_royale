"use strict";

let chai = require('chai');
chai.should();
let Printful = require("../src/util/printful").Printful;

describe('Printful', () => {
    describe('getPrintfulCutID', () => {
        Printful.getPrintfulID('MEns shIrt', 'xS').should.equal('8089');
    })

});
