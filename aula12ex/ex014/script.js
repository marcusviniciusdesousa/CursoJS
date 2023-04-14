function Carregar() {
    var mensagem = window.document.getElementById("mensagem")
    var imagem = window.document.getElementById("imagem")
    var data = new Date()
    var hora_do_dia = data.getHours()
    mensagem.innerHTML = `Agora é exatamente ${hora_do_dia}h` 
    if (hora_do_dia >= 0 && hora_do_dia <12) {  //BOM DIA
        imagem.src ='fotomanha.png'
        window.document.body.style.background = 'Yellow'
    } else if (hora_do_dia >= 12 && hora_do_dia < 18) { // BOA TARDE
        window.document.body.style.background = 'Orange'
        imagem.src ='fototarde.png'
    } else { // BOA NOITE
        window.document.body.style.background = 'Gray'
        imagem.src ='fotonoite.png'
    }
}

