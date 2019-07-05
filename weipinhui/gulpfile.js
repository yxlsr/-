const gulp =require("gulp");
// 拷贝静态文件
// html
// .scss
// 图片
// 数据
// .js
gulp.task("copy-html",function(){
    return gulp.src("*.html")
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload());
})
const sass =require("gulp-sass");
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");
gulp.task("sass",function(){
    return gulp.src(["index.scss","iconfont.css"])
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
gulp.task("images",function(){
    return gulp.src(["*.{jpg,png}","img/*.{jpg,png}"])
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
})
gulp.task("data",function(){
    return gulp.src(["*.json","!package.json"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());
})
gulp.task("scripts",function(){
    return gulp.src(["*.js","!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})
gulp.task("build",["copy-html","sass","images","data","scripts"],function(){
    console.log("项目建立成功")
})
gulp.task("watch",function(){
    gulp.watch(["*.js","!gulpfile.js"],["scripts"]);
    gulp.watch(["*.json","!package.json"],["data"]);
    gulp.watch(["*.{jpg,png}","img/*.{jpg,png}"],["images"]);
    gulp.watch(["index.scss"],["sass"]);
    gulp.watch(["*.html"],["copy-html"]);
    
})
const connect =require("gulp-connect");
gulp.task("server",function(){
    connect.server({
        root:"dist",
        port:9999,
        livereload:true
    })
})
gulp.task("default",["watch","server"])