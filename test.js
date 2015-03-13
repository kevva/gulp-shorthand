'use strict';

var gutil = require('gulp-util');
var shorthand = require('./');
var test = require('ava');

test(function (t) {
	t.plan(1);

	var stream = shorthand();

	stream.on('data', function (file) {
		t.assert(file.contents.indexOf('background: url(\'cat.jpg\') top center;') !== -1);
	});

	stream.end(new gutil.File({
		path: __dirname + '/fixture.css',
		contents: new Buffer('body{background-image:url(\'cat.jpg\');background-position:top center;}')
	}));
});
