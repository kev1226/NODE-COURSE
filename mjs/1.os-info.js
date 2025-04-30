const os = require('node:os')

console.log('informaciond el sistema operativo')

console.log('---------------------------------')


console.log('Nombre del sistema operativo', os.platform())
console.log('Versión del sistema operativo', os.release())
console.log('Arquitectura del sistema operativo', os.arch())
console.log('CPUs', os.cpus())
console.log('memoria libre', os.freemem() / 1024 / 1024)
console.log('memoria total', os.totalmem() / 1024 / 1024)
console.log('uptime', os.uptime() / 60 / 60)

