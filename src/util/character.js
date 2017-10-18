
const _ = require("lodash");
let globals = require("../../globals.json");

class Character {
    static getCharAndVariantId(char, variant) {
        try {
            return [globals.CHAR_DICT[char.toLowerCase()]["id"], globals.CHAR_DICT[char.toLowerCase()]["variant"][variant.toLowerCase()]];
        } catch (e) {
            throw new Error(`Malformed ID or Variant: Given(${char}, ${variant}), searching in \n ${JSON.stringify(globals.CHAR_DICT)}`);
        }
    }

    static getCharactersFromLineItem(item){
        function findValueByName(name){
            return _.find(item.properties, ['name', name])["value"]
        }

        let left_name = findValueByName("Left");
        let right_name = findValueByName("Right");
        let [left_id, left_var_id] = Character.getCharAndVariantId(left_name, findValueByName(left_name));
        let [right_id, right_var_id] = Character.getCharAndVariantId(right_name, findValueByName(right_name));
        return {
            "left": {"id":left_id, "var":left_var_id, "image_url": this.getLocalImageUrl(left_id, left_var_id, true)},
            "right": {"id":right_id, "var":right_var_id, "image_url": this.getLocalImageUrl(right_id, right_var_id)}
        }
    }

    static getLocalImageUrl(id, variant, isLeft = false){
        try {
            return `../src_images/${id.toString().toUpperCase()}_${variant.toString().toUpperCase()}_${isLeft ? 'L' : 'R'}.png`
        } catch (e){
            throw new Error(`Specified Image Combination Malformed ${id}, ${variant}`)
        }
    }

}

export { Character };