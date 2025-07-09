// is command se jo bhi primary server hoga usse hum connect ho jayenge
// aur yaha ? se phle kuch nhi hai to ye by default test database se connect hoga
mongosh "mongodb://localhost:27018,localhost:27019,localhost:27020/?replicaSet=rs1"

// aur yaha ? se phle hdfc diya hai to ab hum hdfc databse se connect honge test databse se nhi
mongosh "mongodb://localhost:27018,localhost:27019,localhost:27020/hdfc?replicaSet=rs1"

// transcation ko samjhne ke liye steps
db.customers.insertOne({_id:1,name:"John",bal:500})
db.customers.insertOne({_id:2,name:"Mike",bal:100})
const session = db.getMongo().startSession();
session.startTransaction()
var custCollection = session.getDatabase("hdfc").customers
custCollection.updateOne({_id:1},{$inc:{bal:-100}})
custCollection.updateOne({_id:2},{$inc:{bal:100}})
// session.abortTransaction()   // to abort the transaction
session.commitTransaction() 
session.endSession()
db.customers.find()
exit