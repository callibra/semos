console.log('Welcome Node.JS from terminal');
console.log('1');
console.log('2');
console.log('3');

//! Funkcionalni deklaracii
function sobirok(a, b) {
  return a + b;
}

//! Funkcionalni ekspresii
const proizvod = function (a, b) {
  return a * b;
};

//! Fat-Arrow functions
const razlika = (a, b) => a - b;

// !Methodi
const ucenik = {
  ime: 'Trajan',
  pozdrav: function () {
    console.log(`Zdravo, ${this.ime}`);
  },
};

ucenik.pozdrav();

//! IIFE Imidiately invoked function expressions
(function () {
  console.log('Ova e nashiot taen kod');
})();

