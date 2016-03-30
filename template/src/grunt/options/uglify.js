module.exports = {
    options: {
        mangle: false
    },
    js: {
        files: {
            '<%= paths.dist %>/js/script.min.js':
            [
                '<%= paths.src %>/js/script.js'
            ]
        }
    }
}
