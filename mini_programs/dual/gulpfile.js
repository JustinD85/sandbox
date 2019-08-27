const gulp = require('gulp')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const watchify = require('watchify')
const tsify = require('tsify')
const fancyLog = require('fancy-log')
const paths = {
    pages: ['src/*.html']
};

const watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify))

const bundle = () => watchedBrowserify
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'))

gulp.task('copy-html', () => (
    gulp.src(paths.pages)
        .pipe(gulp.dest('dist'))))

gulp.task('default', gulp.series(gulp.parallel('copy-html'), bundle))
watchedBrowserify.on('update', bundle)
watchedBrowserify.on('log', fancyLog)