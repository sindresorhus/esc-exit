'use strict';
const readline = require('readline');

// allows to listen to events from stdin.
readline.emitKeypressEvents(process.stdin);

module.exports = function () {
	process.stdin.on('keypress', (str, key) => {
		if (key && key.name === 'escape') {
			process.exit();
		}
	});
};
