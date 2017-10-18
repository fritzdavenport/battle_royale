
class FakeShopify {
    constructor(){

        var CUR_SERVER = "localhost";

        var request = require('request');

        var counter = 1;
        var msgTimer = setInterval(function(){

            var options = {
                url: 'http://'+CUR_SERVER+':8080/order/order'+counter,
                body: '{"id":6392431366,"email":"asaalger@gmail.com","closed_at":null,"created_at":"2017-08-30T09:58:56-04:00","updated_at":"2017-08-30T09:58:56-04:00","number":3,"note":null,"token":"8e5550eb00c070dce06dc173d87a0c2a","gateway":"shopify_payments","test":true,"total_price":"3.97","subtotal_price":"1.00","total_weight":0,"total_tax":"0.20","taxes_included":false,"currency":"USD","financial_status":"paid","confirmed":true,"total_discounts":"0.00","total_line_items_price":"1.00","cart_token":"435dac4195ef76a123225b12a2aaa3b1","buyer_accepts_marketing":false,"name":"#1003","referring_site":"","landing_site":"\/admin\/account_setup?pos=","cancelled_at":null,"cancel_reason":null,"total_price_usd":"3.97","checkout_token":"7d3e79b3138ad9b8182d85a28771a28b","reference":null,"user_id":null,"location_id":null,"source_identifier":null,"source_url":null,"processed_at":"2017-08-30T09:58:56-04:00","device_id":null,"phone":null,"customer_locale":"en","app_id":580111,"browser_ip":"50.198.120.122","landing_site_ref":null,"order_number":1003,"discount_codes":[],"note_attributes":[],"payment_gateway_names":["shopify_payments"],"processing_method":"direct","checkout_id":17003040390,"source_name":"web","fulfillment_status":null,"tax_lines":[{"title":"VT State Tax","price":"0.17","rate":0.06},{"title":"Burlington Municipal Tax","price":"0.03","rate":0.01}],"tags":"","contact_email":"asaalger@gmail.com","order_status_url":"https:\/\/checkout.shopify.com\/22979085\/checkouts\/7d3e79b3138ad9b8182d85a28771a28b\/thank_you_token?key=5e0b8e439a65a4dc136346c55789b7b4","line_items":[{"id":12084057030,"variant_id":49589308486,"title":"Battle Royale","quantity":1,"price":"1.00","grams":0,"sku":"","variant_title":"","vendor":"rad-zero","fulfillment_service":"manual","product_id":11644014918,"requires_shipping":true,"taxable":false,"gift_card":false,"name":"Battle Royale","variant_inventory_management":null,"properties":[{"name":"Cut","value":"Womens Shirt"},{"name":"Size","value":"XL"},{"name":"Left","value":"Jesus Christ"},{"name":"Right","value":"Santa Clause"},{"name":"Jesus Christ","value":"Anointed Son"},{"name":"Santa Clause","value":"Krampus"}],"product_exists":true,"fulfillable_quantity":1,"total_discount":"0.00","fulfillment_status":null,"tax_lines":[{"title":"VT State Tax","price":"0.00","rate":0.06},{"title":"Burlington Municipal Tax","price":"0.00","rate":0.01}],"origin_location":{"id":3700942598,"country_code":"US","province_code":"VT","name":"rad-zero","address1":"190 Church St #8","address2":"","city":"BURLINGTON","zip":"05401"},"destination_location":{"id":3726486662,"country_code":"US","province_code":"VT","name":"Asa Alger","address1":"190 Church St #8","address2":"","city":"BURLINGTON","zip":"05401"}}],"shipping_lines":[{"id":5303666950,"title":"First Class Package","price":"2.77","code":"FirstPackage","source":"usps","phone":null,"requested_fulfillment_service_id":null,"delivery_category":null,"carrier_identifier":null,"tax_lines":[{"title":"VT State Tax","price":"0.17","rate":0.06},{"title":"Burlington Municipal Tax","price":"0.03","rate":0.01}]}],"billing_address":{"first_name":"Asa","address1":"190 Church St #8","phone":null,"city":"BURLINGTON","zip":"05401","province":"Vermont","country":"United States","last_name":"Alger","address2":"","company":null,"latitude":44.47490699999999,"longitude":-73.21218499999999,"name":"Asa Alger","country_code":"US","province_code":"VT"},"shipping_address":{"first_name":"Asa","address1":"190 Church St #8","phone":null,"city":"BURLINGTON","zip":"05401","province":"Vermont","country":"United States","last_name":"Alger","address2":"","company":null,"latitude":44.47490699999999,"longitude":-73.21218499999999,"name":"Asa Alger","country_code":"US","province_code":"VT"},"fulfillments":[],"client_details":{"browser_ip":"50.198.120.122","accept_language":"en-US,en;q=0.8,la;q=0.6","user_agent":"Mozilla\/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/60.0.3112.113 Safari\/537.36","session_hash":"757a6a03ef4413c57a6e7fc7c5a61776","browser_width":1280,"browser_height":676},"refunds":[],"payment_details":{"credit_card_bin":"424242","avs_result_code":"Y","cvv_result_code":"M","credit_card_number":"•••• •••• •••• 4242","credit_card_company":"Visa"},"customer":{"id":7399859398,"email":"asaalger@gmail.com","accepts_marketing":false,"created_at":"2017-08-30T09:37:50-04:00","updated_at":"2017-08-30T09:58:56-04:00","first_name":"Asa","last_name":"Alger","orders_count":0,"state":"disabled","total_spent":"0.00","last_order_id":null,"note":null,"verified_email":true,"multipass_identifier":null,"tax_exempt":false,"phone":null,"tags":"","last_order_name":null,"default_address":{"id":7776390278,"customer_id":7399859398,"first_name":"Asa","last_name":"Alger","company":null,"address1":"190 Church St #8","address2":"","city":"BURLINGTON","province":"Vermont","country":"United States","zip":"05401","phone":null,"name":"Asa Alger","province_code":"VT","country_code":"US","country_name":"United States","default":true}}}',
                headers: {
                    'Accept':' */*',
                    'X-Shopify-Shop-Domain':' test-store-3f4j89jg.myshopify.com',
                    'Content-Type':' application/json',
                    'Cf-Ray':' 390553d9de5f2450-IAD',
                    'X-Shopify-Test':' true',
                    'X-Shopify-Hmac-Sha256':' DiRJ3pBSWVQszP7AK3Wp1QvoqShYWpKPnuddAFn7U1E=',
                    'Connection':' close',
                    'Cf-Visitor':{"scheme":"https"},
                    'X-Request-Id':' ec00c731-9c22-47a9-925f-d36395e4d212',
                    'Via':' 1.1 vegur',
                    'X-Shopify-Topic':' orders/paid',
                    'X-Shopify-Order-Id':' 820982911946154508',
                }
            };

            console.log("sending...");
            request.post(options, function optionalCallback(err, response, body) {
                if (err) {
                    return console.error('upload failed:', err);
                }
                console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            });
            console.log("send done");

            counter++;

        }, 1500);
    }
}