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

- Call the unsubscribe method that `escExit()` returns when you're done listening. It will then let the process exit normally.

- Call `process.exit()` to exit the process directly.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
