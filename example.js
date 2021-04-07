import escExit from './index.js';

const unsubscribe = escExit();

setTimeout(unsubscribe, 4000);
