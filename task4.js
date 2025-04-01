export class FriendAge {
    constructor(nombre, anio, mes, dia) {
        this.nombre = nombre;
        this.anio = anio;
        this.mes = mes;
        this.dia = dia;
    }

    calcularEdad() {
        const hoy = new Date();
        const fechaNacimiento = new Date(this.anio, this.mes - 1, this.dia);
        
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        const diferenciaMes = hoy.getMonth() - fechaNacimiento.getMonth();
        const diferenciaDia = hoy.getDate() - fechaNacimiento.getDate();
        
        if (diferenciaMes < 0 || (diferenciaMes === 0 && diferenciaDia < 0)) {
            edad--;
        }
        
        return edad;
    }

    obtenerEdad() {
        return `${this.nombre} tiene ${this.calcularEdad()} años hoy!`;
    }
}
let resultado = new FriendAge("Ali", 2005, 6, 16).obtenerEdad();
console.log(resultado);