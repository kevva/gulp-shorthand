# gulp-shorthand [![Build Status](http://img.shields.io/travis/kevva/gulp-shorthand.svg?style=flat)](https://travis-ci.org/kevva/gulp-shorthand)

> Makes your CSS files lighter and more readable

## Install

```bash
$ npm install --save gulp-shorthand
```

## Usage

```js
var gulp = require('gulp');
var shorthand = require('gulp-shorthand');

gulp.task('default', function () {
	return gulp.src('src/index.css')
		.pipe(shorthand())
		.pipe(gulp.dest('dest'));
});
```

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
