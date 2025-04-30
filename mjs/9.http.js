const http = require('node:http')

const server = http.createServer((req,res) =>{
    console.log('requise')
    res.end('hola mundo')
})

server.listen(3000,()=>{
    console.log('LISTEN TO PORT 3000')
})