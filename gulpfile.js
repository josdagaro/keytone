var gulp = require('gulp');
var pug = require('gulp-pug');
var rename = require('gulp-rename');
var babel = require('gulp-babel');

function renderPug(files) {
    return gulp.src(files)
        .pipe(pug())
        .pipe(rename({
            dirname: 'public/views/'
        }))
        .pipe(gulp.dest('./'));
}

gulp.task('build', ['pug', 'js']);

gulp.task('pug', function() {
    console.log('-> Rendering Pug...');
    renderPug('app/**/*.pug');
});

gulp.task('js', function() {
    console.log('-> Rendering JS...');

    return gulp.src('app/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('public/transpiled'));
});

gulp.task('watch', function() {
    gulp.watch('app/**/*.js', ['js']);
    gulp.watch('app/**/*.pug', ['pug']);
});
