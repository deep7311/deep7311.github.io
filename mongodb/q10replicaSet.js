// agar maan lo data humara ud jaye ya hamara ek server band ho jaye to
// hum ek replica set banate hai jisse ki agar ek server band ho bhi gya to
// dusra server directly on ho jata hai

// to is scenerio ko observe karne ke liye hum laptop me hi 3 server create karenge
// jaise abhi hamara data keval ek hai aur vo is path par hai
// C:\Program Files\MongoDB\Server\8.0\data

// to ab different server kaise create karenge
// 1.create a folder mongo-replica(ye name kuch bhi ho sakta hai) and  usme -> sub folders data1 data2 and data3
// ab hamara goal ye hai ki inme se ek hamara primary server hoga aur hamara data teeno hi server me store hoga





// **********************************************************************************************************************//


// यह MongoDB की **replica set configuration** से जुड़ी command है, और इसका उद्देश्य एक **replica set instance** (node) को start करना है।

// ---

// ## 🔍 पूरी Command:

// ```bash
// mongod -replSet rs1 -logpath "d:\mongo-replica\data1\1.log" --dbpath "d:\mongo-replica\data1" --port 27018
// ```

// ---

// ## 🔧 Breakdown & Explanation:

// | Part                                      | Explanation                                                                        |
// | ----------------------------------------- | ---------------------------------------------------------------------------------- |
// | `mongod`                                  | MongoDB **server daemon** को start करता है (main server process)                   |
// | `-replSet rs1`                            | इस instance को **replica set** mode में start करता है, और set का नाम `rs1` रखता है |
// | `-logpath "d:\mongo-replica\data1\1.log"` | MongoDB की logs को इस file में store करेगा                                         |
// | `--dbpath "d:\mongo-replica\data1"`       | यहां actual MongoDB data (collections, indexes) store होगा                         |
// | `--port 27018`                            | इस instance को custom port `27018` पर run करता है (default port 27017 से अलग)      |

// ---

// ## 📘 समझो इसे एक Setup की तरह:

// आप एक MongoDB **replica set** बना रहे हो जिसमें multiple nodes होंगे — हर node एक अलग instance है जो अलग port और path पर चलेगा।

// यह command एक **node-1** को start करता है:

// * Replica Set: `rs1`
// * Data Directory: `d:\mongo-replica\data1`
// * Log File: `d:\mongo-replica\data1\1.log`
// * Port: `27018`

// ---

// ## 🧠 Replica Set क्या होता है?

// Replica Set = MongoDB की **high availability mechanism**

// * **Primary node:** write operations को accept करता है
// * **Secondary nodes:** data replicate करते हैं primary से
// * अगर primary down हो जाए, तो secondary node primary बन सकता है (failover)

// ---

// ## ✅ Example Use-Case:

// अगर आप 3 node replica set बनाना चाहते हो, तो आप 3 terminals से ये 3 commands चला सकते हो:

// ```bash
// mongod -replSet rs1 -logpath "d:\mongo-replica\data1\1.log" --dbpath "d:\mongo-replica\data1" --port 27018
// mongod -replSet rs1 -logpath "d:\mongo-replica\data2\2.log" --dbpath "d:\mongo-replica\data2" --port 27019
// mongod -replSet rs1 -logpath "d:\mongo-replica\data3\3.log" --dbpath "d:\mongo-replica\data3" --port 27020
// ```

// फिर एक shell से `rs.initiate({...})` run करके replica set initialize करते हो।

// ---

// अगर चाहो तो मैं complete 3-node replica set setup (step by step) Windows par bana ke deta hoon.



// अब मैं आपको **Windows में 3-node MongoDB Replica Set setup** का **step-by-step guide** दे रहा हूँ:

// ---

// ## ✅ Step-by-Step: Create 3-Node Replica Set on Windows (Localhost)

// ### 🔧 Step 1: Folders तैयार करो

// ```plaintext
// d:\mongo-replica\data1
// d:\mongo-replica\data2
// d:\mongo-replica\data3
// ```

// Log files के लिए कोई भी path ले सकते हो, लेकिन clarity के लिए हम folder structure इसी तरह रखेंगे।

