const gulp = require('gulp')
const browserify = require('browserify')//bundles into one Js file
const vinylSource = require('vinyl-source-stream')// converts file output of browserify to something gulp understand(vinyl)
const watchify = require('watchify')//keeps gulp running, recompliles on file change
const tsify = require('tsify')//gives access to typescript compiler
const uglify = require('gulp-uglify')
const sourcemaps = require('gulp-sourcemaps')
const buffer = require('vinyl-buffer')
const fancyLog = require('fancy-log')
const paths = {
    pages: ['src/*.html']
};

// const watchedBrowserify = watchify(browserify({
//     basedir: '.',
//     debug: true,
//     entries: ['src/main.ts'],
//     cache: {},
//     packageCache: {}
// }).plugin(tsify))

// const bundle = () => watchedBrowserify
//     .bundle()
//     .pipe(vinylSource('bundle.js'))
//     .pipe(gulp.dest('dist'))

// gulp.task('copy-html', () => (
//     gulp.src(paths.pages)
//         .pipe(gulp.dest('dist'))))

// gulp.task('default', gulp.series(gulp.parallel('copy-html'), bundle))
// watchedBrowserify.on('update', bundle)
// watchedBrowserify.on('log', fancyLog)

gulp.task('copy-html', () => (
    gulp.src(paths.pages)
        .pipe(gulp.dest('dist'))))

gulp.task('default', gulp.series(gulp.parallel('copy-html'), () => (
    browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {}
    })
        .plugin(tsify)
        .bundle()
        .pipe(vinylSource('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist')))))        