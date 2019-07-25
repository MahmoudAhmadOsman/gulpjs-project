//1st require the gulp
const gulp = require('gulp'),
	 concat = require('gulp-concat'),
	 autoprefixer  = require('gulp-autoprefixer'),
	 sass = require('gulp-sass'),
	 sass = require('gulp-pug'),
	 uglify = require('gulp-uglify');

//First taks starts here

//Syntax: gulp.task('taskName'), function(){ //code. goes here}



/*
	=============================================
				** TASK ONE **
	=============================================

*/


//task one [etech-html]
gulp.task('etech-html', function(){ 
	
	require('./server.js');
	//run/test this on the command line like this gulp etech
//console.log('Task test');

//All tasks go here
//this [below] meanst that it will take the [index.html] that is inside the project folde 
//and it will put inside the [dist] folder

//if you want to export all html files using [*][*.html] as shown below
  //return gulp.src('project/index.html') - only move one file

  //if you wan to move only specific files, you can do so like this.

  //return gulp.src(['project/index.html', 'project/style.css', 'project/about.html'])


return gulp.src('project/*.html') // All files that has [.html] extension

			//.pipe(etechMinify()) this how to  create new file
			//.pipe(etechRename()) // or rename file


			//Now export these files using dest() built in function
			// Where do you want to put your file now. This will put these files inside the [dist] folder
			//.pipe(gulp.dest('dist/html')) - put files [html], that is inside the [dist] folder

			.pipe(gulp.dest('dist/html'))

});



/*
=============================================
		** TASK TWO [pug] TASK **
=============================================

*/

gulp.task('etech-pug', function() {
	return gulp.src('project/index.pug')
	  .pipe(gulp.dest('dist'))


});








/*
=============================================

			** TASK TWO [CSS] TASK **

			  [ AutoPrefixer For CSS3 Properties ]	

	       install: npm install --save-dev gulp-autoprefixer

=============================================

*/



//v6 - gulp-concat - plugin
//1st - Install package with NPM and add it to your development dependencies:
//npm install --save-dev gulp-concat
//2nd require at the top of  your project
//create different css files inside [project] folder and this will put all the css files inside the [dist/css] folder for you


//Now create a the taks

gulp.task('etech-css', function(){
	//return gulp.src('project/*.html') //all files that has .html extension
	return gulp.src('project/*.css') //all files that has .css extension
	
	//auto prefixer adds css prefixer such as [ms-web-kit-], [o-web-kit-], [moz-web-kit-]
	.pipe(autoprefixer ('last 3 versions'))

	.pipe(concat('main.css'))// the name of the file that you want for all your css files to be placed in


	//now after concatination, put those css files in this [dist/css] directory/folder
	.pipe(gulp.dest('dist/css'))


	
});















/*
=============================================

		** TASK THREE - [JS] TASK **

	        gulp-concat -> https://www.npmjs.com/package/gulp-concat
=============================================

*/


gulp.task('etech-scripts', function(){

	return gulp.src('project/*.js')

	.pipe(concat('all-scripts.js'))// the name of the file that you want all your [js] files should be place in


	//now after concatination, put those js files in this directory
	.pipe(gulp.dest('dist/js'))


	
});






/*
=============================================

		** TASK THREE - [sass] TASK **

	        npm install node-sass gulp-sass --save-dev
=============================================

*/



gulp.task('etech-sass', function(){
	
	return gulp.src('project/css/main.scss') //Get the scss file name
   
	//now use the sass function/method
	//.pipe(sass({outputStyle: 'compressed'}))
	.pipe(sass())

	.pipe(uglify())
	//auto prefixer - adds css prefixer such as [ms-web-kit-], [o-web-kit-], [moz-web-kit-]
	.pipe(autoprefixer ('last 3 versions'))

	//.pipe(concat('test.css')) // for testing purposes only

	.pipe(concat('main.css'))// the name of the file that you want for all your css files to be placed in


	//now after concatination, put those css files in this [dist/css] directory/folder
	.pipe(gulp.dest('dist/css'))


	
});






