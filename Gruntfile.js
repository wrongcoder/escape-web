module.exports = function (grunt) {
	"use strict";

	grunt.loadNpmTasks("grunt-contrib-clean");

	grunt.registerTask("dev", [ ]);
	grunt.registerTask("dist", [ "clean" ]);
	grunt.registerTask("default", [ "dev" ]);

	grunt.initConfig({
		clean: {
			clean: [ "target" ],
		},
	});

};
