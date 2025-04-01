export function costCalculator(costo) {
    let tarifaTrans = 3
    let interes = 0.01

    //$let total = Number(costo + tarifaTrans  (interes*costo))
    return costo + tarifaTrans + (costo*interes)
}

console.log(costCalculator(30000));
