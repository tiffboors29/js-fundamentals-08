'use strict';

//We'll learn how the following line of code works later in the course
var ask = typeof(prompt) === 'undefined' ? require('./ask.js') : prompt;

var count = 0;
var answer = '';

while (answer !== 'Antony') {
  answer = ask('Guess who?');
  count++;
}

console.log('loop ran' + ' ' + count + ' ' + 'times');
