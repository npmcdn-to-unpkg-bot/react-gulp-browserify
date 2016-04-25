var gulp = require('gulp');
var jsx = require('gulp-jsx');
var babel = require('gulp-babel');
var watchify = require('watchify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var assign = require('lodash.assign');
var react = require('gulp-react');
var browserSync = require('browser-sync');
// var sourcemaps=require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
gulp.task('default', ['server', 'browserify','watch'], function() {

});

gulp.task('bebel', ['react'], function() {
    return gulp.src('app/src/js/*.js')
        .pipe(plumber({}, true, function(err) {
            console.log('ERROR!!!!');
            console.log(err);
        }))
        .pipe(babel({
            presets: ['es2015']
        }))

    .pipe(gulp.dest('app/src/js'))
})

gulp.task('react', function() {
    return gulp.src('app/src/jsx/*.jsx')
        .pipe(plumber({}, true, function(err) {
            console.log('ERROR!!!!');
            console.log(err);
        }))
        .pipe(react())

    .pipe(gulp.dest('app/src/js'))
})

gulp.task('server', function() {
    browserSync.init({
        server: './app'
    });
})
gulp.task('watch', function() {
        gulp.watch(['app/src/jsx/*.jsx', 'app/src/main.js'], ['browserify']);
        gulp.watch(['app/build/bundle.js'], browserSync.reload())
    })
    // add custom browserify options here
var b = watchify(browserify(assign({}, watchify.args, {
    cache: {}, // required for watchify
    packageCache: {}, // required for watchify
    entries: ['app/src/main.js']
})));

// add transformations here
// i.e. b.transform(coffeeify);

gulp.task('browserify', ['bebel'], bundle);
b.on('update', bundle); // on any dep update, runs the bundler  
b.on('log', gutil.log); // output build logs to terminal

function bundle() {
    return b.bundle()
        // log errors if they happen
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('bundle.js'))
        // optional, remove if you don't need to buffer file contents
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('app/build'));
}
