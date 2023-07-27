let inputElement = document.querySelector(".container-container input")
let buttonElement = document.querySelector(".container-container button")
let listElement = document.querySelector(".container-container ul")

let tarefas = []

let textelement = document.createTextNode('Cadastrar')
buttonElement.appendChild(textelement)

function cadastrarTarefa() {
    if(inputElement.value === "") {
        alert('[ERRO]Preencha o campo corretamente!')
    }else {
        alert(inputElement.value)
        inputElement.value = ''
    }
}

buttonElement.onclick = cadastrarTarefa