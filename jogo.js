var largura = window.innerWidth
var altura = window.innerHeight
var vidas = 1
var tempo = 10

function ajustaTamanhoPalcoJogo(){
    var altura = window.innerHeight
    var largura = window.innerWidth

}
ajustaTamanhoPalcoJogo()


function posicaoRandomica(){
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90 

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    // CRIAR O ELEMENTO
    if(document.querySelector('#mosquito')){
    document.querySelector('#mosquito').remove()

        if (vidas > 3){
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.querySelector('#v' + vidas).src="imagem/coracao_vazio.png"
            vidas++
        }
    }

    var mosquito = document.createElement('img')
    mosquito.src = 'imagem/mosquito.png'
    mosquito.className = tamanhoAleatorio() + " " +ladoAleatorio();
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    document.body.appendChild(mosquito)
    mosquito.onclick = function() {
        this.remove()
    }

}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}

var cronometro = setInterval(function() {
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else{
        document.querySelector('#cronometro').innerHTML = tempo
    }
    tempo -= 1
}, 1000)

var criaMosquitoTempo = 1500
var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel=== 'normal'){
    criaMosquitoTempo = 1500
} else if (nivel=== 'dificil'){
    criaMosquitoTempo = 1000
} else if (nivel=== 'chucknorris'){
    criaMosquitoTempo = 750
}
