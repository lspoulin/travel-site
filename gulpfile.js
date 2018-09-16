var gulp = require("gulp"),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
autoprefixer = require('autoprefixer');

gulp.task("default", function(){
	console.log("test");
});

gulp.task("html", function(){
	console.log("html");
});


gulp.task("style", function(){
	console.log("style task");
	return gulp.src("./app/assets/styles/styles.css")
				.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
				.pipe(gulp.dest("./app/temp/styles"));
});

gulp.task('watch', function(){
	watch('./app/index.html', function(){
		gulp.start("html");

	});

	watch('./app/assets/styles/**/*.css', function(){
		gulp.start("style");
	});

});
