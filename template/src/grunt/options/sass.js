module.exports = {
  dist: {
    options: {
      outputStyle: 'compressed',
      sourceMap: true
    },
    files: {
	'<%= settings.dist %>/css/style.min.css': '<%= settings.src %>/scss/style.scss'
    }
  }
}
