"use strict";

let chai = require('chai');
chai.should();
let Server = require("../src/util/server");

const SHOPIFY_REQUEST = {
    "body": {
        "id": 6392431366,
        "line_items": [
            {
                "id": 12084057030,
                "variant_id": 49589308486,
                "title": "Battle Royale",
                "quantity": 1,
                "price": "1.00",
                "grams": 0,
                "sku": "",
                "variant_title": "",
                "vendor": "rad-zero",
                "fulfillment_service": "manual",
                "product_id": 11644014918,
                "requires_shipping": true,
                "taxable": false,
                "gift_card": false,
                "name": "Battle Royale",
                "variant_inventory_management": null,
                "properties": [
                    {
                        "name": "Cut",
                        "value": "Womens Shirt"
                    },
                    {
                        "name": "Size",
                        "value": "XL"
                    },
                    {
                        "name": "Left",
                        "value": "Jesus Christ"
                    },
                    {
                        "name": "Right",
                        "value": "Santa Clause"
                    },
                    {
                        "name": "Jesus Christ",
                        "value": "Anointed Son"
                    },
                    {
                        "name": "Santa Clause",
                        "value": "Krampus"
                    }
                ],
                "product_exists": true,
                "fulfillable_quantity": 1,
                "total_discount": "0.00",
                "fulfillment_status": null,
                "tax_lines": [
                    {
                        "title": "VT State Tax",
                        "price": "0.00",
                        "rate": 0.06
                    },
                    {
                        "title": "Burlington Municipal Tax",
                        "price": "0.00",
                        "rate": 0.01
                    }
                ],
                "origin_location": {
                    "id": 3700942598,
                    "country_code": "US",
                    "province_code": "VT",
                    "name": "rad-zero",
                    "address1": "190 Church St #8",
                    "address2": "",
                    "city": "BURLINGTON",
                    "zip": "05401"
                },
                "destination_location": {
                    "id": 3726486662,
                    "country_code": "US",
                    "province_code": "VT",
                    "name": "Asa Alger",
                    "address1": "190 Church St #8",
                    "address2": "",
                    "city": "BURLINGTON",
                    "zip": "05401"
                }
            }
        ],
        "shipping_lines": [
            {
                "id": 5303666950,
                "title": "First Class Package",
                "price": "2.77",
                "code": "FirstPackage",
                "source": "usps",
                "phone": null,
                "requested_fulfillment_service_id": null,
                "delivery_category": null,
                "carrier_identifier": null,
                "tax_lines": [
                    {
                        "title": "VT State Tax",
                        "price": "0.17",
                        "rate": 0.06
                    },
                    {
                        "title": "Burlington Municipal Tax",
                        "price": "0.03",
                        "rate": 0.01
                    }
                ]
            }
        ],
        "billing_address": {
            "first_name": "Asa",
            "address1": "190 Church St #8",
            "phone": null,
            "city": "BURLINGTON",
            "zip": "05401",
            "province": "Vermont",
            "country": "United States",
            "last_name": "Alger",
            "address2": "",
            "company": null,
            "latitude": 44.47490699999999,
            "longitude": -73.21218499999999,
            "name": "Asa Alger",
            "country_code": "US",
            "province_code": "VT"
        },
        "shipping_address": {
            "first_name": "Asa",
            "address1": "190 Church St #8",
            "phone": null,
            "city": "BURLINGTON",
            "zip": "05401",
            "province": "Vermont",
            "country": "United States",
            "last_name": "Alger",
            "address2": "",
            "company": null,
            "latitude": 44.47490699999999,
            "longitude": -73.21218499999999,
            "name": "Asa Alger",
            "country_code": "US",
            "province_code": "VT"
        },
        "customer": {
            "id": 7399859398,
            "email": "asaalger@gmail.com",
            "accepts_marketing": false,
            "created_at": "2017-08-30T09:37:50-04:00",
            "updated_at": "2017-08-30T09:58:56-04:00",
            "first_name": "Asa",
            "last_name": "Alger",
            "orders_count": 0,
            "state": "disabled",
            "total_spent": "0.00",
            "last_order_id": null,
            "note": null,
            "verified_email": true,
            "multipass_identifier": null,
            "tax_exempt": false,
            "phone": null,
            "tags": "",
            "last_order_name": null,
            "default_address": {
                "id": 7776390278,
                "customer_id": 7399859398,
                "first_name": "Asa",
                "last_name": "Alger",
                "company": null,
                "address1": "190 Church St #8",
                "address2": "",
                "city": "BURLINGTON",
                "province": "Vermont",
                "country": "United States",
                "zip": "05401",
                "phone": null,
                "name": "Asa Alger",
                "province_code": "VT",
                "country_code": "US",
                "country_name": "United States",
                "default": true
            }
        }
    }
};


describe('Server', () => {
    describe('parseLineItems', () => {
        // Server.parseLineItems()
    });
});
