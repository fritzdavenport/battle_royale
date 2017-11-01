import {Printful} from "./printful";
import _ from "lodash";
import {Character} from "./character";
import {Renderer} from "./renderer";
import {Notifier} from "./notifier";

let request = require('request');
let globals = require("../../globals.json");

class Server {
	static transformSanitizeAndSend(req, res, next) {
		console.log(`NEW ORDER FROM SHOPIFY \n details--> ${req.params} \n ${req.params.email} \n ${req.params.total_price}`);
		res.send(req.params); // todo - is this the right thing to send back...? The docs just say any "200"

		try {
            let printfulObject = Printful.getPrintfulRequestObject(req.params);
            printfulObject.items = _.map(req.params.line_items, Server.parseLineItems);
            request.post({
                url: globals.PRINTFUL_API_URL,
                body: JSON.stringify(printfulObject),
                headers: {
                    'Content-Type': ' application/json',
                    'Authorization': `Basic ${globals.PRINTFUL_AUTH_TOKEN}`
                }
            }, function optionalCallback(err, response, body) {
                if (err) throw err;
                if (body !== null &&  body.code !== 200) throw new Error(JSON.stringify(body));
            });
        } catch (err){
		    console.log(err);
		    Notifier.sendErrorMail(err, req)
        }

	}

    static parseLineItems(line_item) {
	    if (!line_item.hasOwnProperty("properties")){
	        throw new Error("Received Line Item without Properties")
        }

        let item = {
            "cut": _.find(line_item.properties, {'name': "Cut"})["value"],
            "size": _.find(line_item.properties, {'name': "Size"})["value"],
            "characters" : Character.getCharactersFromLineItem(line_item),
        };

        return {
            "variant_id": Printful.getPrintfulID(item.cut, item.size),
            "external_id": line_item.external_id,
            "quantity": line_item.quantity,
            "files": [
                {"url": Server.getServerUrlForMonster( Renderer.generateImageFromCharacters(item.characters) )},
                // {"type": "inside", "url": Server.getServerUrlForInside(item.size)} /* todo - ????*/
            ]
        };
    }

    static getServerUrlForMonster(image_id) {
        return `http://${globals.SERVER_URL}:${globals.SERVER_PORT}/renders/monster/${image_id}.png`
    }

    static getServerUrlForInside(size) {
        return `http://${globals.SERVER_URL}:${globals.SERVER_PORT}/renders/monster/inside/insideprint_${size}.png`
    }
}

export { Server };