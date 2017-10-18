# BattleRoyale API Service
Code for a node.js API which recieves and parses orders from shopify (APIVER 2017-10),
and sends orders to be drop shipped via printful.

Code entry point is `index.js`. 
Main transformation logic is contained in `utils/server.js`.
Parsing of characters is confined to `utils/characters.js`

Artwork is located in `src_images`
----
## NOTE
Application secrets are contained within an encrypted `globals.json`, that file must be unencrypted for the application to function.
File is encrypted with the same password that was originally on the AWS account.
---- 
# Installation
- `npm install`

# Starting
- `npm start`

# Testing
- `npm test` 
Tests are located under `/test`
