import express from 'express'

const app = express()


// app.get("/", (req, res) => {
//     res.send("<h1>Home Page</h1>")
// })

// app.get("/products", (req, res) => {
//     // res.send("<h1>Product Page</h1>")
//     res.json({id: 1, name: "Product 1", price: 10.99})  // agar json response send karna ho to
// })

// app.get("/ab*cd", (req, res) => {
//     res.send("<h1>Random Page</h1>")
// })


// app.get("/name", (req, res) => {
//     res.send(`Good Morning`)
// })

// app.get("/:name", (req, res) => {
//     res.send(`Good Morning ${req.params.name}`)
// })

// Request parameters
// app.get("/name/:name", (req, res) => {
//     res.send(`Good Morning ${req.params.name}`)
// })

// app.get("/:name/:age", (req, res) => {
//     res.send(`Good Morning ${req.params.name} and you are ${req.params.age} years old`)
// })

// app.get("/name/:name/age/:age", (req, res) => {
//     res.send(`Good Morning ${req.params.name} and you are ${req.params.age} years old`)
// })

// headers
// app.get("/", (req, res) => {
//     res.send(req.headers.authorization)
// })


// query string
// app.get("/", (req, res) => {
//     res.send(req.query)
// })

// type of request
// get, post, delete
// get request
app.get("/", (req, res) => {
    res.send("Get Request")
})

//post request
app.post("/", (req, res) => {
    res.send("Post Request")
})

//put
app.put("/", (req, res) => {
    res.send("Put Request")
})

// delete request
app.delete("/", (req, res) => {
    res.send("Delete Request")
})


app.listen(8080, () => {
    console.log("Server started")
})
