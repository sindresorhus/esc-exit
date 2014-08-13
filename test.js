'use strict';
var assert = require('assert');
var escExit = require('./');

it('should exit when Esc is pressed', function (cb) {
	setTimeout(function () {}, 20000);

	process.exit = function () {
		assert(true);
		cb();
	};

	escExit();

	process.stdin.emit('keypress', '', {name: 'escape'});
});
