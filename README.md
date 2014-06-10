escape-web
========================================

No peeking.

Development
----------------------------------------

	$ npm install -g grunt-cli
	$ npm install
	$ grunt dev

	Started connect web server on http://0.0.0.0:8080

Distribution
----------------------------------------

	$ grunt dist
	$ rsync -a target/dist/ webhost:/var/www/site.example.com/
