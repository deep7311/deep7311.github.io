// db.employees.find({ department: "IT" }) -> isse hume vo sare employee milenge jo IT department me hain
//  ye simple search kar rahe hai

// Same hum operators ka use karke bhi search kar sakte hai
// Aur mostly hum operators ka use karte hai complex search karne ke liye

// Query with Operators

db.employees.find({ department: { $eq: "IT" } })
// iska matlab vo department jiski value equal ho "IT" ke
// $eq -> iska matlab equals to

db.employees.find({ salary: { $gt: 3000 } })
// iska matlab vo data show hoga jisme salary 3000 se upar ho
// $eq -> iska matlab equals to
// $gt -> iska matlab greater than
// $gte -> iska matlab greater than equals to
// $lt -> iska matlab less than
// $lte -> iska matlab less than equals to
// $ne -> iska matlab not equals to

// Ab ek complex search kaise hota hai vo query
db.employees.find({ salary: { $lt: 3000 }, department: { $eq: "IT" } }, { name: 1 })
// ab ye upar vali query ka matlab hai hum un users ka data dekh rahe hai jinki salary 3000 se kam hai
// aur department IT hai
// {name:1} -> iska matlab hume sirf name show karna hai


// Display top two highest paid employees
db.employees.find().sort({ salary: -1 }).limit(2)
// ab ye upar vali query ka matlab hai hum un users ka data dekh rah
// hai jinka salary sabse jyada hai


db.employees.find({$and: [{ salary: { $lt: 3000 }, department: { $eq: "IT" } }]})







// Question
// create a collection called users jisme name email pass field rahega
db.users.insertOne({
    name: "Batman",
    email: "batman@gmail.com",
    pass: "batman123"
})

db.users.insertMany([
    {
        name: "Superman",
        email: "superman@gmail.com",
        pass: "superman234"
    },
    {
        name: "Catwoman",
        email: "cat@gmail.com",
        pass: "cat123"
    }
])

// keval name field show karo
db.users.find({}, { name: 1 })

// superman ka email show karna hai
db.users.find({ name: "Superman" }, { email: 1 })