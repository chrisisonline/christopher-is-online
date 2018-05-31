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
		}

	});

	//load-grunt-tasks loads all packages starting with grunt
	//Manual loading would look like [grunt.loadNpmTasks('grunt-whatever')]
	require('load-grunt-tasks')(grunt);


	//My Tasks
	grunt.registerTask('default', []);


}
