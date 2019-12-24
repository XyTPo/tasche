'use strict';
	var gulp = require('gulp'),
			watch          = require('gulp-watch'),
			rigger         = require('gulp-rigger'),
			sass           = require('gulp-sass'),
			browserSync    = require('browser-sync'),
			reload         = browserSync.reload;

var path = {
	dist: {
			html: 'public_html/',		
			devCss: 'public_html/dev-css/',
			css: 'public_html/css/',
			img: 'public_html/img/',
			js: 'public_html/js/',	
			plugins: 'public_html/plugins/'
	},
	app: { 
			html: '_dev/html/*.html',
			devCss: '_dev/dev-css/*.css',
			sass: '_dev/sass/*.sass',
			img: '_dev/img/**/*.*',
			js: '_dev/js/*.js',
			plugins: '_dev/plugins/**/*.*'
	},
	watch: {
			html: '_dev/html/**/*.html',
			sass: '_dev/sass/*.sass',
			cyCss: '_dev/sass/*.css',
			img: '_dev/img/**/*.*',
			js: 'app/js/**/*.js'
	}
};

// Gulp Tasks
gulp.task('webserver', function () {
	browserSync({
			server: {
					baseDir: './public_html/'
			},
			notify: false,
			tunnel: false,
			host: 'localhost',
			port: 8081,
			logPrefix: "dmitryPHC"
	})
});
gulp.task('html:build', function() {
  gulp.src(path.app.html)
	.pipe(rigger())
    .pipe(gulp.dest(path.dist.html))
	.pipe(reload({stream: true}));
});

gulp.task('sass:build', function () {
	gulp.src(path.app.sass)
			.pipe(sass({outputStyle: 'expanded'}))
			.pipe(gulp.dest(path.dist.css))
			.pipe(reload({stream: true}));
});

gulp.task('css:build', function () {
	gulp.src(path.app.devCss)
			.pipe(gulp.dest(path.dist.devCss));
});

gulp.task('image:build', function () {
	gulp.src(path.app.img)
			.pipe(gulp.dest(path.dist.img));
});

gulp.task('js:build', function () {
	gulp.src(path.app.js)
			.pipe(gulp.dest(path.dist.js))
			.pipe(reload({stream: true}));
});

gulp.task('plugins:build', function () {
	gulp.src(path.app.plugins)
			.pipe(gulp.dest(path.dist.plugins));
});

gulp.task('build', gulp.parallel (
	'css:build',
	'sass:build',
	'html:build',
	'image:build',
	'js:build',
	'plugins:build'
));

gulp.task('watch', function(){
	watch([path.watch.sass, path.watch.cyCss], {readDelay: 1000}, gulp.parallel('sass:build'));
	watch([path.watch.html], {readDelay: 1000}, gulp.parallel('html:build'));
	watch([path.watch.img], gulp.parallel('image:build'));
	watch([path.watch.js], gulp.parallel('js:build'));
});

gulp.task('default', gulp.parallel('build', 'watch', 'webserver'));