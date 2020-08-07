const videoPATH = {
			"input": "./dev/static/video/**/*.{mp4,webm,ogv}",
			"output": "./build/static/video/"
		};

module.exports = function () {
    $.gulp.task('video:dev', () => {
        return $.gulp.src(videoPATH.input)
            .pipe($.gulp.dest(videoPATH.output));
    });

    $.gulp.task('video:build', () => {
        return $.gulp.src(videoPATH.input)
            // .pipe(cache(imagemin([
            //     imgCompress({
            //         loops: 4,
            //         min: 70,
            //         max: 80,
            //         quality: 'high'
            //     }),
            //     imagemin.gifsicle(),
            //     imagemin.optipng(),
            //     imagemin.svgo()
            // ])))
            .pipe($.gulp.dest(videoPATH.output));
    });
};
