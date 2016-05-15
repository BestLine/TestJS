var gulp        = require('gulp'),// сюда прописываются требуемые либы
	sass        = require('gulp-sass'),
	browserSync = require('browser-sync'),
	concat		= require('gulp-concat'),
	uglify		= require('gulp-uglifyjs'),
	jade 		= require('jade');

gulp.task('sass', function() { // создание задачи для гульпа
	return gulp.src('app/sass/**/*.sass')  // файлы которые берёт гульп
	.pipe(sass()) // действие производимое над файлами
	.pipe(gulp.dest('app/css')) // папка куда выгружаются файлы
	.pipe(browserSync.reload({stream: true})) // дополнительная комманда для перезагрузки браузера
});

gulp.task('jade', function() {
	return gulp.src('app/jade/**/*.jade')
	.pipe(jade())
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({stream: true}))
})

//gulp.task('scripts', function() { // таск конкатирования скриптов
//	return gulp.src([ // берём файлы
//		'app/libs/jquery/jquery.min.js'
//		'app/libs/magnific'
//	]);
//	.pipe(concat('libs.min.js')); // конкатируем (соединяем в один)
//	.pipe(uglify()); // минифицируем (сжимаем)
//	.pipe(gulp.dest('app/js')); // выгружаем
//});

gulp.task('browser-sync', function() { // скрипт обновляющий браузер
	browserSync({
		server:{
			baseDir: 'app'// главная дирректория разработки
		},
		//notify: false // опция отвечающая за вывод уведомлений
	});
});

gulp.task('watch',['browser-sync', 'sass', 'jade'], function() { // наблюдатель
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);

});