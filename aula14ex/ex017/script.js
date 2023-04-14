function tabuada() {
    let txtnum = document.getElementById('txtnum')
    let tab = document.getElementById('txttabuada')
    if (txtnum.value.length == 0 ) { // verifica se o usuário colocou numero
        window.alert('Digite um número!')
    } else {
        let numero = Number(txtnum.value)
        tab.innerHTML = ''
        for (let c = 1; c <=10; c++) {
            let item = document.createElement('option')
            item.text = ` \u{2B55}${numero} x ${c} = ${numero*c}`
            tab.appendChild(item)
            item.value = `tab${c}`
        }
    }
}
