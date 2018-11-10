var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."

  // You need to write front-end integration tests to ensure the Calculator model and browser UI are working to meet the user requirements. The framework provided to do this is Protractor JS using Chai for assertions. There is one sample test written in /tests/integration/tests.js and you should continue writing your tests in this file.
  // You should write tests to ensure the following requirements are met:
  // 1. Do the number buttons update the display of the running total?
  it('it should have number buttons that update the display of the running total', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#number2')).click();
    element(by.css('#number3')).click();
    element(by.css('#number4')).click();
    element(by.css('#number5')).click();
    element(by.css('#number6')).click();
    element(by.css('#number7')).click();
    element(by.css('#number8')).click();
    element(by.css('#number9')).click();
    element(by.css('#number0')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1234567890');
  })

  // 2. Do the arithmetical operations update the display with the result of the operation?
  it('it should update the display with the result of the arithmetical operation', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2');
  })

  // 3. Can multiple operations be chained together?
  it('it should be capable of chaining multiple operations together', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number1')).click(); // result = 10
    element(by.css('#operator_subtract')).click();
    element(by.css('#number2')).click(); // result = 8
    element(by.css('#operator_divide')).click();
    element(by.css('#number4')).click(); // result = 2
    element(by.css('#operator_multiply')).click();
    element(by.css('#number7')).click(); // result = 14
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('14');
  })

  // 4. Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
  it('it should return a negative number when a larger number is subtracted from a smaller one', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number2')).click(); // result = 8
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-1');
  })

  it('it should return a decimal when an odd number is divided by an even one', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click(); // result = 8
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2.5');
  })


  it('it should return an appropriate result when two large numbers are multiplied together', function(){
    running_total = element(by.css('#running_total'))
    
    // Enter 1 with 11 zeroes
    element(by.css('#number1')).click();
    for (let i = 0; i < 11; i++) {
      element(by.css('#number0')).click();      
    }

    element(by.css('#operator_multiply')).click();

    // Enter 1 with 11 zeroes
    element(by.css('#number1')).click();
    for (let i = 0; i < 11; i++) {
      element(by.css('#number0')).click();      
    }

    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1e+22');
  })

  // 5. If a number is divided by zero, is the output 'Not a number'? (You will need to modify the Calculator model to meet this requirement).
  it('it should return not a number when a number is divided by zero', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click(); // result = 8
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('Not a number');
  })

});