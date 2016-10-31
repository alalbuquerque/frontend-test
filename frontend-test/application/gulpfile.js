/********************************************************/
/*************          PATHS              **************/
/********************************************************/
var paths = {
    dist: '/dev/dist/',
    scripts: ['./assets/js/**'],
    images: './assets/images/**',
    imagesPath: './dev/dist/images/',
    app: './dev/dist/js',
    less: './assets/less/main.less',
    sass: ['./assets/scss/main.scss'],
    css: './dev/dist/css',
    fonts: [],
    fontsPath: './dev/dist/fonts/',
    resources: './resources/'
};
/********************************************************/
/*************          MODULES            **************/
/********************************************************/
var gulp = require('gulp'),
uglify = require('gulp-uglify'),
notify = require('gulp-notify'),
sass = require('gulp-sass'),
minifycss = require('gulp-cssnano'),
purge = require('gulp-css-purge'),
autoprefixer = require('gulp-autoprefixer'),
concat = require('gulp-concat'),
util = require('gulp-util'),
less = require('gulp-less'),
streamqueue = require('streamqueue'),
stripCssComments = require('gulp-strip-css-comments');






/********************************************************/
/*************          TASKS              **************/
/********************************************************/
/////////////////////
//  SCRIPTS TASK   //
/////////////////////
gulp.task('scripts', function () {
    'use strict';
    gulp.src(paths.scripts)
    .pipe(concat('app.js'))
    .pipe(util.env.production ? uglify() : util.noop())
    .pipe(gulp.dest(paths.app))
    .pipe(notify({title: 'SCRIPTS', message: 'Task complete!', onLast: true}));
});
////////////////////
//  STYLES TASK   //
////////////////////
gulp.task('styles', ['fonts'], function () {
    'use strict';
    streamqueue(
        {objectMode: true},
        gulp.src(paths.less)
        .pipe(less()),
        gulp.src(paths.sass)
        .pipe(sass({style: 'compressed'}).on('error', sass.logError))
        .pipe(purge())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))      
        )
    .pipe(concat('app.css'))
    .pipe(util.env.production ? minifycss() : util.noop())
    .pipe(util.env.production ? stripCssComments({preserve: false}) : util.noop())
    .pipe(gulp.dest(paths.css))
    .pipe(notify({title: 'STYLES', message: 'Task complete!', onLast: true}));
});
/////////////////
// FONTS TASK  //
/////////////////
gulp.task('fonts', function () {
    'use strict';
    return gulp.src(paths.fonts)
    .pipe(gulp.dest(paths.fontsPath));    
});
//////////////////
// IMAGES TASK  //
//////////////////
gulp.task('images', function () {
    'use strict';
    gulp.src(paths.images)
    .pipe(gulp.dest(paths.imagesPath))
    .pipe(notify({title: 'IMAGES', message: 'Task complete!', onLast: true}));
});
///////////////////
//  WATCH TASK   //
///////////////////
gulp.task('watch', function () {
    'use strict';
    //scripts
    gulp.watch('./assets/js/**', ['scripts'])
    .on('change', function (evt) {
        var fileName = evt.path.split('\\');
        fileName = fileName[fileName.length - 1];
        console.log('[watcher] File ' + fileName + ' was ' + evt.type + ', uglifying...');
    });
    //styles
    gulp.watch('./assets/scss/**/*.scss', ['styles'])
    .on('change', function (evt) {
        var fileName = evt.path.split('\\');
        fileName = fileName[fileName.length - 1];
        console.log('[watcher] File ' + fileName + ' was ' + evt.type + ', compressing...');
    });
    //images
    gulp.watch(paths.images, ['images'])
    .on('change', function (evt) {
        var fileName = evt.path.split('\\');
        fileName = fileName[fileName.length - 1];
        console.log('[watcher] Image ' + fileName + ' was ' + evt.type + ', copied to dist...');
    });
});
/////////////////////
//  DEFAULT TASK   //
/////////////////////
gulp.task('default', ['scripts', 'styles', 'images']);