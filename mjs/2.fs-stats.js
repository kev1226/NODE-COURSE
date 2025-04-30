const fs = require('node:fs')

const stast = fs.statSync('./archivo.txt')

// Todo sincrono
console.log(
    stast.isFile(),// si es un fichero
    stast.isDirectory(),// si es un directorio
    stast.isSymbolicLink(),// si es un enlace symbolico
    stast.size // tamaño de bits
)