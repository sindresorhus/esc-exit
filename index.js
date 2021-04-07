import readline from 'readline';

export default function escExit() {
	readline.emitKeypressEvents(process.stdin);

	if (process.stdin.isTTY) {
		process.stdin.setRawMode(true);
	}

	const listener = (ch, key) => {
		if (!key) {
			return;
		}

		if (
			key.name === 'escape' ||
			(key.ctrl && key.name === 'c')
		) {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	};

	process.stdin.on('keypress', listener);

	return () => {
		process.stdin.on('keypress', listener);

		if (process.stdin.isTTY) {
			process.stdin.setRawMode(false);
		}
	};
}
