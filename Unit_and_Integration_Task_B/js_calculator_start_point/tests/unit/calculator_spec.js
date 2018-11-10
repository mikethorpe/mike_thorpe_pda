var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it can add a number to the runing total', function() {
    calculator.previousTotal = 4;
    calculator.add(1);
    expected = 5;
    actual = calculator.runningTotal;
    assert.equal(actual, expected);
  })

  it('it can subtract a number from the runing total', function() {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    expected = 3;
    actual = calculator.runningTotal;
    assert.equal(actual, expected);
  })

  it('it can multiply a number by the runing total', function() {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    expected = 15;
    actual = calculator.runningTotal;
    assert.equal(actual, expected);
  })

  it('it can divide a number by the runing total', function() {
    calculator.previousTotal = 21;
    calculator.divide(7);
    expected = 3;
    actual = calculator.runningTotal;
    assert.equal(actual, expected);
  })

});
