import $ from 'jquery';
// import { checkHorzArr } from './../src/square.js';
// import { checkHorzNumb } from './../src/square.js';
// import { checkVertArr } from './../src/square.js';
// import { checkVertNumb } from './../src/square.js';
// import { checkGrid } from './../src/square.js';
import { Square } from './../src/square.js';

describe('square', function() {

  const arr = [[5,3,4,6,7,8,9,1,2],
    [6,7,2,1,9,5,3,4,8],
    [1,9,8,3,4,2,5,6,7],

    [8,5,9,7,6,1,4,2,3],
    [4,2,6,8,5,3,7,9,1],
    [7,1,3,9,2,4,8,5,6],

    [9,6,1,5,3,7,2,8,4],
    [2,8,7,4,1,9,6,3,5],
    [2,2,5,2,8,6,1,7,9]];
 /// see above, contains three 2s in the conner
    const testGrid = new Square(arr);

  it('should test if a ROW contains 1 -9 ', function() {
  expect(testGrid.checkVertNumb()).toEqual("NOT GOOD, a column includes a number more than once");
  });

  it('should test if a COLUMN contains 1 -9', function() {
  expect(testGrid.checkHorzNumb()).toEqual("NOT GOOD, a row includes a number more than once");
  });

  it('should test if each GRID contains contains 1 -9', function() {
  expect(testGrid.checkGrid()).toEqual("NOT GOOD, the grid includes a number more than once");
  });



});
