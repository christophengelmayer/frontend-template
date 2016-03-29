module.exports = {
    options: {
        mangle: false
    },
    js: {
        files: {
            '<%= settings.dist %>/js/script.min.js':
            [
                '<%= settings.src %>/js/script.js'
            ]
        }
    }
}
