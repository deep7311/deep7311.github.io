//Promise
// hamari problem ye hai ki humara function f1 kuch return nahi kar raha hai
// aur hum f2 me uska result use karna chahte hain magar f1 me 
// setTimeout (jo ki result ko aane me delay kar raha hai) hai
// isliye f1 ka result undefined aa raha hai
// setTime out se humne scenario create kiya hai ki hume
// kyu promise ki zarurat hai
// Promise ka use karke hum is problem ko solve kar sakte hain

// const f1 = () => {
//     setTimeout(() => {
//         return
//     }, 1000);
// }

// const f2 = (x) => {
//     console.log(x + 6);
// }

// const n = f1();
// f2(n);


// yaha hum promise ka use kar rahe hai jisse hamari problem solve ho jayegi
// const f1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(5);
//         }, 1000);
//     });
// }

// const f2 = (x) => {
//     console.log(x + 6);
// }
// const n = f1();
// n.then((result) => {
//     f2(result);
// }).catch((error) => {
//     console.error("Error:", error);
// });


// Promise ka use karke hum asyncronous code ko handle kar sakte hain
// resolve and reject ko ek sath kaise use karte hain
// const f1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.5) {
//                 resolve(5);
//             } else {
//                 reject("Something went wrong");
//             }
//         }, 1000);
//     });
// }

// const f2 = (x) => {
//     console.log(x + 6);
// }

// f1().then((result) => {
//     f2(result);
// }).catch((error) => {
//     console.error("Error:", error);
// });


// agar f1 me negative number de to invalid input ka error aayega
// aur f2 me result nahi aayega
// aur positive number de to f2 me result aayega
// const f1 = (x) => {
//     return new Promise((resolve, reject) => {
//         if (x < 0) {
//             reject("Invalid input");
//         } else {
//             resolve(x);
//         };
//     });
// }
// const f2 = (x) => {
//     console.log(x + 6);
// }
// f1(-3).then((result) => {
//     f2(result);
// }).catch((error) => {
//     console.error("Error:", error);
// });


// Promise ka use ache se samajhne ke liye
// hum API ka use karenge ki promise kaise use hoti hai
// hum ek API se data fetch karenge fetch method ka use karke
// aur us data ko console me print karenge
// yaha fetch method f1 function ke jaise kaam kar raha hai
// to samjhne ke liye hum fetch method ko f1 function ke jaise samjhenge
// fetch method ek promise return karta hai
// aur us promise ko hum then method se handle karte hain



// display the name of all the users in the console
// fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
//     return response.json(); // response ko json me convert karte hain
// }).then((data) => {
//     data.forEach((user) => {
//         console.log("name: ", user.name); // har user ka name console me print karte hain
//     });
// }).catch((error) => {
//     console.error("Error:", error); // agar error aata hai to usko console me print karte hain
// });



// same cheez hum async await se bhi kar sakte hain
// async await ka use karke hum code ko aur readable bana sakte hain
// async function to fetch and display user names
const fetchUserNames = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json(); // response ko json me convert karte hain
        data.forEach((user) => {
            console.log(user.name); // har user ka name console me print karte hain
        });
    } catch (error) {
        console.error("Error:", error); // agar error aata hai to usko console me print karte hain
    }
}
// call the async function to fetch and display user names
fetchUserNames();

// async me then aur catch ka use nahi karte hain
// kyunki async await me hum try catch ka use karte hain
// isliye async await me then aur catch ka use nahi karte hain
// async await me hum code ko synchronous tarike se likhte hain
// aur isse code aur readable ho jata hai
// async await me hum code ko aise likhte hain jaise ki wo synchronous hai
// lekin ye asynchronous hota hai
// isliye async await ka use karke hum code ko aur readable bana sakte hain