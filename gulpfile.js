// 引入 gulp
var gulp = require('gulp'); 

// 引入组件
var less = require('gulp-less');

// 编译Less
gulp.task('less1', function() {
    gulp.src("v.less")
        .pipe(less())
        .pipe(gulp.dest('./'))
});
gulp.task('less2', function() {
    gulp.src("test/less/*.less")
        .pipe(less())
        .pipe(gulp.dest('./test/dist'))
});
// 默认任务
gulp.task('default', ['less1','less2'], function(){
    // 监听文件变化
    gulp.watch("*.less",['less1','less2']);
});
