import jwt from 'jsonwebtoken'
const SECRET = "sometext"

// const user = {
//     name: "Akshay",
//     email: "akshay@gmailcom",
//     role: "admin"
// }

// const token = jwt.sign(user, SECRET, {expiresIn: '1h'})
// console.log(token)


const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWtzaGF5IiwiZW1haWwiOiJha3NoYXlAZ21haWxjb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NTE2MDUyMDIsImV4cCI6MTc1MTYwODgwMn0.e_wnwZMlp0nMe1of4c5stizr95TNd_GJAyZIfaOdCeQ'

const data = jwt.verify(token, SECRET)
console.log(data)