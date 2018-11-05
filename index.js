'use strict';
const readline = require('readline');

module.exports = () => {
	readline.emitKeypressEvents(process.stdin);

	if (process.stdin.isTTY) {
		process.stdin.setRawMode(true);
	}

	const listener = (ch, key) => {
		if (key && key.name === 'escape') {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	};

	process.stdin.on('keypress', listener);

	return () => {
		process.stdin.removeEventListener('keypress', listener);

		if (process.stdin.isTTY) {
			process.stdin.setRawMode(false);
		}
	};
};
