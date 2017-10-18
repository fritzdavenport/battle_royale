'use strict';

let globals = require('../../globals');

class Printful {
    static getPrintfulID(cut, size) {
        try {
            return globals.PRINTFUL_CUTS[cut.toLowerCase()][size.toLowerCase()]
        } catch (e){
            return null
        }
    }

    static getPrintfulRequestObject(params) {
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
        }
    }
}

export { Printful }
