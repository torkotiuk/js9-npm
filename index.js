const validator = require('validator'); //absolute way
const greeter = require('./greeter');
// import greeter from './greeter.js'; //ES6
greeter('Hello!!!');

const validateEmail = email => {
  return validator.isEmail(email);
};
console.log(
  'Is mango@mail.com a valid email?: ',
  validateEmail('mango@mail.com'),
);
console.log(
  'Is Mangozedog.com a valid email?: ',
  validateEmail('Mangozedog.com'),
);