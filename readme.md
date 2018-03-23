# esc-exit [![Build Status](https://travis-ci.org/sindresorhus/esc-exit.svg?branch=master)](https://travis-ci.org/sindresorhus/esc-exit)

> Exit the process when the <kbd>esc</kbd> key is pressed

Useful for CLI tools to let the user press <kbd>esc</kbd> to get out.


## Install

```
$ npm install esc-exit
```


## Usage

```js
const escExit = require('esc-exit');

escExit();
```


## API

Using this prevents the process from exiting normally.

There are multiple ways you can handle this:

- Call `escExit.done()` when you're done listening. It will then let the process exit normally.

- Use `process.stdin.unref()` if you don't intend to use `procces.stdin` afterwards. It will let the process exit normally.

- Call `process.exit()` to exit the process directly.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
