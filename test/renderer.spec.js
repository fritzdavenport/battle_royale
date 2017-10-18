"use strict";

let chai = require('chai');
const child_process = require("child_process");
chai.should();
import {Renderer} from "../util/renderer";
const fs = require("fs");

const test_render_name = "./test_resources/renders/monster/JES_003+SAN_002.png";

function delTestImage() {
    child_process.execSync(`rm -f ${test_render_name}`)
}

describe('Renderer', () => {
    describe('generateImageFromCharacters', () => {
        delTestImage();
        fs.existsSync(test_render_name).should.equal(false);
        Renderer.generateImageFromCharacters({
            "left":{"id":"jes","var":"003","image_url":"./src_images/JES_003_L.png"},
            "right":{"id":"san","var":"002","image_url":"./src_images/SAN_002_R.png"}
        }, true).should.equal("JES_003+SAN_002");
        fs.existsSync(test_render_name).should.equal(true);
        delTestImage();
    })
});