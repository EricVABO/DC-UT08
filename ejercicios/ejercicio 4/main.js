import readline from 'readline';
import chalk from 'chalk';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });

let nombre = "";
let edad = 0;


rl.question('Escriba su nombre: ', (respuestaNombre) => {
    nombre = respuestaNombre;

    rl.question('Escriba su edad: ', (respuestaEdad) => {
        edad = parseInt(respuestaEdad);

        let mensaje = `Bienvenido ${nombre}, edad ${edad}`
        rl.close();

        if (edad < 18) {

            console.log(chalk.red.bold(mensaje));
        } else if (edad >= 18 && edad <= 65) {
            console.log(chalk.green.bold(mensaje));
        } else if (edad > 65) {
            console.log(chalk.blue.bold(mensaje));
        }
    });
});