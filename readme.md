# esc-exit

> Exit the process when the <kbd>esc</kbd> key is pressed

Useful for CLI tools to let the user press <kbd>esc</kbd> or <kbd>control+c</kbd> to get out.

## Install

```
$ npm install esc-exit
```

## Usage

```js
import escExit from 'esc-exit';

escExit();
```

## API

Using this prevents the process from exiting normally.

There are multiple ways you can handle this:

- Call the unsubscribe method that `escExit()` returns when you're done listening. It will then let the process exit normally.

- Call `process.exit()` to exit the process directly.
