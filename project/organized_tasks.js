const gulp = require('gulp'),
	 concat = require('gulp-concat'),
	 autoprefixer  = require('gulp-autoprefixer'),
     sass = require('gulp-sass'),
     watch = require('gulp-watch'),
	 uglify = require('gulp-uglify');
 



// task one - html
gulp.task('html', function(){
    return gulp.src('project/*.html') 
    .pipe(gulp.dest('dist'))

});     


// task two - sass/css
gulp.task('sass', function(){

    return gulp.src('scss/*.scss')
    .pipe(autoprefixer ('last 2 versions'))// add auto prefixer
    .pipe(concat('main_scripts.css')) // the stylesheet name of all combined/united styles
    .pipe(gulp.dest('dist/css'))

});




// task three - javascript 
gulp.task('javascript', function(){
    return gulp.src('js/*.js')
    .pipe(gulp.dest('dist/js'))

});




//Watch task
gulp.task('watch', function () {
    return watch('css/**/*.scss', { ignoreInitial: false })
        .pipe(gulp.dest('build'));
});





// Default task --> all tasks
gulp.task('default', ['html','sass', 'javascript'], function() {
    // watch for SCSS changes
    gulp.watch('css/*.scss', function() {
       // run scss upon changes
       gulp.run('scss');
    });
 });

//gulp.task('default', ['html','sass', 'js'])