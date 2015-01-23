var gulp = require('gulp'),
	browserify = require('gulp-browserify')
	uglify = require('gulp-uglify')
	obfuscate = require('gulp-obfuscate'),
	connect = require('gulp-connect'),
	react = require('gulp-react');

gulp.task('connect', function() {
	connect.server({
		root: 'app',
		livereload: true
	});
});

gulp.task('browserify', function(){
	gulp.src('./app/js/src/main.js')
		.pipe(react())
		.pipe(browserify({
			insertGlobals: true
		}))
		// .pipe(uglify())
		// .pipe(obfuscate())
		.pipe(gulp.dest('./app/js'))
		.pipe(connect.reload());
});

gulp.task('html', function () {
	gulp.src('./app/*.html')
		.pipe(connect.reload());
});

gulp.task('watch', function(){
	gulp.watch('./app/js/src/main.js', ['browserify']);
	gulp.watch('./app/*.html', ['html']);
});

gulp.task('default', ['connect', 'watch']);

