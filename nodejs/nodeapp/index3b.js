import http from 'http'

const server = http.createServer((req, res) => {
    res.end("Good evening...")
})

server.listen(8085, () => {
    console.log('Server is running on port 8085')
})