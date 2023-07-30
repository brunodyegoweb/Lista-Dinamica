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

        let linkElement = document.createElement("a")
        linkElement.setAttribute("href", "#")

        let posicao = tarefas.indexOf(name)

        linkElement.setAttribute("onclick", `excluirTarefa(${posicao})`)

        let textLink = document.createTextNode("   Excluir")
        linkElement.appendChild(textLink)

        liElement.appendChild(textLi)
        liElement.appendChild(linkElement)
        listElement.appendChild(liElement)
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

function excluirTarefa(posicao) {
    alert("Excluido!!! "+posicao)
    renderTarefa()
}

buttonElement.onclick = cadastrarTarefa