var gulp = require("gulp"),
postcss = require('gulp-postcss'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
autoprefixer = require('autoprefixer');

gulp.task("styles", function(){
	console.log("style task");
	return gulp.src("./app/assets/styles/styles.css")
				.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
				.on('error', function(errorInfo){
					console.log(errorInfo.toString());
					this.emit('end');
				})
				.pipe(gulp.dest("./app/temp/styles"));
});
 