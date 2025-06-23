// var keyowrd 'var' is used to declare variables in JavaScript.
// Variables declared with 'var' are function-scoped or globally scoped, not block-scoped
var a = 10
if(10 > 5) {
    var b = 20;
}

console.log(a);

//let keyword 'let' is used to declare variables in JavaScript.
// Variables declared with 'let' are block-scoped, meaning they are only accessible within the block they are defined in.
let c = 30;
if(10 > 5) {
    let d = 40;
    console.log(d); // This will work, as 'd' is accessible within this block
}

// console.log(d); // This will throw an error, as 'd' is not accessible outside the block