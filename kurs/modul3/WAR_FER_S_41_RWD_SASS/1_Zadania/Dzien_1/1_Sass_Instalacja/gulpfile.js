var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var scssFiles = "scss/**/*.scss";

gulp.task("sass", function () {
    return gulp.src(scssFiles)
        .pipe(plumber())
        .pipe(sass({ errorLogToConsole: true }))
        .pipe(gulp.dest("css"));
});
gulp.task("watch", function () {
    gulp.watch(scssFiles, ["sass"]);
});
gulp.task