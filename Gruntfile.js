'use strict';

module.exports = function(grunt) {
    // Show elapsed time after tasks run to visualize performance
    require('time-grunt')(grunt);
    // Load all Grunt tasks that are listed in package.json automagically
    require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

        shell: {
            jekyllBuild: {
                command: 'bundle exec jekyll build'
            },
            jekyllServe: {
                command: 'bundle exec jekyll serve'
            },
            htmlproof: {
            	command:  'bundle exec rake test'
        	}
        },

        watch: {
            styles: {
		        files: ['_sass/**/*.{scss,sass}'], // which files to watch
		        tasks: ['sass', 'autoprefixer', 'cssmin'],
		        options: {
		          nospawn: true
		        }
	      	},

			js: {
				files: ['_js/*.js'],
				tasks: ['concat', 'uglify']
			}
        },

        concat: {
			options: {
				separator: ';'
			},

			dist: {
				src: ['_js/jquery.mobile.custom.min.js', '_js/bootstrap.min.js', '_js/app.js'],
				dest: 'assets/js/main.js'
			}
		},

		autoprefixer: {
			dist: {
				src: 'assets/css/main.css',
				dest: 'assets/css/main.css'
			}
		},

        sass: {
            options: {
                sourceMap: true,
                relativeAssets: false,
                outputStyle: 'expanded',
                sassDir: '_sass',
                cssDir: 'assets/css'
            },
            build: {
                files: [{
                    expand: true,
                    cwd: '_sass/',
                    src: ['**/*.{scss,sass}'],
                    dest: 'assets/css',
                    ext: '.css'
                }]
            }
        },

        uglify: {
		  	options: {
		    	mangle: false,
		    	sourceMap: true,
		    	sourceMapName: 'assets/js/main.js.map'
		  	},
		  	my_target: {
		    	files: {
		      		'assets/js/main.min.js': ['assets/js/main.js']
	    		}
		  	}
	    },

	    cssmin: {
      		target: {
	        	files:[{
		            expand:true,
		            cwd:'assets/css',
		            src:['main.css'],
		            dest:'assets/css',
		            ext:'.min.css'
	        	}]
	      	}
	    },

     	concurrent: {
            serve: [
                'sass',
                'autoprefixer',
		        'cssmin',
		        'concat',
		        'uglify',
                'watch',
                'shell:jekyllServe'
            ],
            options: {
                logConcurrentOutput: true
            }
        },


    	//Image Compression
        imagemin: {
	      dynamic: {
	          files: [{
	              expand: true,
	              cwd: 'assets/images',
	              src: ['**/*/*.{png,jpg}'],
	              dest: 'assets/images'
	          }]
	      }
	    },

	    //tests
	    jshint: {
		    options: {
		    	jquery: true,
		      	curly: true,
		      	eqeqeq: true,
		      	eqnull: true,
		      	browser: true,
		      	unused: true,
		      	undef: true,
		      	globals: {
			        jQuery: true,
			        'console': true
		      	},
		      	reporter: require('jshint-stylish')
		    },
		    src: ['_js/app.js']
	  	}
	});


    grunt.registerTask('serve', [
        'concurrent:serve'
    ]);

    grunt.registerTask('build', [
        'sass',
        'autoprefixer',
        'cssmin',
        'concat',
        'uglify',
        'shell:jekyllBuild'
    ]);

    grunt.registerTask('compress-images', 'imagemin');

    grunt.registerTask('test', ['jshint', 'shell:htmlproof']);

    grunt.registerTask('default', 'build');
};
