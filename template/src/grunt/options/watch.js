module.exports = {
	options: {
		livereload: true,
	},
	html: {
		files: ['<%= settings.dist %>/**/*.{html,php,inc}']
	},
	img: {
		files: '<%= settings.src %>/img/**/*',
		tasks: ['img']
	},
	sass: {
		files: '<%= settings.src %>/scss/**/*.scss',
		tasks: ['css']
	},
	js: {
		files: '<%= settings.src %>/js/**/*.js',
		tasks: ['js']
	}
}
