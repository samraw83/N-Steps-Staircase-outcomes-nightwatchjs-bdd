const assert = require('assert');
const { Given, When, Then } = require('cucumber');

const Calculator = require('../../lib/NStepsCalculator');

let calculator;

Given('The Number of Steps in staircase is {int}', function (N) {
    
    calculator = new Calculator(N);
    
});

When('Users gets the possible outcomes count as {int}', function (result) {
    
   calculator.combinations(result);
});

Then('The Combinations Result should be {int}', function (expected) {
  
  assert.equal(calculator.getResult(), expected)
});