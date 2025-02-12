let API_URL = "https://api.nasa.gov/planetary/apod";
let API_KEY = 'DEMO_KEY';

export function obtenerImg(fecha) {
    let xhr = new XMLHttpRequest();

    let url = `${API_URL}?date=${fecha}&api_key=${API_KEY}`;

    xhr.open("GET", url);
    xhr.responseType = "json";

    xhr.addEventListener("load", () => {
        if (xhr.status == 200) {
            let responseData = xhr.response;
            if (responseData.media_type == 'image') {
                mostrarDatos(responseData);
            } else {
                console.log("La respuesta no contiene una imagen válida.");
            }
        } else {
            console.log(`Error al obtener datos: ${xhr.status}`);
        }
    });
    xhr.send();
}

function mostrarDatos(data) {
    let contenedor = document.getElementById('content');

    let img = document.createElement('img');
    img.src = data.url;
    img.alt = data.title;
    img.style.maxWidth = "100%";

    let tituloElement = document.createElement('h2');
    tituloElement.textContent = `Título: ${data.title}`;

    let fechaElement = document.createElement('p');
    fechaElement.textContent = `Fecha: ${data.date}`;

    let explicacionElement = document.createElement('p');
    explicacionElement.textContent = `Explicación:\n\n ${data.explanation}`;

    contenedor.innerHTML = '';
    contenedor.appendChild(tituloElement);
    contenedor.appendChild(fechaElement);
    contenedor.appendChild(img);
    contenedor.appendChild(explicacionElement);
}
