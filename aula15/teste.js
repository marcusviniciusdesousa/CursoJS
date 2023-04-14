let num = [3,5]
num[2] = num[0] + num[1]
num.push(num[2] - num[1])
num.sort()
console.log (`${num}`)
console.log (`Os vetores são ${num}`)
/*for (let pos = 0; pos < num.length; pos++) {
    console.log (`A ${pos}ª posição do array tem vlaor ${num[pos]}`)
}
*/
for (let pos in num) {
    console.log (`A posição ${pos} tem o valor de ${num[pos]}`)
}