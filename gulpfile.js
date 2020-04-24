const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
 
exports.default = () => (
    gulp.src('img/posts/*')
        .pipe(imagemin())
        .pipe(gulp.dest('_site/img/posts/'))
);