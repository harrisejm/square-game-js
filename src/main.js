import { Square } from './square';
// import { checkVertNumb } from './square';
// import { checkVertArr } from './square';
// import { checkHorzNumb } from './square';
// import { checkHorzArr } from './square';
// import { checkGrid } from './square';

//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// document.getElementById("test2").innerHTML = checkVertNumb();
// document.getElementById("test3").innerHTML = checkVertArr();
//
// document.getElementById("test").innerHTML = checkHorzArr();
// document.getElementById("test4").innerHTML = checkGrid();


const arr = [[5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],

  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],

  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [2,2,5,2,8,6,1,7,9]];

  const testGrid = new Square(arr);

  document.getElementById("test").innerHTML = testGrid.checkVertNumb();
  document.getElementById("test1").innerHTML = testGrid.checkHorzNumb();
  document.getElementById("test2").innerHTML = testGrid.checkGrid();
