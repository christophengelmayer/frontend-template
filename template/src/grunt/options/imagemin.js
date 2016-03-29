module.exports = {
	dynamic: {
		options: {
			optimizationLevel: 7
		},
		files: [{
			expand: true,
			cwd: '<%= settings.src %>/img/',
			src: ['**/*.{png,jpg,gif,svg}'],
			dest: '<%= settings.dist %>/img/'
		}]
	}
}
