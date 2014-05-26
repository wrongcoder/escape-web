angularjs-typescript-template
========================================

This is a starting point for building [AngularJS](https://angularjs.org/)
projects in [TypeScript](http://www.typescriptlang.org/).

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
