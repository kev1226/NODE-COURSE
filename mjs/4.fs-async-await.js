const { readFile } = require('node:fs/promises')

// asincrono secuencial
async function init() {
    console.log('Leyendo el primer archivo...')
    const text = await readFile('./archivo.txt', 'utf-8')
        console.log(text)



    console.log('Haciendo cosas mientras se lee archivo...')


    console.log('Leyendo el primer archivo...')
    const secondText = await readFile('./archivo2.txt', 'utf-8')
        console.log(secondText)
}

init()
