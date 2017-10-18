# BattleRoyale API Service
Code for a node.js (ES6) API which receives and parses orders from shopify (APIVER 2017-10),
and sends orders to be drop shipped via printful (APIVER 2017-10).

- Code entry point is `index.js`.
- Main transformation logic is contained in `utils/server.js`.
- Parsing of characters is contained to `utils/characters.js`
- Email notifier (uses SES - simple email service from AWS) is in `utils/notifier.js`
- Printful specific logic is contained in `utils/printful.js`
- Rendering logic for composing pictures is in `utils/renderer.js`
- Artwork is located in `src_images`

----
## NOTE
Application secrets are contained within an encrypted `globals.json`, that file must be unencrypted for the application to function.
File is encrypted with the same password that was originally on the AWS account. It can be unencrypted with the following command:
- `gpg globals.json.gpg`
You may need to install gpg with one of
- `brew install gpg`
- `yum install gpg`
- `pacman -S gpg`
- if none of these work, google it
---- 
# Installation
- `npm install`
Dependencies are installed to `node_modules/`

# Starting
- `npm start`
Default port is defined in `globals.json`

# Testing
- `npm test` 
Tests and test utilities are located under `test/`
Tests will write any files to `test_resources/`

# Production Setup
- Build a t2.micro EC2, with 30GB Storage, with :80 and :22 open to `ANYWHERE`
- Unencrypt the access key `gpg battle_royale.pem.gpg`
- Ensure the keys is secured `chmod 0600 battle_royale.pem`
- Attach `battle_royale.pem` to the EC2 as its access key
- Login `ssh -i ./battle_royale.pem ec2-user @52.90.55.36`
- install node, npm, git `curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash - && sudo yum -y install nodejs npm git`