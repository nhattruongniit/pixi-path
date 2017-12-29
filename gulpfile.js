var gulp = new require('gulp');
var browserSync = new require('browser-sync');
var reload = browserSync.reload;

gulp.task('serve', () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('*.html').on('change', reload);
    gulp.watch('./js/*.js').on('change', reload);
});