export function rubricPassFail(puntuacion) {
    let resultado;
   if (puntuacion>=5){
    resultado = "pasa"
   }else{
    resultado = "falla"
   }
   return resultado
}

console.log (rubricPassFail(6))