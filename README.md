# Gulpjs Project
Gulp.js demo project


const gulp = require('gulp'),
	 concat = require('gulp-concat'),
	 autoprefixer  = require('gulp-autoprefixer'),
	 sass = require('gulp-sass'),
	 sass = require('gulp-pug'),
	 notify = require("gulp-notify"),
	 watch = require('gulp-watch'),
	 uglify = require('gulp-uglify'),
	 zip = require('gulp-zip');


gulp.task('sass-files', function () {
	return gulp.src('project/css/main.scss')
	.pipe(sass())
	.pipe(uglify()) 
	.pipe(autoprefixer ('last 2 versions'))
	.pipe(concat('main.css'))
	.pipe(gulp.dest('dist/css'))
});
