const { TestWatcher } = require('jest');
const funcs = require('./excersice');
const {stringInstance, calculatorInstance} = funcs

describe('String tests', () => {
  test('String hello should be 5', () => {
    expect(stringInstance.stringLength('hello')).toBe(5);
  });
  
  test('Empty string should return error', () => {
    expect(() => stringInstance.stringLength('')).toThrow(Error);
  });
  
  test('Larger than 10 characters should return error', () => {
    expect(() => stringInstance.stringLength('aaaaaaaaaaa')).toThrow(Error);
  });
  
  test('Must return a capitalized string', () => {
    expect(stringInstance.capitalize('hello')).toMatch(/Hello/);
  });

  test('Argument must be string', () => {
    expect(() => stringInstance.capitalize(123)).toThrow(Error);
  });

  test('String must be reversed', () => {
    expect(stringInstance.reverseString('hello')).toMatch(/olleh/);
  });
})

describe('Calculator tests', () => {
  describe('Addition', () => {
    test('add 5 + 5 should be 10', () => {
      expect(calculatorInstance.add(5, 5)).toBe(10);
    });

    test('add 0 + 5 should be 5', () => {
      expect(calculatorInstance.add(0, 5)).toBe(5);
    });

    test('Should only recieve numbers', () => {
      expect(() => calculatorInstance.add('d')).toThrow(Error);
    })
  });

  describe('Substraction', () => {
    test('substract 5 - 5 should be 0', () => {
      expect(calculatorInstance.substract(5, 5)).toBe(0);
    });

    test('substract 0 - 5 should be -5', () => {
      expect(calculatorInstance.substract(0, 5)).toBe(-5);
    });

    test('Should only recieve numbers', () => {
      expect(() => calculatorInstance.substract('d')).toThrow(Error);
    })
  });

  describe('Multiplication', () => {
    test('multiply 5 * 5 should be 25', () => {
      expect(calculatorInstance.multiply(5, 5)).toBe(25);
    });

    test('multiply 0 * 5 should be 0', () => {
      expect(calculatorInstance.multiply(0, 5)).toBe(0);
    });

    test('Should only recieve numbers', () => {
      expect(() => calculatorInstance.multiply('d')).toThrow(Error);
    })
  });

  describe('Division', () => {
    test('divide 5 / 5 should be 1', () => {
      expect(calculatorInstance.divide(5, 5)).toBe(1);
    });

    test('divide 5 / 0 should be Error', () => {
      expect(() => calculatorInstance.divide(5, 0)).toThrow(Error);
    });

    test('Should only recieve numbers', () => {
      expect(() => calculatorInstance.divide('d')).toThrow(Error);
    })
  });
})


