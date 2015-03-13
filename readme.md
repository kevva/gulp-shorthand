# gulp-shorthand [![Build Status](http://img.shields.io/travis/kevva/gulp-shorthand.svg?style=flat)](https://travis-ci.org/kevva/gulp-shorthand)

> [shrthnd](https://github.com/frankmarineau/shrthnd.js) makes your CSS files lighter and more readable

*Issues with the output should be reported on the Traceur [issue tracker](https://github.com/frankmarineau/shrthnd.js/issues).*

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
