let inputElement = document.querySelector(".container-container input")
let buttonElement = document.querySelector(".container-container button")
let listElement = document.querySelector(".container-container ul")

let tarefas = []

let textelement = document.createTextNode('Cadastrar')
buttonElement.appendChild(textelement)

function renderTarefa() {
    
    listElement.innerHTML = ""

    tarefas.map((name) => {
        let liElement = document.createElement("li")
        let textLi = document.createTextNode(name)

        listElement.appendChild(liElement)
        liElement.appendChild(textLi)
    })
}

function cadastrarTarefa() {
    if(inputElement.value === "") {
        alert('[ERRO]Preencha o campo corretamente!')
    }else {
       let novaTarefa = inputElement.value
       tarefas.push(novaTarefa)
        inputElement.value = ''

        renderTarefa()
    }
}

buttonElement.onclick = cadastrarTarefa