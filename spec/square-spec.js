import { checkHorzArr } from './../src/square.js';
import { checkHorzNumb } from './../src/square.js';
import { checkVertArr } from './../src/square.js';
import { checkVertNumb } from './../src/square.js';
import { checkGrid } from './../src/square.js';

describe('square', function() {

  it('should test if two rows are the same', function() {
  expect(checkHorzArr()).toEqual("GOOD, no rows are the same");
  });

  it('should test if a row contains 1 -9 ', function() {
  expect(checkHorzNumb()).toEqual("NOT GOOD, a row includes a number more that once");
  });

  it('should test if two columns are the same', function() {
  expect(checkVertArr()).toEqual("GOOD, no column is the same");
  });

  it('should test if a columns contains 1 -9', function() {
  expect(checkVertNumb()).toEqual("NOT GOOD, a column includes a number more that once");
  });



});
