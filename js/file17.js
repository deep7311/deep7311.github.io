// closures js me kya hota hai

// closures ka use karke hum function ke andar ke variable ko access kar sakte hain
// aur function ke andar ke variable ko change bhi kar sakte hain

// yaha f1 function ko call karne par 1 return hoga
// kyuki f1 function ke andar sub function hai jo b variable ko access kar raha hai
// aur b variable main function ke andar define hai
// isliye f1 function ke andar sub function closure create karta hai
// aur b variable ko access kar sakta hai
// isliye f1 function ke call par 1 return hoga

function main() {
    let b = 1;
    function sub() {
        return b;
    }

    return sub;
}

const f1 = main();
console.log(f1());

