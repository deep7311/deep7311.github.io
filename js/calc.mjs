//import export

let a = 5;
console.log(a);

export default function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

export { subtract };