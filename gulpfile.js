// Include gulp
var gulp = require('gulp');

// Include plugins
var sass        = require('gulp-sass'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    minifyCSS   = require('gulp-minify-css'),
    rename      = require('gulp-rename'),
    watch       = require('gulp-watch');

// Compile SCSS
gulp.task('sass', function() {
    return gulp.src('public/assets/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/assets/css'))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('public/assets/css'))
        .pipe(minifyCSS())
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('public/assets/css'));
});

// Minify Javascript
gulp.task('js', function() {
    return gulp.src('public/assets/js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('public/assets/js'))
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('public/assets/js')); 
});

// Watch for changes
gulp.task('watch', function() {
    gulp.watch('public/assets/js/*.js', ['js']);
    gulp.watch('public/assets/scss/*.scss', ['sass']);
});

// Default task
gulp.task('default', ['sass', 'js']);