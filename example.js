'use strict';
const escExit = require('.');

const unsubscribe = escExit();

setTimeout(unsubscribe, 4000);
