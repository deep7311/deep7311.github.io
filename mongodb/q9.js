// mongodb me data ko backup karne ke liye ek tool download karna padta hai 
// tool link
https://www.mongodb.com/try/download/database-tools

// data ka backup lene ke liye mongodb me
// uski command
// mongodump -d lpua -o D:\lpubackup

// restore karne ke liye
// mongorestore -d lpua D:\lpubackup\lpua

// agar maan lo data humara ud jaye ya hamara ek server band ho jaye to
// hum ek replica set banate hai jisse ki agar ek server band ho bhi gya to
// dusra server directly on ho jata hai

// to is scenerio ko observe karne ke liye hum laptop me hi 3 server create karenge
// jaise abhi hamara data keval ek hai aur vo is path par hai
// C:\Program Files\MongoDB\Server\8.0\data

// to ab different server kaise create karenge
// 1.create a folder mongo-replica(ye name kuch bhi ho sakta hai) and  usme -> sub folders data1 data2 and data3
// ab hamara goal ye hai ki inme se ek hamara primary server hoga aur hamara data teeno hi server me store hoga







// regular expression ka use mongodb me
// $regex operator ka use karna padega

// agar case insensitive hai to $option me "i" ka use karenge
db.employees.find({name: {$regex: "cathy", $options: "i"}})

// kisi particular letter se start hone vala
db.employees.find({name: {$regex: "^C"}})

// kisi particular letter se end hone vala
db.employees.find({name: {$regex: "y$"}})