
const fs = require("fs");
const child_process = require("child_process");
let globals = require("../globals.json");

class Renderer {
    static generateImageFromCharacters(characters, isTest = false){
        let render_dir = `${isTest?"test_resources":"."}/renders/monster`;
        let image_id = `${characters.left.id.toUpperCase()}_${characters.left.var.toUpperCase()}+${characters.right.id.toUpperCase()}_${characters.right.var.toUpperCase()}`;
        let render_name = `${render_dir}/${image_id}.png`;
        if (fs.existsSync(characters.left.image_url) && fs.existsSync(characters.right.image_url)){
            if (!fs.existsSync(render_name)){ // if it hasn't been made yet
                let cmd = `composite ${characters.left.image_url} ${characters.right.image_url} - > ${render_name}`;
                try {
                    child_process.execSync(`mkdir -p ${render_dir}`, {timeout: globals.COMPOSITE_TIMEOUT});
                    child_process.execSync(cmd, {timeout: globals.COMPOSITE_TIMEOUT});
                    return image_id;
                } catch (e){
                    throw new Error(`Error executing - ${e}`);
                }
            } else {
                return image_id;
            }
        } else {
            if (!fs.existsSync(characters.left.image_url)) throw new Error(`Missing character stub! ${characters.left.image_url}`);
            else throw new Error(`Missing character stub! ${characters.right.image_url}`)
        }
    }
}

export { Renderer };