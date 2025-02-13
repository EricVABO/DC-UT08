import { persona } from './persona.js';
import { suma } from './suma.js';

let persona1 = persona("Eric", "Valls");
console.log(persona1.saludar());

let resultadoSuma = suma(5, 10);
console.log("Resultado de la suma: " + resultadoSuma);