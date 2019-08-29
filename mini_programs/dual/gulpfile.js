const gulp = require('gulp')
const browserify = require('browserify')//bundles into one Js file
const vinylSource = require('vinyl-source-stream')// converts file output of browserify to something gulp understand(vinyl)
const buffer = require('vinyl-buffer')//convert babel output to gulp readable format
const sourcemaps = require('gulp-sourcemaps')
const paths = { pages: ['src/*.html'] };
const watchify = require('watchify')//keeps gulp running, recompliles on file change
const uglify = require('gulp-uglify')//minify code
const fancyLog = require('fancy-log')


const _browserify = browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.tsx'],
    cache: {},
    packageCache: {}
}).plugin('tsify')

const packing = () => _browserify
    .bundle()
    .pipe(vinylSource('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'))

gulp.task('copy-html', () => (
    gulp.src(paths.pages)
        .pipe(gulp.dest('dist'))))

gulp.task('default', gulp.series(gulp.parallel('copy-html'), packing))

// watchedBrowserify.on('update', packing)
// watchedBrowserify.on('log', fancyLog)
