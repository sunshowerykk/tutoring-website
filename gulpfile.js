// Load plugins
var gulp = require('gulp'), // ����������gulp���
browserSync = require('browser-sync'); // �����Զ�ˢ��

// �����������
browserSync({
    files: "**",
    server: {
        baseDir: "./" // ·��
    },
    port: 8890, // �˿ں�
    open: false, // ����ʱ�Ƿ����´��ڴ�
    ghostMode: false, // ���豸ͬ������͹���
    ui: { // ui���ý���
        port: 8891, // �˿ں�
    }
});
var reload = browserSync.reload;  // �����ˢ��
//Setting
var rootDir = '',
    rootSrc = rootDir + 'src/';
    rootDist = rootDir + 'dist/';
// ����
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
    console.log('�����ɹ�!');
}); 