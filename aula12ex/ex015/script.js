function recebehomem() {
    var masculin
}

function mostrar_tudo() { // parte 1 calcula a idade e verifica se os dados estão corretos
    var ano_nascimento = window.document.getElementById("ano_nasceu")
    var data = new Date()
    var ano_atual = data.getFullYear()
    if (ano_nascimento.value.length == 0 || Number(ano_nascimento.value) > ano_atual) { 
        window.alert ('[ERRO] Digite os dados novamente!')    
    } else { // parte 2 irá realizar o calculo da idade
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        var sexo = window.document.getElementsByName('sexo')
        var genero = ''
        var idade = ano_atual - ano_nascimento.value
        var resultado = window.document.getElementById("resultado_pesquisa")
        if (sexo[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) { 
                img.setAttribute('src', 'foto-bebe-m.png') // criança
            } else if (idade >= 10 && idade < 18) {
                img.setAttribute('src', 'foto-jovem-m.png') // adolescente
            } else if (idade >= 18 && idade <= 50 ) {
                img.setAttribute('src', 'foto-adulto-m.png')// adulto   
            } else { 
                img.setAttribute('src', 'foto-idoso-m.png')// idoso
            }
            resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
            resultado.appendChild(img)
        } else if(sexo[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) { 
                img.setAttribute('src', 'foto-bebe-f.png') // criança
            } else if (idade >= 10 && idade < 18) {
                img.setAttribute('src', 'foto-jovem-f.png') // adolescente
            } else if (idade >= 18 && idade <= 50 ) {
                img.setAttribute('src', 'foto-adulto-f.png')// adulto   
            } else { 
                img.setAttribute('src', 'foto-idoso-f.png')// idoso
            }
             resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
            resultado.appendChild(img)

        }
    }
}