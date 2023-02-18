
const{ src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass');
const postcss = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();


// sass task
function scssTask(){
    return src('styles/style.css', {sourcemaps: true})
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest('dist', {sourcemaps: '.'}));
}

// JS task
function jsTask(){
    return src('js/pure.js', {sourcemaps: true})
    .pipe(terser())
    .pipe(dest('dist', {sourcemaps: '.'}));
}

// Browsersync Tasks
function browsersync(cb){
    browsersync.init({
        server:{
            baseDir: '.'
        }
    });
    cb();
}


function browsersyncReload(cb){
    browsersync.reload();
    cb();
}

// Watch Task
function watchTask(){
    watch(".html", browsersyncReload);
    watch(["scss/**/*.scss", "js/**/*.js"], series(scssTask, jsTask, browsersyncReload))
}

// Default Gulp task
exports.default = series(
    scssTask,
    jsTask,
    browserServe,
    watchTask
)