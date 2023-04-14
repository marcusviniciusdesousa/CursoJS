let txtnum = window.document.getElementById('txtnum')
let txtselect = document.querySelector('select#txtselect')
let resultado = document.querySelector('div#resultado')
let array_lista = []

function VerificadorNumero(numero){
    if (Number(numero) >= 1 && Number(numero) <= 100) {
        return true
    } else {
        return false
    }
}
function VerificadorLista(numero, lista){
    if (lista.indexOf(Number(numero)) != -1) {
        return false
    } else {
        return true
    }
}
function adicionar() {
    if (VerificadorNumero(txtnum.value) && VerificadorLista(txtnum.value, array_lista)) {
        array_lista.push(Number(txtnum.value))
        let option_select = document.createElement('option')
        option_select.text = `O valor ${Number(txtnum.value)} foi adicionado!`
        txtselect.appendChild(option_select) 
    } else {
        alert('Deu errado aí doido')
    }
    txtnum.innerHTML('')
}
function somador(lista) {
    let resultado_soma = 0
    for (let c = 0; c < lista.length; c++) {
        resultado_soma += lista[c]
    }
    return resultado_soma
}

function finalizar() {
    array_lista.sort()
    resultado.innerHTML += `Foi cadastrado ${array_lista.length} números!<br>`
    resultado.innerHTML += `<br>O maior numero é o ${array_lista[array_lista.length - 1]}.<br>`
    resultado.innerHTML += `<br>O menor número é o ${array_lista[0]}.<br>`
    resultado.innerHTML += `<br>A soma dos números é de ${somador(array_lista)}.<br>`
    resultado.innerHTML += `<br>A média dos valores é de ${somador(array_lista)/array_lista.length}`
}