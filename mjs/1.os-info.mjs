import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'

console.log('informaciond el sistema operativo')

console.log('---------------------------------')


console.log('Nombre del sistema operativo', platform())
console.log('Versión del sistema operativo', release())
console.log('Arquitectura del sistema operativo', arch())
console.log('CPUs', cpus())
console.log('memoria libre', freemem() / 1024 / 1024)
console.log('memoria total', totalmem() / 1024 / 1024)
console.log('uptime', uptime() / 60 / 60)

