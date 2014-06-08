module.exports = function (grunt) {
	"use strict";

	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-connect");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-targethtml");
	grunt.loadNpmTasks("grunt-ts");

	grunt.registerTask("dev", [ "connect:dev", "ts:dev" ]);
	grunt.registerTask("dist", [ "clean", "ts:prod", "uglify:prod", "less:prod", "targethtml:prod", "copy:dist" ]);
	grunt.registerTask("test", [ "dist", "connect:dist:keepalive" ]);
	grunt.registerTask("default", [ "dev" ]);

	grunt.initConfig({
		ts: {
			options: {
				removeComments: false,
			},
			dev: {
				baseDir: "app",
				src: [ "app/src/**/*.ts" ],
				reference: "app/reference.ts",
				outDir: "target",
				watch: "app/src",
			},
			prod: {
				baseDir: "app/src",
				src: [ "app/src/**/*.ts" ],
				reference: "app/reference.ts",
				out: "target/code.js",
				options: {
					fast: "never",
				},
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
		targethtml: {
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
					{ expand: true, dest: "target/dist/", cwd: "app", src: [ "static/**", "view/**", "!view/static/**", "!**/*.xcf" ] },
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
					base: [ "app", "target", "" ],
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
