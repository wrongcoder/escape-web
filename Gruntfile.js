module.exports = function (grunt) {
	"use strict";

	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-ts");

	grunt.registerTask("dev", [ "ts:dev" ]);
	grunt.registerTask("dist", [ "clean", "ts:prod", "uglify:prod", "copy:dist" ]);
	grunt.registerTask("default", [ "dev" ]);

	grunt.initConfig({
		ts: {
			options: {
				removeComments: false,
			},
			dev: {
				baseDir: "app/src",
				src: [ "app/src/**/*.ts" ],
				reference: "app/reference.ts",
				out: "target/application.js",
			},
			prod: {
				baseDir: "app/src",
				src: [ "app/src/**/*.ts" ],
				reference: "app/reference.ts",
				out: "target/code.js",
			},
		},
		uglify: {
			prod: {
				src: [ "target/code.js" ],
				dest: "target/application.js",
			},
		},
		copy: {
			dist: {
				files: [
					{ expand: true, dest: "target/dist/", cwd: "target", src: [ "application.js" ] },
					{ expand: true, dest: "target/dist/", cwd: "app", src: [ "index.html", "static/**" ] },
				],
			},
		},
		clean: {
			clean: [ "target" ],
		},
	});

};
