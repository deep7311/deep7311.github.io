import express from 'express'

const app = express()

// middleware example
const logger = (req, res, next) => {
    req.message = "Logger"
    next()
}

// middleware hai ye
// app.use(logger)

app.get("/", (req, res) => {
    res.send(req.message)
})

// agar specific kisi route ke liye middleware use karna hai to
app.get("/products", logger, (req, res) => {
    res.send(req.message)
})

app.listen(8080, () => {
    console.log("Server started")
})