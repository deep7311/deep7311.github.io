// Insert single document
db.employees.insertOne({
    name: "John Smith",
    email: "john@gmail.com",
    department: "IT",
    salary: 1456,
    location: ["FL", "OH"],
    date: Date()
})


// Inset multiple documents
db.employees.insertMany([
    {
        name: "Mike Joseph",
        email: "mike@gmail.com",
        department: "IT",
        salary: 2456,
        location: ["FL", "TX"],
        date: Date()
    },
    {
        name: "Cathy G",
        email: "cathy@gmail.com",
        department: "IT",
        salary: 3456,
        location: ["AZ", "OH"],
        date: Date()
    },
])

