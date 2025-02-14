const os = require('node:os');
const fs = require('node:fs');
const { open } = require('node:fs/promises');

console.log(os.hostname());
console.log(os.version());
console.log(os.totalmem());
console.log(os.cpus().length);

// fs.open('info_sistema.txt', 'w', (err, fd) => {
//     if (err) {
//         console.log('Hubo un error al crear el archivo:', err);
//     } else {
//         console.log('El archivo vacío se ha creado exitosamente.');
//         fs.close(fd, (err) => {
//             if (err) {
//                 console.log('Hubo un error al cerrar el archivo:', err);
//             }
//         });
//     }
// });

let nombreSistema = os.hostname();
let versionSistema = os.version();
let cantidadMemoria = os.totalmem() / (1024 * 1024);
let numCpus = os.cpus().length;
let datos = `Nombre del sistema: ${nombreSistema}\nVersión: ${versionSistema}\nMemoria: ${cantidadMemoria.toFixed(2)} MB\nNúmero de CPUs: ${numCpus}\n`;

fs.appendFile('info_sistema.txt', datos, (err) => {
    if (err) {
        console.log('Hubo un error al agregar contenido al archivo:', err);
    } else {
        console.log('El contenido se ha agregado exitosamente al archivo.');
    }
});

(async () => {
    try {
        const file = await open('info_sistema.txt');

        for await (const line of file.readLines()) {
            console.log(line);
        }
    } catch (err) {
        console.log("Error al abrir el archivo")
    }
})();