/*
  => Author: Mahmoud Osman
  => Website: http://www.netsansoftware.com/
*/

//1st, require gulp packages that you want to use for your project
const gulp = require('gulp'),
	 concat = require('gulp-concat'),
	 autoprefixer  = require('gulp-autoprefixer'),
	 sass = require('gulp-sass'),
	 sass = require('gulp-pug'),
	 notify = require("gulp-notify"),
	 watch = require('gulp-watch'),
	 uglify = require('gulp-uglify'),
	 zip = require('gulp-zip');

//First taks starts here

//Syntax: gulp.task('taskName'), function(){ //code. goes here}



/*
	=============================================
		** TASK ONE -[etech-html] **
	=============================================

*/


//task one [etech-html]
gulp.task('etech-html', function(){ 
	


//All tasks should go here
//this [below] means that it will take the [index.html] file that is inside  project folder 
//and it will put inside, [dist] folder

//if you want to export all html files use, [*][*.html], as shown below
  //return gulp.src('project/index.html') - only moves one file which is index.html

  //if you want to move only specific files, you can do so, like this using array braket.

  //return gulp.src(['project/index.html', 'project/style.css', 'project/about.html'])


return gulp.src('project/*.html') // Get, ALL files that has [.html] extension

			//.pipe(etechMinify()) this is how to  create a new file
			//.pipe(etechRename()) // or rename file


			//Now export these files using dest() built in function, but
			// Where do you want to put your file now?. This will put these files inside the [dist] folder
			
			//.pipe(gulp.dest('dist/html'))//- put  [html] files, inside the [dist] folder

			.pipe(gulp.dest('dist/html')) //Move files into a html folder which is inside dist folder.
			// This notifies you when the task is completly moved into the designated folder
			.pipe(notify("Task is Done!")); // You need Windows 8 o higher in order to use [gulp notify package]

});



/*
	=============================================
			** TASK TWO [pug] TASK **
	=============================================

*/

// gulp.task('etech-pug', function() {
// 	return gulp.src('project/index.pug')
// 	  .pipe(gulp.dest('dist'))


// });





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
	//return gulp.src('project/*.html') //Move all files that has .html extension
	return gulp.src('project/*.css') //Move all files that has .css extension that are inside project folder
	
	//auto prefixer adds css prefixer such as [-ms-webkit-], [-o-webkit-], [-moz-webkit-] etc
	.pipe(autoprefixer ('last 2 versions'))// add auto prefixer

	.pipe(concat('main.css'))// the name of the file that you want for all your css files to be placed in after the code has been compiled/concatanated
	// this will help you to only call one css stylesheet [file] in your website 


	//now after concatination, put those css files inside the [dist/css] directory/folder
	.pipe(gulp.dest('dist/css'))


	
});




/*
=============================================
	** TASK THREE - [JS] TASK **
	gulp-concat -> https://www.npmjs.com/package/gulp-concat
=============================================

*/

gulp.task('etech-scripts', function(){

	return gulp.src('project/*.js') //Return all the files that are inside project folder that has .js extension

	.pipe(concat('all-scripts.js'))// the name of the file that you want for all your [js] files should be place in after concatinatin


	//now after concatination, put the concatinated js file inside this folder named [js]  which is inside the dist folder
	.pipe(gulp.dest('dist/js'))


	
});


/*
=============================================
		** TASK FOUR - [sass] TASK **
	    npm install node-sass gulp-sass --save-dev
=============================================

*/

gulp.task('etech-sass', function(){
	
	return gulp.src('project/css/main.scss') //Get the scss file that is inside project/css folder
   
	//now use the sass function or method which is .pip(sass())
	//.pipe(sass({outputStyle: 'compressed'}))// this compresses the file
	.pipe(sass())

	.pipe(uglify()) // this makes the code well indented
	//auto prefixer - adds css prefixer such as [ms-webkit-], [o-webkit-], [moz-webkit-] etc for all browsers
	.pipe(autoprefixer ('last 2 versions'))

	//.pipe(concat('test.css')) // for testing purposes only

	.pipe(concat('main.css'))// the name of the file that you want for all your css files to be placed in. In this case, I named it main.css


	//now after concatination, put the css file inside the [dist/css] folder
	.pipe(gulp.dest('dist/css'))


	
});




//Compress Task
/*
=============================================
		** TASK SIX - [gulp-zip] TASK **
	    npm install --save-dev gulp-zip
=============================================

*/

gulp.task('compress', function(){

	//compress all the files that are inside the [dist] folder using [.] dot
	return.gulp.src('dist/**/*.*')

// the name of the [zip] file, after all files were compressed which I called, [allfiles]
	.pipe(zip('allfiles.zip')) 

// Now, after the files were compressed and made them a zip file, were do you want to put them.
	 .pipe(gulp.dest('.')) //[.] put the zip file somewhere next to gulpfile.js inside the main project folder


.pipe(notify("Files are compressed!")); //after the task is done, notify me using notify plugin

});


/*
=============================================
		** TASK FIVE - [watch] TASK **
	    npm install --save-dev gulp-watch
=============================================

*/

gulp.task('watch', function(){

	//syntax: gulp.watch('task_name', ['task1', 'task2', 'task3', 'etec.'])
	require('./server.js');
	//run/test this on the command line like this: [ gulp etech ]
//console.log('Task test');
	gulp.watch('project/*.css', ['etech-css'])

	gulp.watch('dist/**/*.*', ['compress']) // Also add inside the watch task

});




