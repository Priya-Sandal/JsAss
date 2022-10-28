// var array =[1,2,3,4,5,67,3,4,5,6];
// console.log("Before array elements of an array is: " +array);
// document.write("var");

var array = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8];
  
var unique = [];

for (let i = 0; i < array.length; i++) {


if (array.lastIndexOf(array[i]) === array.indexOf(array[i])) {
      unique.push(array[i]);
    }

  }
document.write(unique);
 
