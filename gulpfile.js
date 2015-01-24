var gulp = require('gulp'),
	browserify = require('gulp-browserify')
	uglify = require('gulp-uglify')
	obfuscate = require('gulp-obfuscate'),
	connect = require('gulp-connect'),
	react = require('gulp-react'),
	stylus = require('gulp-stylus'),
	jade = require('gulp-jade');

gulp.task('connect', function() {
	connect.server({
		root: 'app',
		livereload: true
	});
});

gulp.task('react', function(){
	gulp.src('./app/js/src/jsx/**/*js')
		.pipe(react())
		.pipe(gulp.dest('./app/js/src'))
		.pipe(connect.reload());
})

gulp.task('browserify', ['react'], function(){
	gulp.src('./app/js/src/main.js')
		.pipe(browserify({
			insertGlobals: true
		}))
		// .pipe(uglify())
		// .pipe(obfuscate())
		.pipe(gulp.dest('./app/js'))
		.pipe(connect.reload());
});


gulp.task('style', function(){
	gulp.src('./app/style/src/**/*.styl')
		.pipe(stylus())
		.pipe(gulp.dest('./app/style'))
		.pipe(connect.reload());
})

gulp.task('html', function () {
	gulp.src('./app/view/*.jade')
		.pipe(jade())
		.pipe('./app')
		.pipe(connect.reload());
});

gulp.task('watch', ['style' ,'browserify', 'html'], function(){
	gulp.watch('./app/js/src/jsx/**/*.js', ['browserify']);
	gulp.watch('./app/*.html', ['html']);
	gulp.watch('./app/style/src/**/*.styl', ['style']);
});

gulp.task('default', ['connect', 'watch']);

