class StringFunctions {
  stringLength = (string) => {
    return this.checkString(string);
  }

  capitalize = (str) => {
    if(typeof str !== 'string') {
      throw new Error('Argument is not a string!')
    }
    return str.replace(/^\w/, c => c.toUpperCase());
  }

  checkString  = (string) => {
    if(string.length < 1) {
      throw new Error('String should not be empty');
    }
    else if(string.length > 10) {
      throw new Error('String should be at maximun 10 characters long');
    }
    return string.length;
  }

  reverseString = (str) => {
    return str.split("").reverse().join("");
  }
}

class Calculator {
  add (a, b) {
    this.checkType(a, b);
    return a + b;
  }

  substract(a, b) {
    this.checkType(a, b);
    return a - b;
  }

  multiply(a, b) {
    this.checkType(a, b);
    return a * b;
  }

  divide(a, b) {
    this.checkType(a, b);
    this.noZeroDivision(b);
    return a / b;
  }

  checkType = (...values) => {
    values.forEach((num) => {
      if(typeof num !== 'number') {
        throw new Error('Only numbers allowed')
      }
    });
  }

  noZeroDivision = (b) => {
    if(b === 0) {
      throw new Error('Zero division undefined');
    }
  }
}

const stringInstance = new StringFunctions();
const calculatorInstance = new Calculator();
const expo = {stringInstance, calculatorInstance}

module.exports = expo;
