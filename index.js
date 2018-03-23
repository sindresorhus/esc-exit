'use strict';
const readline = require('readline');

let rl;

module.exports = () => {
	rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	process.stdin.on('keypress', (ch, key) => {
		if (key && key.name === 'escape') {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	});
};

module.exports.done = () => {
	rl.close();
};
