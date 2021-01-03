'use strict';

module.exports.hello = async event => {
 try {
  const input = event.arguments.input;
  const sum = input.a + input.b;
  return sum;
 } catch (error) {
   return error;
 }
};
