'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`; // Here's still Jonas because of Jonas is still on the top of scope chain
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      output = 'New Output!';
      const str = `Oh, you are a millenial, ${firstName}`; // it will find the variable in the current scope first, so it's Steven
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // add(2, 3);
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
