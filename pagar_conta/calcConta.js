let entrada = document.querySelector("#entrada")
let principal = document.querySelector("#pratoPrin")
let bebida = document.querySelector("#bebida")
let sobremesa = document.querySelector("#sobremesa")
let subTotal = document.querySelector("#subTotal")
let taxaServico = document.querySelector("#taxaServico")
let total = document.querySelector("#total")



function alteracao() {
    console.log('Campo alterado')
}

function calcularComta() {
    let precoTotal = Number(entrada.value) +  Number(principal.value) + Number(bebida.value) + Number(sobremesa.value) 

    let valorTaxa = precoTotal * 0.1

    let totalApagar = precoTotal + valorTaxa

    return [precoTotal,valorTaxa,totalApagar]
}
function mostrarConta(){
    let valores = calcularComta()

    subTotal.value= valores[0].toFixed(2)
    taxaServico.value= valores[1].toFixed(2)
    total.value= valores[2].toFixed(2)
}
     
     
     