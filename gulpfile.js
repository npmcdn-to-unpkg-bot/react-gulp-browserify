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
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var sass=require('gulp-sass');
gulp.task('default', ['server','sass','watch'], function() {

});
//babel
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
//react
gulp.task('react', function() {
    return gulp.src('app/src/jsx/*.jsx')
        .pipe(plumber({}, true, function(err) {
            console.log('ERROR!!!!');
            console.log(err);
        }))
        .pipe(react())

    .pipe(gulp.dest('app/src/js'))
})
//sass
gulp.task('sass',function(){
    gulp.src('app/src/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('app/build/css/'))
})
//server
gulp.task('server', function() {
    browserSync({
        server: './app',
        files:'buid/css/*.css'
    });
})
//watch
gulp.task('watch', function() {
        gulp.watch(['app/src/jsx/*.jsx', 'app/src/main.js'], ['browserify']);
        gulp.watch(['app/build/bundle.js'], browserSync.reload());
        gulp.watch(['app/src/sass/*.scss'],['sass']);
    })
    // add custom browserify options here
var b = watchify(browserify(assign({}, watchify.args, {
    cache: {}, // required for watchify
    packageCache: {}, // required for watchify
    entries: ['app/src/main.js']
})));

// add transformations here
// i.e. b.transform(coffeeify);
//browserify
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
