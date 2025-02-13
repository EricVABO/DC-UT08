export function persona(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido,
        nombreCompleto: function () {
            return `${this.nombre} ${this.apellido}`;
        },

        saludar: function () {
            return "Hola " + this.nombreCompleto() + ", bienvenido";
        }
    }
}