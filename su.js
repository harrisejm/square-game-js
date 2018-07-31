var arr = [[5,3,4,6,7,8,9,1,2],
          [6,7,2,1,9,5,3,4,8],
          [1,9,8,3,4,2,5,6,7],
        //  [1,9,8,3,4,2,5,6,7],

          [8,5,9,7,6,1,4,2,3],
          [4,2,6,8,5,3,7,9,1],
          [7,1,3,9,2,4,8,5,6],

      //[7,1,3,9,2,4,8,5,6],
          [9,6,1,5,3,7,2,8,4],
          [2,8,7,4,1,9,6,3,5],
          [3,4,5,2,8,6,1,7,9]];

var testArr = [1,2,3,4,5,6,7,8,9];
var newLine = [];
var final = "";
var newArr = arr.slice();

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


//checks if each array has 1- 9
for (var b = 0; b < newArr.length; b++) {
   var testLine = newArr[b].slice().sort(function(a,b) {
   return a - b;
 });
 if (testLine.join("") !== testArr.join("")) {
   final = "NOT GOOD, a row includes a number more that once";
 }
   newLine.push(testLine);
 }

 document.getElementById("test").innerHTML = vertArr;


var test = "";
var check = "";
//checks if two arrays are the same
for (var i = 0; i < arr.length; i++) {
  for (var a = 0; a < arr.length; a ++) {
    if (i !== a && arr[i].join("") === arr[a].join("")) {
      check = "BAD, two rows are the same";
    }
  }
}
document.getElementById("test1").innerHTML = check;
