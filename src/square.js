

var arr = [[5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],

  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],

//[7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [2,2,5,2,8,6,1,7,9]];

var testArr = [1,2,3,4,5,6,7,8,9];

var newArr = arr.slice();

/////
var tempArr = [];

for (var i = 0; i < arr.length + 1; i++) {
  for (var a = 0; a < arr[0].length + 1; a++) {
    if (a === 9) {
      tempArr.push(" ");
    } else {
      tempArr.push(arr[a][i]);
    }
  }
}
var vertArr = tempArr.join("").trim().split(" ");
var arr2 = [];
//var newVertArr = vertArr.slice();
for (var x = 0; x < vertArr.length; x++) {
  arr2.push(vertArr[x].split(""));
}
//////////
//check grids

var tempArr2 = [];
for (var q = 0; q < arr.length; q++) {
  for (var y = 0; y < arr[0].length; y++) {
    if (y%3 === 0) {
      tempArr2.push(" ");
      tempArr2.push(arr[q][y]);
    } else {
      tempArr2.push(arr[q][y]);
    }
  }
}
var testSmall = tempArr2.join("").trim().split(" ");
var arr3 = [];

for (var r = 0; r < testSmall.length; r++) {
  arr3.push(testSmall[r].split(""));
}
var topRight = arr3[0].concat(arr3[3], arr3[6]);
var topMiddle = arr3[1].concat(arr3[4], arr3[7]);
var topLeft = arr3[2].concat(arr3[5], arr3[8]);

var leftMiddle = arr3[9].concat(arr3[12], arr3[15]);
var center = arr3[10].concat(arr3[13], arr3[16]);
var rightMiddle = arr3[11].concat(arr3[14], arr3[17]);

var bottomLeft = arr3[18].concat(arr3[21], arr3[24]);
var bottomMiddle = arr3[19].concat(arr3[22], arr3[25]);
var bottomRight = arr3[20].concat(arr3[23], arr3[26]);
////


var allArr = [topRight, topMiddle, topLeft, leftMiddle, center, rightMiddle, bottomLeft, bottomMiddle, bottomRight];
export function checkGrid() {
  for (var b = 0; b < allArr.length; b++) {
    var testLine = allArr[b].slice().sort(function(a,b) {
      return a - b;
    });
    if (testLine.join("") !== testArr.join("")) {

      document.getElementById("test4").innerHTML = "NOT GOOD, the grid includes a number more that once";

    }
  }
}


//////

export function checkVertNumb(){
  for (var b = 0; b < arr2.length; b++) {
    var testLine = arr2[b].slice().sort(function(a,b) {
      return a - b;
    });

    if (testLine.join("") !== testArr.join("")) {
      //document.getElementById("test2").innerHTML = "NOT GOOD, a column includes a number more that once";
      return "NOT GOOD, a column includes a number more that once";

    }
  }
  return "GOOD no column includes a number more than once";
}


//checks if two arrays are the same
export function checkVertArr() {
  for (var i = 0; i < arr2.length; i++) {
    for (var a = 0; a < arr2.length; a ++) {
      if (i !== a && arr2[i].join("") === arr2[a].join("")) {
        //document.getElementById("test3").innerHTML = "BAD, two column are the same";
        return "BAD, two column are the same";
      }
    }
  }
  return "GOOD, no column is the same";
}

//checks if each array has 1- 9
export function checkHorzNumb() {
  for (var b = 0; b < newArr.length; b++) {
    var testLine = newArr[b].slice().sort(function(a,b) {
      return a - b;
    });
    if (testLine.join("") !== testArr.join("")) {
  // document.getElementById("test1").innerHTML = "NOT GOOD, a row includes a number more that once";
      return "NOT GOOD, a row includes a number more that once";
    }
  }
  return "GOOD, no row includes a number more that once";
}

//checks if two arrays are the same
export function checkHorzArr() {
  for (var i = 0; i < arr.length; i++) {
    for (var a = 0; a < arr.length; a ++) {
      if (i !== a && arr[i].join("") === arr[a].join("")) {
    //  document.getElementById("test").innerHTML = "BAD, two rows are the same";
      return "BAD, two rows are the same";
      }
      }
    }
    return "GOOD, no rows are the same";
  }
