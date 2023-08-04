let inputElement = document.querySelector(".container-container input")
let buttonElement = document.querySelector(".container-container button")
let listElement = document.querySelector(".container-container ul")

let tarefas = JSON.parse(localStorage.getItem("@listKey")) || []

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

renderTarefa()

function cadastrarTarefa() {
    if(inputElement.value === "") {
        alert('[ERRO]Preencha o campo corretamente!')
    }else {
       let novaTarefa = inputElement.value
       tarefas.push(novaTarefa)
        inputElement.value = ''

        renderTarefa()
        salvarDados()
    }
}

function excluirTarefa(posicao) {
    tarefas.splice(posicao, 1)
    renderTarefa()
    salvarDados()
}

function salvarDados() {
    localStorage.setItem("@listKey", JSON.stringify(tarefas))
}

buttonElement.onclick = cadastrarTarefa