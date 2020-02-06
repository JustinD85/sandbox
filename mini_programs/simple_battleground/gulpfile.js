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

const _browserify = browserify({
    basedir: '.',
    debug: true,
    entries: ['index.tsx'],
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
    .src('src/index.less')
    .pipe(less())
    .pipe(gulp.dest('dist'))

gulp.task('default', () => {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    })
    gulp.watch('src/styles/**/*.less').on('change', () => { compileLess(); browserSync.reload(); })
    gulp.watch(['src/*.tsx', 'src/**/*.tsx']).on('change', () => { compileJs(); setTimeout(browserSync.reload, 0) })
    gulp.watch('src/*.html').on('change', () => {
        gulp.src(paths.pages)
            .pipe(gulp.dest('dist'));
        browserSync.reload()
    })
})
