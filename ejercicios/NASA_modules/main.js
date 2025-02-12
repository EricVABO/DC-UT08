import { obtenerImg } from './nasaApi.js';
import { validarImg } from './validar.js';

document.addEventListener("DOMContentLoaded", () => {
    let boton = document.querySelector("button");
    boton.addEventListener("click", () => {
        validarImg(obtenerImg);
    });
});
