const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const browserify = require('browserify')//bundles into one Js file
const vinylSource = require('vinyl-source-stream')// converts file output of browserify to something gulp understand(vinyl)
const buffer = require('vinyl-buffer')//convert stream to buffer 
const sourcemaps = require('gulp-sourcemaps')
const paths = { pages: ['src/*.html'] };
const uglify = require('gulp-uglify')//minify code
const babel = require('gulp-babel')
const less = require('gulp-less')
const path = require('path')

const watchify = require('watchify')//keeps gulp running, recompliles on file change
const fancyLog = require('fancy-log')

const _browserify = browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.tsx'],
    cache: {},
    packageCache: {}
}).plugin('tsify')

const compileJs = () => _browserify
    .bundle()
    .pipe(vinylSource('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'))

const compileLess = () => gulp
    .src('src/less/main.less')
    .pipe(less())
    .pipe(gulp.dest('dist')
    )

const watchTasks = () => {
    gulp.src(paths.pages)
        .pipe(gulp.dest('dist'))
    compileLess()
    compileJs()

    browserSync.reload()
}

gulp.task('startServer', () => {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    })
    gulp.watch('src/less/**/*.less').on('change', () => { compileLess(); browserSync.reload(); })
    gulp.watch('src/*.tsx').on('change', () => { compileJs(); setTimeout(browserSync.reload, 0) })
    gulp.watch('src/*.html').on('change', () => {
        gulp.src(paths.pages)
            .pipe(gulp.dest('dist'));
        browserSync.reload()
    })
})

gulp.task('copy-html', () => (
    gulp.src(paths.pages)
        .pipe(gulp.dest('dist')))
)

gulp.task('default', gulp.series(gulp.parallel('copy-html', 'startServer'), compileJs, compileLess))

// watchedBrowserify.on('update', packing)
// watchedBrowserify.on('log', fancyLog)