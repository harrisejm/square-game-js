var arr11 = [1, 4, 7, 9,  5];
/* var arr2 = [6, 7, 8, 9, 10];
var arr3 = [11,12,13,14,15];
var arr4 = [16,17,18,19,20];
var arr5 = [21,22,23,24,25];  */

//let removeIndex1 = arr11.indexOf(arr11[2]);

var test = [1,2,3,4,5,6,7,8,9];
var tempArr = test.slice();


let arr1 = [];
let arr2 = [];
let arrComb = [arr1, arr2];

function fillArr(){
  if (tempArr.length !== 0) {

    let selection = tempArr[Math.floor(Math.random()*(tempArr.length))];
    arr1.push(selection);
    let remove = tempArr.indexOf(selection);
    tempArr.splice(remove, 1);
    fillArr();
  } else {
    tempArr = test.slice();
    fillArr2();
  }
}

 function fillArr2() {


  if (tempArr.length !== 0) {
    for (var i = 0; i < test.length; i++) {

  let removeIndex1 = tempArr.indexOf(arr1[i]);

  let remove1 = tempArr.splice(removeIndex1, 1);


    let selection = tempArr[Math.floor(Math.random()*(tempArr.length))];
    if (selection === undefined) {
     arr2.push(remove1);
    } else {
    arr2.push(selection);
    }
    tempArr.push(remove1);

    let remove = tempArr.indexOf(selection);
    tempArr.splice(remove, 1);

    }
    fillArr2();
  }
}

fillArr();

 var tempArr2 = [];
for (var q = 0; q < arrComb.length; q++) {
  for (var y = 0; y < arrComb.length+1; y++) {
    if (y%3 === 0) {
      tempArr2.push(" ");
      tempArr2.push(arrComb[q][y]);
    } else {
      tempArr2.push(arrComb[q][y]);
    }
  }
}
var testSmall = tempArr2.join("").trim().split(" ");
var arr3 = [];

for (var r = 0; r < testSmall.length; r++) {
  arr3.push(testSmall[r].split(""));
}


document.getElementById("test").innerHTML = arr1;
document.getElementById("test1").innerHTML = arr2;
document.getElementById("test2").innerHTML = testSmall;
