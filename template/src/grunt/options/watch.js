module.exports = {
	options: {
		livereload: true,
	},
	html: {
		files: ['<%= paths.dist %>/**/*.{html,php,inc}']
	},
	img: {
		files: '<%= paths.src %>/img/**/*',
		tasks: ['img']
	},
	sass: {
		files: '<%= paths.src %>/scss/**/*.scss',
		tasks: ['css']
	},
	js: {
		files: '<%= paths.src %>/js/**/*.js',
		tasks: ['js']
	}
}
