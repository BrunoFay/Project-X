const divBody = document.querySelector('body');
const creatHeader = document.createElement('header');
const creatTitle = document.createElement('h1');
creatTitle.innerHTML = 'Minha Lista de Tarefas'
creatHeader.className = 'header'
divBody.appendChild(creatHeader)
creatHeader.appendChild(creatTitle)

function paragraph(params) {
  const creatParagraph = document.createElement('p')
  const creatSection = document.createElement('section')
  divBody.appendChild(creatSection)
  creatSection.appendChild(creatParagraph)
  creatParagraph.innerHTML = params
  creatSection.id = 'funcionamento'


}
paragraph('Clique duas vezes em um item para marcá-lo como completo')
const creatSectionButtons = document.createElement('section')
divBody.appendChild(creatSectionButtons)

const creatDivInput = document.createElement('div')
creatDivInput.className = 'input';
function inputList() {
  const creatInput = document.createElement('input')
  creatInput.id = 'texto-tarefa'
  divBody.appendChild(creatDivInput)
  creatDivInput.appendChild(creatInput)
}
inputList()

function List() {
  const creatTodoList = document.createElement('ol')
  const creatMain = document.createElement('main')
  creatTodoList.id = 'lista-tarefas'
  divBody.appendChild(creatMain)
  creatMain.appendChild(creatTodoList)

}
List()

function buttons(id, nome) {
  const creatButtons = document.createElement('button')
  creatSectionButtons.id = "buttons"
  creatButtons.id = id
  creatButtons.className = 'buttonsST'
  creatButtons.innerHTML = nome
  creatSectionButtons.appendChild(creatButtons)

}
buttons('criar-tarefa', 'Adicionar')
const catchAddButton = document.querySelector('#criar-tarefa')
creatDivInput.appendChild(catchAddButton)
function creatItemList() {
  const catchimput = document.querySelector('#texto-tarefa')
  const catchList = document.querySelector('#lista-tarefas')
  const catchButton = document.querySelector('#criar-tarefa')
  catchButton.addEventListener('click', () => {
    if (catchimput.value == '') {
      alert('insira um item!')
    }
    else {
      let creatLi = document.createElement('li')
      creatLi.classList.add('item')
      catchList.appendChild(creatLi)
      creatLi.innerHTML = catchimput.value
      catchimput.value = ''
    }
  })

}
creatItemList()

function selectLi() {
  const catchOl = document.querySelector('#lista-tarefas')
  catchOl.addEventListener('click', (event) => {
    removeSelect()
    if(event.target.id !== 'lista-tarefas'){
    event.target.classList.add('selected')
    }
  })
}
selectLi()

function removeSelect() {
  const catchLi = document.querySelectorAll('.item')
  for (let index = 0; index < catchLi.length; index += 1) {
    catchLi[index].classList.remove('selected');
  }
}
function completedLi() {
  const catchOl = document.querySelector('#lista-tarefas')
  catchOl.addEventListener('dblclick', (event) => {
    if (event.target.classList == 'item' || event.target.classList == 'item selected') {
      event.target.classList.add('completed')
    }
    else {
      event.target.classList.remove('completed')
    }
  })

}
completedLi()

buttons('apaga-tudo', 'Remover toda lista')
/* para remover de forma dinamica, usei essa dica https://pt.stackoverflow.com/questions/441373/como-remover-todos-os-elementos-de-uma-div-em-javascript */
function buttonRemove() {
  const catchOl = document.querySelector('#lista-tarefas')
  const catchButtonRemove = document.querySelector('#apaga-tudo')
  catchButtonRemove.addEventListener('click', () => {
    catchOl.innerHTML = ''
  })
}
buttonRemove()

buttons('remover-finalizados', 'Remover Finalizados')
/* essa função while eu peguei com base no repositorio do gabriel rodrigues https://github.com/tryber/sd-016-b-project-todo-list/pull/78/commits/81c677b62f4d88614106cd4f367d971583029898 */
function buttonRemoveCompleted() {
  const catchButtonRemoveCompleted = document.querySelector('#remover-finalizados')
  catchButtonRemoveCompleted.addEventListener('click', () => {
    while (document.querySelector('.completed')) {
      document.querySelector('.completed').remove();
    }
  })
}
buttonRemoveCompleted()

buttons('salvar-tarefas', 'Salvar Tarefas')

function saveList() {

}
buttons('remover-selecionado', 'Remover Selecionado')

function removeSelected() {
  const catchButtonRemoveSelected = document.querySelector('#remover-selecionado')
  catchButtonRemoveSelected.addEventListener('click', () => {
    if (document.querySelector('.selected') == null) {
      alert('sem itens selecionados')
    }
    else {
      document.querySelector('.selected').remove();
    }
  })

}
removeSelected()

buttons('mover-cima', 'Up')
/*  dica do lucas araujo para mover https://stackoverflow.com/questions/34913953/move-an-element-one-place-up-or-down-in-the-dom-tree-with-javascript */
function moveUp() {
  let catchButtonUp = document.querySelector('#mover-cima')
  catchButtonUp.addEventListener('click', () => {
    let catchItem = document.querySelector('.selected')
    if (catchItem.previousElementSibling && catchItem.previousElementSibling !== null || undefined) {
      catchItem.parentNode.insertBefore(catchItem, catchItem.previousElementSibling)
    }
    else {
      alert('esse ja é o primeiro elemento')
    }

  })
}
moveUp()

buttons('mover-baixo', 'Down')
/* nextElementSibling : retorna o próximo elemento.
previousElementSibling : retorna o elemento anterior */
function moveDown() {
  let catchButtonDown = document.querySelector('#mover-baixo')
  catchButtonDown.addEventListener('click', () => {
    let catchItem = document.querySelector('.selected')

    if (catchItem.nextElementSibling && catchItem.nextElementSibling !== null || undefined) {
      catchItem.parentNode.insertBefore(catchItem.nextElementSibling, catchItem)
    }
    else {
      alert('esse ja é o ultimo elemento')
    }

  })
}
moveDown()
const getButtonUp = document.querySelector('#mover-cima')
const getButtonDown = document.querySelector('#mover-baixo')
creatDivInput.appendChild(getButtonUp)
creatDivInput.appendChild(getButtonDown)

