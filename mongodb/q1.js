// mongosh in command prompt
// ye command cmd me likhne se hum mongodb ke local server
// jo ki hamare laptop install kiya hai usse connect ho jate hai

// show dbs -> isse sabhi database ki list show ho jayegi

// use databaseName -> isse agar koi database is name se hai to us par hum switch ho jayenge
// aur agar database nhi hai to database create ho jayega

// show collections -> isse us particular database me sabhi collection ki list show ho jayegi

// db.users.insertOne({name: "Demo", age: 20}) -> isse hum koi document insert kar sakte hai use collection me

// db.users.insertMany([{name:"Ballerina", age: 20}, {name:"Flash", age: 25}]) -> isse hum kai documents ek saath insert kar sakte hai

// db.users.find() -> isse hum collection me sabhi documents ko dekh sakte hai

// db.users.findOne() -> isse hum collection me sabse pehle document ko dekh sakte hai

// db.users.drop() -> isse hum collection ko delete kar sakte hai

// db.employees.find().skip(1) -> isse hum collection me sabse pehle document ko skip karke dusre document ko dekh skte hai
//  skip() -> isme hum jitna number likhenge utne document skip ho jayenge but remember vo delete nhi hongi

// db.employees.find().limit(2) -> isse hum collection me sabse pehle 2 documents ko dekh skte hai
// limit() -> isme hum jitna number likhenge utne documents hi start se show honge

// db.employees.find().skip(1).limit(1) -> isse hum collection me sabse pehle document ko skip kar 
// rahe hai aur uske baad vala pehla document hum limit 1 ki vjh se dekh paa rahe hai

// db.employees.find().sort({name:1}) -> isse hum collection me documents ko name ke according sort kar rahe hai
// aur yaha 1 ka matlab hai accending order me sort kar rahe hai

// db.employees.find().sort({name:-1}) -> isse hum collection me documents ko name ke according sort kar rahe hai
// aur yaha -1 ka matlab hai decending order me sort kar rahe hai

// db.employees.find().sort({name:1}).limit(1) -> ab yaha hum name ke base par sort bhi kar rahe accending order me
// aur limit(1) se hum hum sort hone ke baad 1st document ko dekh sakte hai

// db.employees.find({department:"IT"}) -> isse hum find me argument pass kar rahe hai aur hum apne argument ke according
// data or document ko find kar sakte hai

// db.employees.find({},{name:1}) -> isme find me 2 arguments hai 1st empty hai iska matlab humne sare document dekhne hai
// 1st argument yaha filter ka kaam kar raha hai
// 2nd argument projection ke liye hota hai isme humne name:1 diya hai iska matlab humne ke name field ko show karni hai
// aur rest of the fields nhi show honge
// yaha name:1 -> 1 -> true ke liye use ho raha hai (matlab dikhega)
// yaha name:0 -> 0 -> false ke liye use ho raha hai (matlab nhi dikhega)
// db.employees.find({},{}) -> ab yaha dono field me kuch nhi hai to by default hume pura data sabhi field ke sath dikhega
// db.employees.find({},{_id:0, name:1}); -> ab jaise yaha projection vali field hai usme multiple field me hum
// 1 aur 0 ka use kar sakte hai matlab vaise to keval 1 jo field hogi usi ka data show hoga
// par by default id bhi show hoti hai isliye yaha id ko 0 diya hai taki id na dikhe


// db.employees.find({},{EmpName:"$name"});
// yaha agar hume kisi field ka alias name dena hai means us field ko kisi aur name se show karna hai
// to hum dollar sign ($) ka use karte hai aur uske baad field name likhate hai
// db.employees.find({},{EmpName:"$name"}).pretty();
// yaha pretty() ka use karke hume data pretty format me show ho jayega
// yaha humne 0 ya 1 nhi diya hai ab ye normal hai ki hum vo field me alias name de rahe hai
// to iska matlab hum us field ko dekhna chahte hai aur uska alias name show ho raha hai

// example:-
// [
//   { _id: ObjectId('685b829f6158dd3588b71240'), EmpName: 'John Smith' },
//   { _id: ObjectId('685b83256158dd3588b71241'), EmpName: 'Mike Joseph' },
//   { _id: ObjectId('685b83256158dd3588b71242'), EmpName: 'Cathy G' }
// ]



// db.employees.countDocuments(); -> is command se hum use particular collection me
// kitne documents hai hum vo count kar sakte hai

// Update
// db.employees.updateOne({},{}) -> yaha pehla document jo milega vo update hoga
// 1st object yaha filter ka kaam kar raha hai agar vo blank rakhenge to uska matlab hai ki hume sabhi document update karna hai
// 2nd object yaha update ka kaam kar raha hai isme hume update karna hai jo field hai usme hume $set operator ka use karna hai
// Example: 
// db.employees.updateOne({},{ $set: {age: 30} });