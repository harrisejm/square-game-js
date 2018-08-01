
import { checkVertNumb } from './square';
import { checkVertArr } from './square';
import { checkHorzNumb } from './square';
import { checkHorzArr } from './square';
import { checkGrid } from './square';

//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
document.getElementById("test2").innerHTML = checkVertNumb();
document.getElementById("test3").innerHTML = checkVertArr();
document.getElementById("test1").innerHTML = checkHorzNumb();
document.getElementById("test").innerHTML = checkHorzArr();
document.getElementById("test4").innerHTML = checkGrid();
