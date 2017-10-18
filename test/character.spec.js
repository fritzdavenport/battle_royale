"use strict";

let chai = require('chai');
const assert = require("assert");
chai.should();
let Character = require("../src/util/character").Character;

const LINE_ITEM_PROPERTIES = {"properties": [{"name": "Cut", "value": "Womens Shirt"}, {"name": "Size", "value": "XL"}, {"name": "Left", "value": "Jesus Christ"}, {"name": "Right", "value": "Santa Clause"}, {"name": "Jesus Christ", "value": "Anointed Son"}, {"name": "Santa Clause", "value": "Krampus"}]};

describe('Character', () => {
    describe('getCharAndVariantId', () => {
        it("should behave as expected", () => {
            Character.getCharAndVariantId("jesus christ", "super jesus")[0].should.equal("jes");
            Character.getCharAndVariantId("jesus christ", "super jesus")[1].should.equal("004");

            assert.throws(() => {
                Character.getCharAndVariantId(null, null)
            }, Error, "" );
        })
    });

    describe('getFromLineItem', () => {
        it('should behave as expected', () => {
            let actual = Character.getCharactersFromLineItem(LINE_ITEM_PROPERTIES);
            actual.left.id.should.equal("jes");
            actual.left.var.should.equal("003");

            actual.right.id.should.equal("san");
            actual.right.var.should.equal("004");
        });
    });


    describe('getLocalImageUrl', () => {
        it('should behave as expected', () => {
            Character.getLocalImageUrl(1, 2, false).should.equal("../src_images/1_2_R.png");
            Character.getLocalImageUrl("a", "abc", true).should.equal("../src_images/A_ABC_L.png");
            assert.throws(() => {
                Character.getLocalImageUrl(null, null, true)
            }, Error, "");
        });
    });
});
