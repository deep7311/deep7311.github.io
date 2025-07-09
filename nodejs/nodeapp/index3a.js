import http from 'http'

const server = http.createServer((req, res) => {
    res.end("Good morning...")
})

server.listen(8081, () => {
    console.log('Server is running on port 8081')
})