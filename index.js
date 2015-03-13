'use strict';

var gutil = require('gulp-util');
var shorthand = require('shrthnd');
var through = require('through2');

module.exports = function () {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new Error('Streaming is not supported'));
			return;
		}

		try {
			var ret = shorthand(file.contents.toString());
			file.contents = new Buffer(ret.string);
			cb(null, file);
		} catch (err) {
			cb(new gutil.PluginError('gulp-shorthand:', err, {
				fileName: file.path
			}));
		}
	});
};
