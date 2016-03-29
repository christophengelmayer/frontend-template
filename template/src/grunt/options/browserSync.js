module.exports = {
	bsFiles: {
		src: [
            '<%= settings.dist %>/css/*.css',
            '<%= settings.dist %>/js/**/*.js',
        ]
	},
	options: {
		watchTask: true,
		// proxy: '127.0.0.1:8010',
        // open: true,
        server: {
            baseDir: './'
        }
	}
}
