let nometxt = document.getElementById('nometxt')
let resultado = document.getElementById('resultado')
let nomes_digitados = []
function verificaLista(nome) {
    if (nomes_digitados.indexOf(nome) != -1) {
        return true
    } else {
        return false
    }
}

function salvar_nome() {
    if (nometxt.value.length == 0 && verificaLista(nometxt)) {
        window.alert ('[ERRO] Nome inválido ou já salvo.')
    } else {
        window.alert ('Tá indo certo fi')
    }
    resultado.innerHTML (nomes_digitados)

}
