# gulp-shorthand [![Build Status](https://travis-ci.org/kevva/gulp-shorthand.svg?branch=master)](https://travis-ci.org/kevva/gulp-shorthand)

> [shrthnd](https://github.com/frankmarineau/shrthnd.js) makes your CSS files lighter and more readable

*Issues with the output should be reported on the shrthnd [issue tracker](https://github.com/frankmarineau/shrthnd.js/issues).*


## Install

```
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
