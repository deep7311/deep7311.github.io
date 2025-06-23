//spread operators
let marks = {
    math: 90,
    science: 85,
    english: 88
}

marks = {...marks, history: 92, geography: 89};

console.log(marks); // { math: 90, science: 85, english: 88, history: 92, geography: 89 }

//Spread operator with arrays
let fruits = ['apple', 'banana', 'orange'];
fruits = [...fruits, 'grape', 'kiwi'];

console.log(fruits); // ['apple', 'banana', 'orange', 'grape', 'kiwi']