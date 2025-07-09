// Question1 statement
// use database

// create post collection
// post collections
p1 - post1
p2 - post2

// create comment collection
// comments collections
c1 - p1 - comment1
c2 - p1 - comment2
c3 - p2 - comment1
c4 - p2 - comment2
c5 - p2 - comment3

// display like this
p1 - post1 - c1 - comment1
p1 - post1 - c2 - comment2
p2 - post2 - c1 - comment1
p2 - post2 - c2 - comment2
p2 - post2 - c2 - comment3



// created post collection
db.posts.insertMany([
    { _id: "p1", post: "Post 1" },
    { _id: "p2", post: "Post 2" },
])

// created comment collection
db.comments.insertMany([
    { _id: "c1", postId: "p1", comment: "This is Comment 1 of Post 1" },
    { _id: "c2", postId: "p1", comment: "This is Comment 2 of Post 1" },
    { _id: "c3", postId: "p2", comment: "This is Comment 1 of Post 2" },
    { _id: "c4", postId: "p2", comment: "This is Comment 2 of Post 2" },
    { _id: "c5", postId: "p2", comment: "This is Comment 3 of Post 2" },
])


// displaying
// step1 keval lookup
db.posts.aggregate([
    {
        $lookup: {
            from: "comments",
            localField: "_id",
            foreignField: "postId",
            as: "comments"
        }
    }
])

// step2 lookup + unwind ke sath me use
// unwind ka kaam hota hai jo array me objects aati hai
// unme har ek object
db.posts.aggregate([
    {
        $lookup: {
            from: "comments",
            localField: "_id",
            foreignField: "postId",
            as: "comments"
        }
    },
    { $unwind: "$comments" },
])


// step3 lookup + unwind + project ke sath me use
db.posts.aggregate([
    {
        $lookup: {
            from: "comments",
            localField: "_id",
            foreignField: "postId",
            as: "comments"
        }
    },
    { $unwind: "$comments" },
    { $project: { _id: 1, post: 1, "comments.comment": 1 } }
])


// Question2
// name,term,subject,marks
db.marks.insertMany([
    { name: "John", term: "t1", subject: "Maths", marks: 95 },
    { name: "John", term: "t2", subject: "Maths", marks: 80 },
    { name: "John", term: "t3", subject: "Maths", marks: 70 },
    { name: "John", term: "t1", subject: "Science", marks: 50 },
    { name: "John", term: "t2", subject: "Science", marks: 60 },
    { name: "John", term: "t3", subject: "Science", marks: 90 },
    { name: "Cathy", term: "t1", subject: "Maths", marks: 91 },
    { name: "Cathy", term: "t2", subject: "Maths", marks: 81 },
    { name: "Cathy", term: "t3", subject: "Maths", marks: 71 },
    { name: "Cathy", term: "t1", subject: "Science", marks: 51 },
    { name: "Cathy", term: "t2", subject: "Science", marks: 61 },
    { name: "Cathy", term: "t3", subject: "Science", marks: 91 },
])

// phle name wise sort karna hai
db.marks.find({}, { _id: 0, name: 1, term: 1, subject: 1, marks: 1 }).sort({ name: 1 })

// phle name wise sort karna aur sath me term wise bhi hai
db.marks.find({}, { _id: 0, name: 1, term: 1, subject: 1, marks: 1 }).sort({ name: 1, term: 1 })

// ab keval term ke according marks dikhne chahiye like: t1, t2, t2 aise
db.marks.find({}, { _id: 0, name: 1, term: 1, subject: 1, marks: 1 }).sort({ term: 1 })

// total score dikhana hai john aur cathy ka
db.marks.aggregate([
    {
        $group: { _id: "$name", total: { $sum: "$marks" } }
    }
])

// subject wise total marks
db.marks.aggregate([
    {
        $group: { _id: "$subject", total: { $sum: "$marks" } }
    }
])

// term wise total marks
db.marks.aggregate([
    {
        $group: { _id: "$term", total: { $sum: "$marks" } }
    }
])

// name aur subject dono field me group karna hai
db.marks.aggregate([
    {
        $group: { _id: { name: "$name", subject: "$subject" }, total: { $sum: "$marks" } }
    }
])

// term wise student name wise total
db.marks.aggregate([
    {
        $group: { _id: { term: "$term", name: "$name" }, total: { $sum: "$marks" } }
    }
]).sort({ _id: 1 })


//alias name of any field to show
// yaha department ko hum as dept show kar rahe hai
db.employees.aggregate([
    {
        $project: {
            _id: 0, name: 1, salary: "$salary", dept: "$department"
        },
    }
])


// condition basis par kuch extra field project kaise karni hai
// yaha hum $cond ka use karenge
db.employees.aggregate([
    {
        $project: {
            _id: 0, name: 1, salary: "$salary", dept: "$department", Grade: { $cond: [{ $gte: ["$salary", 2000] }, "Grade A", "Grade B"] },
        }
    }
])


//dusra tarika condition lagane ka
db.employees.aggregate([
    {
        $project: {
            _id: 0, name: 1, salary: "$salary", dept: "$department", Grade: {$cond: {if: {$gte: ["$salary", 2500]}, then: "Grade A", else: "Grade B"} },
        }
    }
])


//Add new field strSalary in employees
// store "2500" for all IT employees
// store "1000" for other employees
db.employees.updateMany(
    { department: "IT" },
    { $set: { strSalary: "2500" } }
)

db.employees.updateMany(
    { department: {$ne: "IT"} },
    { $set: { strSalary: "1000" } }
)

//aggregate ko use karke bhi hum same cheez kar sakte hai
db.employees.aggregate([
    {
        $addFields: {
            strSalary: { $cond: { if: { $eq: ["$department", "IT"]} , then: "2500", else: "1000" } }
        }
    }
])

// abhi hume strSalary field ko convert karna hai string se integer me
// aur uske baad total salary department wise group karna hai
// ye cheez hum $convert name ke operator se karenge
db.employees.aggregate([
    {$project: {_id: 0, name: 1, department: 1, Sal: {$convert: {input: "$strSalary", to: "int"}}}},
    {$group: {_id: "$department", totalSal: {$sum: "$Sal"}}}
])

// aur jo ye hume data mila hai agar isko new collection me store karna hai
// to hume iske liye $out name ke operator ka use karna hai
db.employees.aggregate([
    {$project: {_id: 0, name: 1, department: 1, Sal: {$convert: {input: "$strSalary", to: "int"}}}},
    {$group: {_id: "$department", totalSal: {$sum: "$Sal"}}},
    {$out: "depWiseSalary"}
])


// yaha hum view create karenge upar vale data ka
// $out operator se to hume jis din ka data ke liye ye query jab hum chalate hai
// to keval usi din tak ka data milta hai
// par agar hum view create karenge to hume always live data milta rahega
db.createView("depWiseSalaryView", "employees", [
    {$project: {_id: 0, name: 1, department: 1, Sal: {$convert: {input: "$strSalary", to: "int"}}}},
    {$group: {_id: "$department", totalSal: {$sum: "$Sal"}}},
])
