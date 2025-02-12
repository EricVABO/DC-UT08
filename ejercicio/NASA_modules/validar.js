export function validarImg(obtenerImg) {
    let fechaSeleccionada = document.getElementById('fecha').value;

    if (fechaSeleccionada) {
        let fechaValida = /^\d{4}-\d{2}-\d{2}$/.test(fechaSeleccionada);

        if (fechaValida) {
            obtenerImg(fechaSeleccionada);
        } else {
            alert("Ingrese una fecha válida 'YYYY-MM-DD'");
        }
    } else {
        alert("Seleccione una fecha.");
    }
}
