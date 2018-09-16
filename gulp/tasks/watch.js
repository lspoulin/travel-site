var gulp = require("gulp"),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function(){

	browserSync.init({
		notify:false,
		server:"app"

	});

	watch('./app/index.html', function(){
		browserSync.reload();

	});

	watch('./app/assets/styles/**/*.css', function(){
		gulp.start("cssInject");
	});

	gulp.watch("gulpfile.js").on("change", () => process.exit(0)); 

});

gulp.task('cssInject', ['styles'], function(){

	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());

});