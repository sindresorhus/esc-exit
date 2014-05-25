'use strict';
var readline = require('readline');

module.exports = function () {
	// don't unref if it's already listened to
	if (process.stdin.listeners('keypress').length === 0) {
		process.stdin.unref();
	}

	readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	process.stdin.on('keypress', function(s, key) {
		if (key && key.name === 'escape') {
			process.exit();
		}
	});
};
