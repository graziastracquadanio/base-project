module.exports = function (grunt) {

	// PROJECT CONFIGURATION
	// ---------------------
	grunt.initConfig({
		// CONCAT
		// ------
		concat: {
			// OPTIONS
			options: {
				separator: "\n\n/**********************************************************/\n\n"
			},
			// JSPLUGIN
			jsplugins: {
				src: [
					'bower_components/angular/angular.js'
				],
				dest: 'dist/assets/js/plugins.js'
			},
			// FRONTEND
			frontend: {
				src: [
					'src/assets/js/*.js',
					'src/assets/js/controllers/*.js'
				],
				dest: 'dist/assets/js/main.js'
			}
		},
		// JSHINT
		// ------
		jshint: {
			options: {
				debug: true
			},
			// DEVELOPMENT
			dev: [
				'Gruntfile.js',
				'src/assets/js/*.js',
				'src/assets/js/controllers/*.js'
			],
			// PRODUCTION
			dist: [
				'dist/assets/js/main.js'
			]
		},
		// UGLIFY
		// ------
		uglify: {
			// OPTIONS
			options: {
				mangle: false
			},
			// JSPLUGINS
			jsplugins: {
				files: {
					'dist/assets/js/plugins.min.js': 'dist/assets/js/plugins.js'
				}
			},
			// FRONTEND
			frontend: {
				files: {
					'dist/assets/js/main.min.js': 'dist/assets/js/main.js'
				}
			}
		},
		// AUTOPREFIXER
		// ------------
		autoprefixer: {
			dist: {
				src: 'dist/assets/css/main.css'
			}
		},
		// CSSMIN
		// ------
		cssmin: {
			dist: {
				files: {
					'dist/assets/css/main.min.css': 'dist/assets/css/main.css'
				}
			}
		},
		// LESS
		// ----
		less: {
			// PRODUCTION
			dev: {
				options: {
					cleancss: true
				},
				files: {
					"dist/assets/css/main.css": "src/assets/less/main.less"
				}
			}
		},
		// WATCH
		// ------
		watch: {
			// CSS
			css: {
				files: [
					'src/assets/less/*.less',
					'src/assets/less/*/*.less'
				],
				tasks: [
					'less:dev',
					'autoprefixer:dist'
				],
				options: {
					livereload: true
				}
			},
			// JS
			js: {
				files: [
					'src/assets/js/*.js',
					'src/assets/js/controllers/*.js'
				],
				tasks: [
					'jshint:dev',
					'concat:frontend',
					'uglify:frontend'
				],
				options: {
					livereload: true
				}
			}
		}

	});


	// LOAD GRUNT PLUGINS
	// ------------------
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-autoprefixer');


	// DEFAULT TASK(S)
	// ---------------
	grunt.registerTask('default', [
		'jshint:dev',
		'concat:frontend',
		'less:dev',
		'autoprefixer:dist'
	]);

	// START TASK(S)
	// -------------------------
	grunt.registerTask('start', [
		'concat:jsplugins',
		'uglify:jsplugins'
	]);

	// DIST TASK(S)
	// -------------------------
	grunt.registerTask('dist', [
		
	]);
};