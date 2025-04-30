const net = require('node:net')

function myport(deriredPort) {
    return new Promise((resolve, reject) => {
        const server = net.createServer()

        server.listen(deriredPort, () => {
            const { port } = server.address()
            server.close(() => {
                resolve(port)
            })
        })

        server.on('error', (err) => {
            if (err.code == 'EADDRINUSE') {
                myport(0).then(port => resolve(port))
            } else {
                reject(err)
            }
        })
    })
}