// include gulp
var gulp = require('gulp');

// load the plugins into an array of plugins
var plugins = require('gulp-load-plugins')();

// autoprefixer config
var supportedBrowsers = ['IE 9', 'last 2 versions', '> 1%', 'Safari 7'];
var autoprefixerOptions = { browsers: supportedBrowsers };

// cssnano config
var nanoOptions = {
    autoprefixer: { browsers: supportedBrowsers },
    convertValues: { length: false, boolean: false },
    mergeRules: false
};

// compile the Sass
gulp.task('sass', function() {
    return gulp.src('assets/sass/*.scss')
        .pipe(
            plugins.sass()
                .on('error', plugins.sass.logError)
        )
        .pipe(plugins.autoprefixer(autoprefixerOptions))
        .pipe(plugins.cssnano(nanoOptions))
        .pipe(gulp.dest('assets/css'));
});

// watch files for changes
gulp.task('watch', function() {
    gulp.watch('assets/sass/**/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'watch']);
