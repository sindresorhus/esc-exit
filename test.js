import test from 'ava';
import execa from 'execa';
import delay from 'delay';

test('exit when `esc` key is pressed', async t => {
	const subProcess = execa(process.execPath, ['fixture.js'], {reject: false});
	await delay(100);
	process.stdin.emit('keypress', '', {name: 'escape'});
	t.is(subProcess.exitCode, 1);
});
