'use strict';

var age = 22;
var state = 'MA';

if ( age >= 18 && state === 'MA') {
  console.log('You can buy cigarettes.');
} else {
  console.log('You can\'t buy cigarettes.');
}

if ( age >= 21 && state === 'MA') {
  console.log('You can buy alcohol.');
} else {
  console.log('You can\'t buy alcohol.');
}
