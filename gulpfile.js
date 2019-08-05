'use strict';
	var gulp 					 = require('gulp'),
			mainBowerFiles = require('main-bower-files'),
			watch 				 = require('gulp-watch'),
			prefixer       = require('gulp-autoprefixer'),
			uglify         = require('gulp-uglify'),
			sourcemaps     = require('gulp-sourcemaps'),
			sass           = require('gulp-sass'),
			cleanCSS       = require('gulp-clean-css'),
			imagemin       = require('gulp-imagemin'),
			pngquant       = require('imagemin-pngquant'),
			rimraf         = require('rimraf'),
			browserSync    = require("browser-sync"),
			reload         = browserSync.reload;

var path = {
	vendor: {
			js: 'app/js/vendor/',
			css: 'app/css/vendor/'
	},
	dist: {
			html: 'dist/',
			js: 'dist/js/',
			sass: 'dist/css/',
			css: 'dist/css/',
			img: 'dist/img/',
			fonts: 'dist/fonts/'
	},
	app: { 
			html: 'app/*.html',
			js: 'app/js/*.js',
			sass: 'app/css/*.sass',
			css: 'app/css/*.css',
			img: 'app/img/**/*.*', 
			fonts: 'app/fonts/**/*.*'
	},
	watch: {
			html: 'app/**/*.html',
			js: 'app/js/**/*.js',
			sass: 'app/css/**/*.sass',
			css: 'app/css/**/*.css',
			img: 'app/img/**/*.*',
			fonts: 'app/fonts/**/*.*'
	},
	clean: './dist'
};

// Gulp Tasks
gulp.task('webserver', function () {
	browserSync({
			server: {
					baseDir: './dist'
			},
			notify: false,
			tunnel: false,
			host: 'localhost',
			port: 8081,
			logPrefix: "dmitryPHC"
	})
});

gulp.task('vendorJs:build', function () {
	gulp.src( mainBowerFiles('**/*.js') )
			.pipe(gulp.dest(path.vendor.js))
			.pipe(gulp.dest(path.dist.js))
});

gulp.task('vendorCss:build', function () {
	gulp.src( mainBowerFiles('**/*.css') )
			.pipe(gulp.dest(path.vendor.css))
			.pipe(gulp.dest(path.dist.css))
});

gulp.task('html:build', function () {
	gulp.src(path.app.html)
			.pipe(gulp.dest(path.dist.html))
			.pipe(reload({stream: true}));
});

gulp.task('js:build', function () {
	gulp.src(path.app.js)
			.pipe(sourcemaps.init())
			.pipe(uglify())
			.pipe(sourcemaps.write())
			.pipe(gulp.dest(path.dist.js))
			.pipe(reload({stream: true}));
});

gulp.task('sass:build', function () {
	gulp.src(path.app.sass)
			.pipe(sourcemaps.init())
			.pipe(sass())
			.pipe(prefixer({
				browsers: ['> 0.01%']
			}))
			.pipe(cleanCSS())
			.pipe(sourcemaps.write())
			.pipe(gulp.dest(path.dist.sass))
			.pipe(reload({stream: true}));
});

gulp.task('css:build', function () {
	gulp.src(path.app.css)
			.pipe(sourcemaps.init())
			.pipe(cleanCSS())
			.pipe(sourcemaps.write())
			.pipe(gulp.dest(path.dist.css))
			.pipe(reload({stream: true}));
});

gulp.task('image:build', function () {
	gulp.src(path.app.img)
			.pipe(imagemin({
					progressive: true,
					svgoPlugins: [{removeViewBox: false}],
					use: [pngquant()],
					interlaced: true
			}))
			.pipe(gulp.dest(path.dist.img))
			.pipe(reload({stream: true}));
});

gulp.task('fonts:build', function() {
	gulp.src(path.app.fonts)
			.pipe(gulp.dest(path.dist.fonts))
});

gulp.task('build', gulp.parallel (
	//'vendorCss:build',
	'vendorJs:build',
	'html:build',
	'js:build',
	'sass:build',
	'css:build',
	'fonts:build',
	'image:build'
));

gulp.task('watch', function(){
	watch([path.watch.html], gulp.parallel('html:build'));
	watch([path.watch.sass], {readDelay: 1000}, gulp.parallel('sass:build'));
	watch([path.watch.css], gulp.parallel('css:build'));
	watch([path.watch.js], gulp.parallel('js:build'));
	watch([path.watch.img], gulp.parallel('image:build'));
	watch([path.watch.fonts], gulp.parallel('fonts:build'));
});

gulp.task('clean', function (cb) {
	rimraf(path.clean, cb);
});

gulp.task('default', gulp.parallel('build', 'watch', 'webserver'));