var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var scssFiles = "scss/**/*.scss";
var sourcemaps = require("gulp-sourcemaps");

gulp.task("sass", function () {
    return gulp.src(scssFiles)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({ errorLogToConsole: true }))
        .pipe(sass({
            outputStyle: 'expanded',
            sourceComments: 'map'
         }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("css"));
});
gulp.task("watch", function () {
    gulp.watch(scssFiles, ["sass"]);
});
gulp.task