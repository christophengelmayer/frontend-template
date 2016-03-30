module.exports = {
	dynamic: {
		options: {
			optimizationLevel: 7
		},
		files: [{
			expand: true,
			cwd: '<%= paths.src %>/img/',
			src: ['**/*.{png,jpg,gif,svg}'],
			dest: '<%= paths.dist %>/img/'
		}]
	}
}
