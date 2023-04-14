function contador() { 
    let txtinicio = document.getElementById('txtinicio')
    let txtfim = document.getElementById('txtfim')
    let txtpasso = document.getElementById('txtpasso')
    let resultado = document.getElementById('resultado')
   
    if (txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0) { // Verificando se os dados estão corretos.
        window.alert('[ERRO] Há dados faltando!')
    } else { // Alocando dados
        resultado.innerHTML = 'Contagem: <br> ' 
        let inicio = Number(txtinicio.value)
        let fim = Number(txtfim.value)
        let passo = Number(txtpasso.value)
        if (passo <= 0) { // Verificando se passo for = 0
            window.alert (`[ERRO] Passo não pode ser igual à ${passo}, iremos considerar passo igual 1`)
            passo = 1
        }
        if (inicio < fim) { // Contagem Crescente
            for ( let c = inicio; c <= fim; c += passo) {
                resultado.innerHTML += `${c} \u{1F919}` // Contagem + emoji
            }
        } else if (fim < inicio) { // Contagem decrescente
            for (let c = inicio; c >= fim; c -= passo) {
                resultado.innerHTML += `${c} \u{1F919}`
            }
        }
        resultado.innerHTML += `\u{1F6D1}` //emoji de placa vermelha
    }
}