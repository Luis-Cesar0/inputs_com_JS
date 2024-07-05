let quadroBranco = document.querySelector('#quadro-branco')

// let pessoa= ['Luis César', 21, 'Rua 1234 casa 12'] 

// quadroBranco.innerHTML= `
//    <div>
//         <h1>${pessoa[0]}</h1>
//         <ul>
//             <li>${pessoa[1]}</li>
//             <li>${pessoa[2]}</li>
//         </ul>
//    </div>

// `

let pessoas = [
    {
        nome:"Luis",
        idade: 21,
        salario: 2500,
        cargo: 'juisa',
        imagem: ''
    },
    {
        nome:"Maria",
        idade: 31,
        salario: 2500,
        cargo: 'juisa',
        imagem: ''
    },
    {
        nome:"Leo",
        idade: 11,
        salario: 2500,
        cargo: 'juisa',
        imagem: ''
    },
    {
        nome:"Livia",
        idade: 45,
        salario: 2500,
        cargo: 'juisa',
        imagem: ''
    }
]
pessoas.forEach(element => {
    let imagem = document.createElement('img')
    let lista = document.createElement("ul")
    let nome = document.createElement("li")
    let idade = document.createElement('li')
    let salario = document.createElement('li')
    let cargo = document.createElement('li')

    nome.innerHTML= `Nome: ${element.nome}`
    idade.innerHTML = `Idade: ${element.idade}`
    salario.innerHTML = `Salario: ${element.salario}`
    cargo.innerHTML =`Cargo: ${element.cargo}`

    lista.appendChild(idade)
    lista.appendChild(salario)
    lista.appendChild(nome)
    quadroBranco.appendChild(lista)
});

