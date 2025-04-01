export function ageCalculator(anio, mes, dia) {
    const hoy = new Date();
    const fechaNacimiento = new Date(anio, mes - 1, dia);
    
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const diferenciaMes = hoy.getMonth() - fechaNacimiento.getMonth();
    const diferenciaDia = hoy.getDate() - fechaNacimiento.getDate();
    
    if (diferenciaMes < 0 || (diferenciaMes === 0 && diferenciaDia < 0)) {
        edad--;
    }
    
    return edad;
}

console.log(ageCalculator(2023, 9, 7));