module.exports = function (grunt) {
	"use strict";

	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-connect");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-processhtml");
	grunt.loadNpmTasks("grunt-ts");

	grunt.registerTask("dev", [ "connect:dev", "ts:dev" ]);
	grunt.registerTask("dist", [ "clean", "ts:prod", "uglify:prod", "less:prod", "processhtml:prod", "copy:dist" ]);
	grunt.registerTask("test", [ "dist", "connect:dist:keepalive" ]);
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
				watch: "app/src",
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
		less: {
			prod: {
				files: {
					"target/style.css": "app/style.less",
				},
				options: {
					strictImports: true,
					strictMath: true,
					strictUnits: true,
				},
			},
		},
		processhtml: {
			prod: {
				files: {
					"target/index.html": "app/index.html",
				},
			},
		},
		copy: {
			dist: {
				files: [
					{ expand: true, dest: "target/dist/", cwd: "target", src: [ "index.html", "style.css", "application.js" ] },
					{ expand: true, dest: "target/dist/", cwd: "app", src: [ "static/**", "view/**" ] },
				],
			},
		},
		connect: {
			options: {
				port: 8080,
				hostname: "*",
			},
			dev: {
				options: {
					base: [ "app", "target" ],
				},
			},
			dist: {
				options: {
					base: [ "target/dist" ],
				}
			},
		},
		clean: {
			clean: [ "target" ],
		},
	});

};
