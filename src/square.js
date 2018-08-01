var arr = [[5,3,4,6,7,8,9,1,2],
           [6,7,2,1,9,5,3,4,8],
           [1,9,8,3,4,2,5,6,7],

           [8,5,9,7,6,1,4,2,3],
           [4,2,6,8,5,3,7,9,1],
           [7,1,3,9,2,4,8,5,6],

      //[7,1,3,9,2,4,8,5,6],
           [9,6,1,5,3,7,2,8,4],
           [2,8,7,4,1,9,6,3,5],
           [3,4,5,2,8,6,1,7,9]];

var testArr = [1,2,3,4,5,6,7,8,9];
var newLine = [];

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
var newVertArr = vertArr.slice();
for (var x = 0; x < vertArr.length; x++) {
  arr2.push(vertArr[x].split(""));
}
//////////
//check grids

var tempArr2 = [];
for (var i = 0; i < arr.length; i++) {
  for (var a = 0; a < arr[0].length; a++) {
   if (a%3 === 0) {
     tempArr2.push(" ");
     tempArr2.push(arr[i][a]);
   } else {
    tempArr2.push(arr[i][a]);
    }
  }
}
var testSmall = tempArr2.join("").trim().split(" ");
var arr3 = [];

for (var x = 0; x < testSmall.length; x++) {
arr3.push(testSmall[x].split("")); //pushes nestd arrays into arr3
}
var topRight = [testSmall[0], testSmall[3], testSmall[6]];
var topMiddle = [testSmall[1], testSmall[4], testSmall[7]];
var topLeft = [testSmall[2], testSmall[5], testSmall[8]];

var leftMiddle = [testSmall[9], testSmall[12], testSmall[15]];
var center = [testSmall[10], testSmall[13], testSmall[16]];
var rightMiddle = [testSmall[11], testSmall[14], testSmall[17]];

var bottomLeft = [testSmall[18], testSmall[21], testSmall[24]];
var bottomMiddle = [testSmall[19], testSmall[22], testSmall[25]];
var bottomRight = [testSmall[20], testSmall[23], testSmall[26]];


//document.getElementById("test").innerHTML = bottomRight;

///////
//////
/////
export function checkVertNumb(){
for (var b = 0; b < arr2.length; b++) {
   var testLine = arr2[b].slice().sort(function(a,b) {
   return a - b;
 });
 if (testLine.join("") !== testArr.join("")) {
   document.getElementById("test2").innerHTML = "NOT GOOD, a column includes a number more that once";
 }
 }
}

//checks if two arrays are the same
export function checkVertArr() {
for (var i = 0; i < arr2.length; i++) {
  for (var a = 0; a < arr2.length; a ++) {
    if (i !== a && arr2[i].join("") === arr2[a].join("")) {
      document.getElementById("test3").innerHTML = "BAD, two column are the same";
    }
  }
}
}

//checks if each array has 1- 9
export function checkHorzNumb() {
for (var b = 0; b < newArr.length; b++) {
   var testLine = newArr[b].slice().sort(function(a,b) {
   return a - b;
 });
 if (testLine.join("") !== testArr.join("")) {
  document.getElementById("test").innerHTML = "NOT GOOD, a row includes a number more that once";
 }
 }
}

//checks if two arrays are the same
export function checkHorzArr() {
for (var i = 0; i < arr.length; i++) {
  for (var a = 0; a < arr.length; a ++) {
    if (i !== a && arr[i].join("") === arr[a].join("")) {
      document.getElementById("test1").innerHTML = "BAD, two rows are the same";
    }
  }
}
}
