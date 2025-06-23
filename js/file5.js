//regular function

// function greet() {
//   console.log("Good Morning");
// }
// greet()

//IIFE Method
// (function greet() {
//   console.log("Good Morning");
// })()

//hoisting in function
// greet()
// function greet() {
//   console.log("Good Morning");
// }

//hoisting in variables
// x=10
// console.log(x)
// var x

// function greet(student){
//     console.log(`Hello ${student}`)
// }
// greet("Subhash")

// function add(a,b){
//     return a+b
// }
// let result = add(4,5)
// console.log(result)

function add(){
    console.log(arguments)
    console.log(arguments.length)
}
add(4,5,6,7,4,3)