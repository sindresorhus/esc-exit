'use strict';
var readline = require('readline');
var rl;

module.exports = function () {
	rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	process.stdin.on('keypress', function(ch, key) {
		if (key && key.name === 'escape') {
			process.exit();
		}
	});
};

module.exports.done = function () {
	rl.close();
};