// ---

// ### 🚀 Step 2: 3 अलग-अलग `mongod` instances चलाओ

// #### CMD 1:

// ```bash
// mongod -replSet rs1 --dbpath "d:\mongo-replica\data1" --port 27018 --logpath "d:\mongo-replica\data1\1.log" --logappend --fork
// ```

// #### CMD 2:

// ```bash
// mongod -replSet rs1 --dbpath "d:\mongo-replica\data2" --port 27019 --logpath "d:\mongo-replica\data2\2.log" --logappend --fork
// ```

// #### CMD 3:

// ```bash
// mongod -replSet rs1 --dbpath "d:\mongo-replica\data3" --port 27020 --logpath "d:\mongo-replica\data3\3.log" --logappend --fork
// ```

// > ⚠️ अगर `--fork` काम नहीं कर रहा, तो ये Windows पर limitation है। तब आपको तीन **अलग-अलग CMD terminals** में ये commands बिना `--fork` के run करनी होंगी।

// ---

// ### 🧠 Step 3: Connect करो एक node से और Replica Set initialize करो

// एक नया CMD खोलो और mongo shell में connect करो (27018 वाला instance):

// ```bash
// mongo --port 27018
// ```

// अब initialize command चलाओ:

// ```js
// rs.initiate({
//   _id: "rs1",
//   members: [
//     { _id: 0, host: "localhost:27018" },
//     { _id: 1, host: "localhost:27019" },
//     { _id: 2, host: "localhost:27020" }
//   ]
// })
// ```

// अगर सब कुछ सही है, तो replica set initialize हो जाएगा।

// ---

// ### ✅ Step 4: Status Check

// ```js
// rs.status()
// ```

// यह आपको बताएगा कि कौन सा node **PRIMARY** है और कौन से **SECONDARY** हैं।

// ---

// ## 📌 Extra Tip (Read Preference)

// Primary पे लिखो और secondary से पढ़ने के लिए:

// ```js
// rs.slaveOk()
// ```

// ---

// ## 🛑 Common Errors:

// | ❌ Error                     | 💡 Solution                                                     |
// | --------------------------- | --------------------------------------------------------------- |
// | `Unrecognized option: fork` | Windows पर `--fork` काम नहीं करता — CMD अलग-अलग खोलो            |
// | `cannot lock file`          | `--dbpath` folder पहले से busy है या process already running है |
// | `not authorized`            | अगर auth on है, तो पहले user create करो                         |





// *********************************************************************************************************************


// 2.Open cmd prompt and start running servers on seprate tabs
// mongod -> ye command server start karegi
// replSet -> ye command server ko replica set me add karega

// Create a folder mongo-replica and sub folders data1 data2 and data3

// Open command prompt and start running servers on separate tabs

mongod -replSet rs1 -logpath "d:\mongo-replica\data1\1.log" --dbpath "d:\mongo-replica\data1" --port 27018

mongod -replSet rs1 -logpath "d:\mongo-replica\data2\2.log" --dbpath "d:\mongo-replica\data2" --port 27019

mongod -replSet rs1 -logpath "d:\mongo-replica\data3\3.log" --dbpath "d:\mongo-replica\data3" --port 27020


// mongosh --port 27018 -> isse hum ek port me login karenge

// ab replica set ko initiate karenge
// yaha jo host mention kiye hai vaha real life scenerio me ip address honge server ke
rs.initiate({
  _id: "rs1",
  members: [
    { _id: 0, host: "localhost:27018" },
    { _id: 1, host: "localhost:27019" },
    { _id: 2, host: "localhost:27020" }
  ]
})


// rs.config() -> isse hamara koi bhi server randomly primary server ban jata hai
// rs.status() -> isse hum sabhi server ka status check kar sakte hai

// is command ke through hum apne primary server se connect ho jayenge aur baki do server bhi parallely hote hai
mongosh "mongodb://localhost:27018,localhost:27019,localhost:27020/?replicaSet=rs1"

// ab dusre server me check karne ke liye
// mongosh --port 27019 ye port dusre terminal me run karenge aur verfiy kar lenge ki isme same data hai ya nhi
