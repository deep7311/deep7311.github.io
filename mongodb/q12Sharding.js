// Sharding kaise karte hai

// *******************************************************************************

Create folder dbshards and then create sub folders: conf, rconf, s1, s1r, s2, s2r
Start Config servers on separate tabs of command prompt
mongod --configsvr --port 27018 --replSet cf --dbpath d:\dbshards\conf
mongod --configsvr --port 27019 --replSet cf --dbpath d:\dbshards\rconf
Open new tab and Initiate replica set for config servers
mongosh --port 27018
rs.initiate({_id:'cf',members:[{_id:0,host:'localhost:27018'},{_id:1,host:'localhost:27019'}]})
rs.config()
rs.status()

// ****************************************************************************

Start Shard1 servers on separate tabs of command prompt
mongod --shardsvr --port 27020 --replSet rs1 --dbpath d:\dbshards\s1
mongod --shardsvr --port 27021 --replSet rs1 --dbpath d:\dbshards\s1r
Open new tab and Initiate replica set for shard1 servers
mongosh --port 27020
rs.initiate({_id:'rs1',members:[{_id:0,host:'localhost:27020'},{_id:1,host:'localhost:27021'}]})
rs.config()
rs.status()

// ******************************************************************************************

Start Shard2 servers on separate tabs of command prompt
mongod --shardsvr --port 27022 --replSet rs2 --dbpath d:\dbshards\s2
mongod --shardsvr --port 27023 --replSet rs2 --dbpath d:\dbshards\s2r
Open new tab and Initiate replica set for shard1 servers
mongosh --port 27022
rs.initiate({_id:'rs2',members:[{_id:0,host:'localhost:27022'},{_id:1,host:'localhost:27023'}]})
rs.config()
rs.status()



// **********************************************************************************************

// Start Mongo Routing Service on separate tab of command prompt
mongos  --configdb cf/localhost:27018,localhost:27019 --port 27050

mongosh --port 27050
sh.addShard("rs1/localhost:27020,localhost:27021")
sh.addShard("rs2/localhost:27022,localhost:27023")
sh.status()
use mydatabase
sh.enableSharding("mydatabase")
sh.shardCollection("mydatabase.customers", { _id: 1 })
sh.status()
sh.getShardedDataDistribution() //run this after executing below nodejs scripts


// ****************************************************************************************
// javascript ki file dummy data store karne ke liye taking sharding ko observe kar paye

import { MongoClient } from "mongodb";
const uri = "mongodb://127.0.0.1:27050/"
const client = new MongoClient(uri);
async function insertTestData() {
  try {
    await client.connect();
    const db = client.db("mydatabase");
    const collection =   db.collection("customers");
    // const res = await collection.countDocuments()
    // console.log(res)
    const bulk = [];
    for (let i = 0; i < 90000; i++) {
      bulk.push({
        userId: i,
        name: `User${i}`,
        email: `user${i}@test.com`,
        createdAt: new Date(),
      });
    }
    const result = await collection.insertMany(bulk);
    console.log(`Inserted ${result.insertedCount} documents.`);
  } catch (err) {
    console.error("Error inserting data:", err);
  } finally {
    await client.close();
  }
}
insertTestData();