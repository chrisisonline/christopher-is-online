// Wrapper Function
module.exports = function(grunt) {

	//Project Config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		//Grunt Sass (https://www.npmjs.com/package/grunt-sass)
		sass: {
			options: {
				sourceMap: true,
			},
			dist: {
				files: {
					'css/styles.css': 'assets/scss/styles.scss',
				}
			}
		},
		//Grunt Uglify (https://www.npmjs.com/package/grunt-contrib-uglify)
		//Concatenates js files
		uglify: {
			my_target: {
				files: {
					'js/scripts.js' : [
						'assets/js/scripts.js',
						'node_modules/jquery/dist/jquery.js',]
				}

			}
		},

		//Grunt Watch (https://www.npmjs.com/package/grunt-contrib-watch)
		watch: {
			sass: {
				files: [
					'assets/scss/*.scss'
				],
				tasks: [
					'sass'
				]
			},
			scripts: {
				files: [
					'assets/js/*.js'
				],
				tasks: [
					'uglify'
				]
			}
		},
	});

	//load-grunt-tasks loads all packages starting with grunt
	//Manual loading would look like [grunt.loadNpmTasks('grunt-whatever')]
	require('load-grunt-tasks')(grunt);


	//My Tasks
	grunt.registerTask('default', ['watch']);


}
