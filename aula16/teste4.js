// fatoral = 5 x 4 x 3 x 2 x 1
function fatorial(n) {
    let resultado = 1
    for (let c = n; c > 1; c--) {
        resultado *= c
    }
    return resultado
}
console.log (`A fatorial de 5 é ${fatorial(5)}`)