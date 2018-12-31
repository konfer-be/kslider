module.exports = function(grunt) {

	grunt.initConfig({
		uglify: {
			all: {
				options: {
					mangle: true,
					sourceMap: true,
					sourceMapName: 'dist/js/sourcemap.map'
				},
				files: {
					"dist/js/jquery.kslider.min.js": [
						'src/js/jquery.kslider.js'
					],
                    "demo/js/jquery.kslider.min.js": [
                        'src/js/jquery.kslider.js'
                    ]
				}
			}
		},
		concat: {
			options: {
				separator: ';'
			},
			scripts: {
				src: [
					'src/vendors/jquery/dist/jquery.min.js',
					'src/js/kslider.js'
				],
				dest: 'dist/js/app.js'
			}
		},
		sass: {                              // Task
			dist: {                            // Target
				options: {                       // Target options
					style: 'expanded'
				},
				files: {                         							
					'dist/css/kslider.css': [ 'src/sass/kslider.scss' ],
					'demo/css/demo.css': [ 'src/sass/demo.scss' ],
				}
			}
		},
		less: {
			main: {
				options: {
					paths: ["src/less/"]
				},
				files: {
					"src/css/kslider.css": "src/less/main.less",
					"dist/css/kslider.css": "src/less/main.less",
					"demo/css/kslider.css": "src/less/main.less",
					"demo/css/demo.css": "src/less/demo.less"
				}
			}
		},
		watch: {
			styles: {
				files: [
					'src/less/*.less'
				],
				tasks: ['less'],
				options: {
					spawn: false
				}
			},
			scripts: {
				files: [
					'src/js/**/*.js'
				],
				tasks: ['concat:scripts']
			}
		},
		cssmin: {
			main: {
				options: {
					shorthandCompacting: false,
					roundingPrecision: -1
				},
				target: {
					files: {
						'src/css/kslider.min.css': ['src/css/kslider.css']
					}
				}
			}
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				eqnull: true,
				browser: true,
				globals: {
					jQuery: true
				}
			},
			uses_defaults: [
				'src/js/*.js'
			],
			with_overrides: {
				options: {
					curly: false,
					undef: true
				},
				files: {
					src: [
						'src/js/*.js'
					]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');

	grunt.registerTask('default', ['watch']);
	grunt.registerTask('dev', ['watch']);
};