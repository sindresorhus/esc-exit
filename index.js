'use strict';
const readline = require('readline');

readline.emitKeypressEvents(process.stdin);

module.exports = () => {
	process.stdin.on('keypress', (ch, key) => {
		if (key && key.name === 'escape') {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	});
};
