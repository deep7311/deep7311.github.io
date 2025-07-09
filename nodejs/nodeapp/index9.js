// password ko secure karne ke liye bcrypt ka use karenge
// password ko plain text me store nhi kar sakte

import bcrypt from 'bcryptjs';

// const password = '123456';
// const hashPassword = await bcrypt.hash(password, 10);
// console.log(hashPassword)

const check = await bcrypt.compare("123456", "$2b$10$.NAg9HTBohcplP/JVEX2ZOgvwZDP3w7M/c.JW1jGCMQ0nWdeb0jDi")
console.log(check)

