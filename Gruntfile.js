module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.initConfig({
        sass: {
            dev: {
                expand: true,
                cwd: 'src',
                src: ['**/*.scss', '!**/_*.scss', '!bower_components/**/*.scss', '!node_modules/**/*.scss'],
                dest: './dist',
                ext: '.css',
                options: {
                    outputStyle: 'expanded'
                }
            }
        },

        cssmin: {
            min: {
                files: [{
                    expand: true,
                    cwd: 'dist',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist',
                    ext: '.min.css'
                }]
            }
        },
    });

    grunt.registerTask('build', ['sass', 'cssmin']);
    grunt.registerTask('default', ['build']);
}

