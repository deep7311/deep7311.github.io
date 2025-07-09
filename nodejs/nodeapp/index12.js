import express from 'express'
const app = express()

let PORT = process.argv[2] || 8080 || 8081;

app.get("/", (req, res) => {
    res.send("Home Page")
})


app.listen(PORT, () => {
    console.log("Server started at Port", PORT)
})