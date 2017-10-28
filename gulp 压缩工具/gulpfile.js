//你要确保全局下你安装了npm install gulp -g
//在你要用的文件夹下 npm install -D gulp
//首先你要下载这里所有东西 npm install -D xxx
var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
const jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');

//css压缩
gulp.task('css',function(){//你这个合并的任务交什么名字 启用时候glup css

	gulp.src('./your need concat css/*.css') //找到你要合并的文件夹，和合并文件什么样后缀的文件
  		.pipe(concat('commer.css'))//合并成什么样的文件名
  		.pipe(cssnano())//合并
  		.pipe(gulp.dest('commer/concat CSS'));//合并到什么路径
})

//js压缩
gulp.task('js', function() {
	gulp.src('./your need concat js/*.js')//合并的js文件在哪里
		.pipe(jshint())//检查格式
	    .pipe(jshint.reporter('default'))//输出

		.pipe(concat('commer.js'))//合并成什么样的文件名
	    .pipe(rename({
	    	suffix:'.min'//家个名字
	    }))
	    .pipe(uglify())//压缩
	    .pipe(gulp.dest('commer/concat JS'))//放到什么文件夹
});

//图片压缩
gulp.task('img', function(argument){
    gulp.src('./your need concat img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('commer/concat IMG'))
});
//html压缩
gulp.task('html', function() { //Minify PNG, JPEG, GIF and SVG images with imagemin
  gulp.src('./your need concat html/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('commer/concat HTML'));
});
//可以一次过启动
gulp.task('build',['css','js','img','html'])