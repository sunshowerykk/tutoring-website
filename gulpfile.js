// Load plugins
var gulp = require('gulp'), // 必须先引入gulp插件
browserSync = require('browser-sync'); // 保存自动刷新

// 虚拟服务配置
browserSync({
    files: "**",
    server: {
        baseDir: "./" // 路径
    },
    port: 8890, // 端口号
    open: false, // 运行时是否在新窗口打开
    ghostMode: false, // 各设备同步点击和滚动
    ui: { // ui配置界面
        port: 8891, // 端口号
    }
});
var reload = browserSync.reload;  // 浏览器刷新
//Setting
var rootDir = '',
    rootSrc = rootDir + 'src/';
    rootDist = rootDir + 'dist/';
// 任务
gulp.task('html', function(){
    return gulp.src(rootSrc + '**/*.html')
        .pipe(changed(rootDist),{extension: '.html'})
        //.pipe(assetRev())
        //.pipe(gulp.dest(rootDist))
        .pipe(reload({stream:true}))
});

gulp.task('watch', function(){
    //gulp.watch(rootSrc + 'static/js/*.js', ['js']);
    //gulp.watch(rootSrc + 'static/css/*.css', ['css']);
    //gulp.watch(rootSrc + 'static/image/*.{png,jpg,gif,ico}',['image']);
    //gulp.watch(rootSrc + '**/*.html', ['html']);
	gulp.watch(rootSrc + '**/*.html', ['html']);
});	
//gulp.task('build', ['html', 'image', 'js', 'css', 'video', 'watch']);
gulp.task('build', ['html', 'watch']);
gulp.task('default', function(){
    gulp.start('build');
    console.log('启动成功!');
}); 