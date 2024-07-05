let vermelho = document.querySelector('.vermelho')
let verde = document.querySelector('.verde')
let azul = document.querySelector('.azul')
let tela = document.querySelector('#tela')

function trocarCor(cor) {
   tela.style.background = cor
}

let novoParagrafo = document.createElement('p')
novoParagrafo.innerHTML= 'Texto inserido no inner html de um paráragrafo criado com o createElement do objeto documente'

let elementoPai = document.querySelector('body')
elementoPai.appendChild(novoParagrafo)
