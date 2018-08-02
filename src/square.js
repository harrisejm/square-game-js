export class Square {
  constructor(arr) {
    this.arr = arr;
    this.testArr = [1,2,3,4,5,6,7,8,9];
/////
    this.getVertArr = function() {
      const tempArr = [];
      for (let i = 0; i < this.arr.length + 1; i++) {
        for (let a = 0; a < this.arr[0].length + 1; a++) {
          if (a === 9) {
            tempArr.push(" ");
          } else {
            tempArr.push(this.arr[a][i]);
          }
        }
      }
      const vertArr = tempArr.join("").trim().split(" ");
      const arr2 = [];

      for (let x = 0; x < vertArr.length; x++) {
        arr2.push(vertArr[x].split(""));
      }
      return arr2;
    }
/////
    this.checkVertNumb = function() {
      for (let b = 0; b < this.getVertArr().length; b++) {
        let testLine = this.getVertArr()[b].slice().sort(function(a,b) {
          return a - b;
        });
        if (testLine.join("") !== this.testArr.join("")) {
          return "NOT GOOD, a column includes a number more that once";
        }
      }
      return "GOOD no column includes a number more than once";
  }
/////
    this.checkHorzNumb = function() {
      const newArr = this.arr.slice();
      for (let b = 0; b < newArr.length; b++) {
        let testLine = newArr[b].sort(function(a,b) {
          return a - b;
        });
        if (testLine.join("") !== this.testArr.join("")) {
          return "NOT GOOD, a row includes a number more that once";
        }
      }
      return "GOOD, no row includes a number more that once";
    }
/////
  this.checkGrid = function() {
const tempArr2 = [];
for (let q = 0; q < this.arr.length; q++) {
  for (let y = 0; y < this.arr[0].length; y++) {
    if (y%3 === 0) {
      tempArr2.push(" ");
      tempArr2.push(this.arr[q][y]);
    } else {
      tempArr2.push(this.arr[q][y]);
    }
  }
}
const testSmall = tempArr2.join("").trim().split(" ");
const arr3 = [];

for (let r = 0; r < testSmall.length; r++) {
  arr3.push(testSmall[r].split(""));
}
let topRight = arr3[0].concat(arr3[3], arr3[6]);
let topMiddle = arr3[1].concat(arr3[4], arr3[7]);
let topLeft = arr3[2].concat(arr3[5], arr3[8]);

let leftMiddle = arr3[9].concat(arr3[12], arr3[15]);
let center = arr3[10].concat(arr3[13], arr3[16]);
let rightMiddle = arr3[11].concat(arr3[14], arr3[17]);

let bottomLeft = arr3[18].concat(arr3[21], arr3[24]);
let bottomMiddle = arr3[19].concat(arr3[22], arr3[25]);
let bottomRight = arr3[20].concat(arr3[23], arr3[26]);
////

let allArr = [topRight, topMiddle, topLeft, leftMiddle, center, rightMiddle, bottomLeft, bottomMiddle, bottomRight];

  for (let b = 0; b < allArr.length; b++) {
    let testLine = allArr[b].slice().sort(function(a,b) {
      return a - b;
    });
    if (testLine.join("") !== this.testArr.join("")) {
     return "NOT GOOD, the grid includes a number more that once";
    }
  }
  return "GOOD, all grids includes 1 - 9";
}

  }
}
// const arr = [[5,3,4,6,7,8,9,1,2],
// [6,7,2,1,9,5,3,4,8],
// [1,9,8,3,4,2,5,6,7],
//
// [8,5,9,7,6,1,4,2,3],
// [4,2,6,8,5,3,7,9,1],
// [7,1,3,9,2,4,8,5,6],
//
// //[7,1,3,9,2,4,8,5,6],
// [9,6,1,5,3,7,2,8,4],
// [2,8,7,4,1,9,6,3,5],
// [2,2,5,2,8,6,1,7,9]];
// const testGrid = new Square(arr);

//const testArr = [1,2,3,4,5,6,7,8,9];

// const newArr = arr.slice();
//
// /////


// //////////
// //check grids
//
// const tempArr2 = [];
// for (let q = 0; q < arr.length; q++) {
//   for (let y = 0; y < arr[0].length; y++) {
//     if (y%3 === 0) {
//       tempArr2.push(" ");
//       tempArr2.push(arr[q][y]);
//     } else {
//       tempArr2.push(arr[q][y]);
//     }
//   }
// }
// const testSmall = tempArr2.join("").trim().split(" ");
// const arr3 = [];
//
// for (let r = 0; r < testSmall.length; r++) {
//   arr3.push(testSmall[r].split(""));
// }
// let topRight = arr3[0].concat(arr3[3], arr3[6]);
// let topMiddle = arr3[1].concat(arr3[4], arr3[7]);
// let topLeft = arr3[2].concat(arr3[5], arr3[8]);
//
// let leftMiddle = arr3[9].concat(arr3[12], arr3[15]);
// let center = arr3[10].concat(arr3[13], arr3[16]);
// let rightMiddle = arr3[11].concat(arr3[14], arr3[17]);
//
// let bottomLeft = arr3[18].concat(arr3[21], arr3[24]);
// let bottomMiddle = arr3[19].concat(arr3[22], arr3[25]);
// let bottomRight = arr3[20].concat(arr3[23], arr3[26]);
// ////
//
//
// let allArr = [topRight, topMiddle, topLeft, leftMiddle, center, rightMiddle, bottomLeft, bottomMiddle, bottomRight];
// export function checkGrid() {
//   for (let b = 0; b < allArr.length; b++) {
//     let testLine = allArr[b].slice().sort(function(a,b) {
//       return a - b;
//     });
//     if (testLine.join("") !== testArr.join("")) {
//      return "NOT GOOD, the grid includes a number more that once";
//     }
//   }
//   return "GOOD, all grids includes 1 - 9";
// }
//
//
// //////






//////////////
///////////////////////
////////////////////////////////////////////////////////
// //checks if two arrays are the same
// export function checkVertArr() {
//   for (let i = 0; i < arr2.length; i++) {
//     for (let a = 0; a < arr2.length; a ++) {
//       if (i !== a && arr2[i].join("") === arr2[a].join("")) {
//         return "BAD, two column are the same";
//       }
//     }
//   }
//   return "GOOD, no column is the same";
// }


//checks if two arrays are the same
// export function checkHorzArr() {
//   for (let i = 0; i < arr.length; i++) {
//     for (let a = 0; a < arr.length; a ++) {
//       if (i !== a && arr[i].join("") === arr[a].join("")) {
//       return "BAD, two rows are the same";
//       }
//       }
//     }
//     return "GOOD, no rows are the same";
//   }
