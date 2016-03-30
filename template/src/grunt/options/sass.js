module.exports = {
  dist: {
    options: {
      outputStyle: 'compressed',
      sourceMap: true
    },
    files: {
	'<%= paths.dist %>/css/style.min.css': '<%= paths.src %>/scss/style.scss'
    }
  }
}
