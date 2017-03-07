module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-sass');

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
            },
            compressed: {
                expand: true,
                cwd: 'src',
                src: ['**/*.scss', '!**/_*.scss', '!bower_components/**/*.scss', '!node_modules/**/*.scss'],
                dest: './dist',
                ext: '.min.css',
                options: {
                    outputStyle: 'compressed'
                }
            }
        }
    });

    grunt.registerTask('build', ['sass']);
    grunt.registerTask('default', ['build']);
}

