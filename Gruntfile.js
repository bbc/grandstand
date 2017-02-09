module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.initConfig({
        sass: {
            dist: {
                expand: true,
                cwd: 'sass',
                src: ['./src/*.scss'],
                dest: './dist',
                ext: '.css',
                options: {
                    outputStyle: 'compressed'
                }
            }
        },
        postcss: {
            options: {
                map: false,
                processors: [
                    require('cssnano')({
                        discardComments: { removeAll: true },
                        options: {
                            sourcemap: false
                        }
                    })
                ]
            },
            dist: {
                src: 'dist/*.css'
            }
        }
    });

    grunt.registerTask('build', ['sass', 'postcss']);
};