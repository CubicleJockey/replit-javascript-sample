'use strict';

let stringBuilder = require('./string-builder');
module.exports = {
    StringBuilder: stringBuilder
};


console.log('Sample Repl.It project attached to GitHub');
console.log('This is a JavaScript sample');

debugger;
console.log(typeof stringBuilder);

/*
stringBuilder.appendLine('First line added with appendLine.');
stringBuilder.append('This line was added with append');
stringBuilder.append('\n\n\n');

console.log(stringBuilder.toString());
*/