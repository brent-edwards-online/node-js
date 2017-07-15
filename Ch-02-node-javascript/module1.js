function myFunction(){
  console.log('I am function in module 1');
}

var myString = 'I am variable in module 1';

module.exports.myFunction = myFunction;
module.exports.myString = myString;