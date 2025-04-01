export function rubricExcellent(puntuacion) {
    let resultado = "";
   if (puntuacion>8){
    resultado = "excellent"
   }
   return resultado
}

console.log (rubricExcellent(11))