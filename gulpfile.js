var gulp        = require('gulp'),// сюда прописываются требуемые либы
	sass        = require('gulp-sass'),
	browserSync = require('browser-sync');

gulp.task('sass', function() { // создание задачи для гульпа
	return gulp.src('app/sass/**/*.sass')  // файлы которые берёт гульп
	.pipe(sass()) // действие производимое над файлами
	.pipe(gulp.dest('app/css')) // папка куда выгружаются файлы
	.pipe(browserSync.reload({stream: true})) // дополнительная комманда для перезагрузки браузера
});

gulp.task('browser-sync', function() {
	browserSync({
		server:{
			baseDir: 'app'
		},
		//notify: false
	});
});

gulp.task('watch',['browser-sync', 'sass'], function() {
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);

});