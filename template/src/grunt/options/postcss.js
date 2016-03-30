module.exports = {
    options: {
        map: {
            inline: false,
        },
        processors: [
            require('autoprefixer')({
                browsers: ['last 2 versions', 'ie 9', 'ie 10']
            })
        ]
    },
    dist: {
        src: '<%= paths.dist %>/css/*.css'
    }
}
