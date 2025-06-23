//array methods
// const points = [2, 5, 3, 2, 1, 8];
const score = [10, 20, 50, 20];
// console.log(score);
// console.log(score[0]);
// score.push(70);
// console.log(score);
// console.log(score.length);
// for (let i = 0; i < score.length; i++) {
//   console.log(score[i]);
// }
// points.forEach((value) => {
//   console.log(value);
// });
// points.forEach((value, index) => {
//   console.log(value,index);
// });
// points.forEach((value, index, arr) => {
//   console.log(value, index, arr);
// });

// forEach method
// const points = [2, 5, 3, 2, 1, 8];
// points.forEach((value, index, c) => {
//   // console.log(value, index, c);
//   console.log("Value is: ", value,"Index of element: ", index, c);
// });


//map method
//Creates a new array by transforming each element
// const points = [2, 5, 3, 2, 1, 8];
// const newPoints = points.map((value, index, arr) => {
//   // console.log(value, index, arr);
//   return value + 5;
// });
// console.log(newPoints);


//filter method
//Creates a new array with all elements that pass the test implemented by the provided function
// const points = [2, 5, 3, 2, 1, 8];
// const filteredPoints = points.filter((value, index, arr) => {
//   // console.log(value, index, arr);
//   return value > 2;
// })
// console.log(filteredPoints);


//find method
//Returns the value of the first element in the array that satisfies the provided testing function
// const points = [2, 5, 3, 2, 1, 8];
// const found = points.find((value, index, arr) => {
//   // console.log(value, index, arr);
//   return value > 2;
// });
// console.log(found);


//Reduce method
//Executes a reducer function on each element of the array, resulting in a single output value
const points = [2, 5, 3, 2, 1, 8];
const total = points.reduce((sum, value) => {
  return sum + value;
}, 0);
console.log(total);