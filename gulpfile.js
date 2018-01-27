const gulp = require('gulp');
const gzip = require('gulp-gzip');
const color = require('gulp-color');
const imagemin = require('gulp-imagemin');

gulp.task('postbuild__js-browser', () => {
	gulp.src('./dist/browser/*.bundle.js')
		.pipe(gzip({ gzipOptions: { level: 9}, skipGrowingFiles: true }))
		.pipe(gulp.dest('./dist/browser'))
});

gulp.task('postbuild__js-server', () => {
	gulp.src('./dist/server/*.bundle.js')
		.pipe(gzip({ gzipOptions: { level: 9}, skipGrowingFiles: true }))
		.pipe(gulp.dest('./dist/server'))
});

gulp.task('postbuild__root-browser', () => {
	gulp.src('./dist/browser/**/*')
		.pipe(imagemin([
			imagemin.jpegtran({progressive: true}),
			imagemin.optipng({optimizationLevel: 5}),
			imagemin.svgo({
				plugins: [
					{ removeViewBox: true },
					{ cleanupIDs: false }
				]
			})
		]))
		.pipe(gulp.dest('./dist/browser'))
});

gulp.task('postbuild__root-server', () => {
	gulp.src('./dist/server/**/*')
		.pipe(imagemin([
			imagemin.jpegtran({progressive: true}),
			imagemin.optipng({optimizationLevel: 5}),
			imagemin.svgo({
				plugins: [
					{ removeViewBox: true },
					{ cleanupIDs: false }
				]
			})
		]))
		.pipe(gulp.dest('./dist/server'))
});

const gulpTasks = [
	'postbuild__js-browser',
	'postbuild__js-server',
	'postbuild__root-browser',
	'postbuild__root-server'
];

gulp.task('default', gulpTasks, () => {
	console.log(color(`Postbuild bundle has been successfully streamed ${new Date()}`, 'GREEN'));
});