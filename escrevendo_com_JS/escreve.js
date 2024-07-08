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
    let divPerfil = document.createElement("div")
    let nome = document.createElement("h2")
    let idade = document.createElement('h3')
    let salario = document.createElement('h3')
    let cargo = document.createElement('h3')
    

    nome.innerHTML= `Nome: ${element.nome}`
    idade.innerHTML = `Idade: ${element.idade}`
    salario.innerHTML = `Salario: ${element.salario}`
    cargo.innerHTML =`Cargo: ${element.cargo}`
    imagem.src = './img/perfil.png'

    divPerfil.appendChild(nome)
    divPerfil.appendChild(imagem)
    divPerfil.appendChild(idade)
    divPerfil.appendChild(salario)
    divPerfil.appendChild(cargo)
    
    quadroBranco.appendChild(divPerfil) 
    

});

