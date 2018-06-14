var gulp = require('gulp');
// 游览器同步测试工具
var browserSync = require('browser-sync').create();
//less
var less = require('gulp-less');
//自动刷新
var reload  = browserSync.reload;
// 接口
var proxy = require('http-proxy-middleware');

var proxy1 = proxy('/notcontrol', {
  target: 'http://192.168.1.51:11014',
  changeOrigin: true,
});


// 静态服务器 + 监听 scss/html 文件
gulp.task('serve',['less'], function() {
    browserSync.init({
      server: "./",
      port:4444,
      middleware: [proxy1] 
    });
    gulp.watch("./src/css/*.less", ['less'])
    gulp.watch("./*.html").on('change', reload);
});

// scss编译后的css将注入到浏览器里实现更新
gulp.task('less', function() {
  return gulp.src("./src/css/*.less")
      .pipe(less())
      .pipe(gulp.dest("./src/css"))
      .pipe(reload({stream: true}));
});



gulp.task('default', ['serve']);