import { addElementToDoList } from './toDo-list.js'
function init() {
  document.querySelector('button').addEventListener('click', () => {
    addElementToDoList()
  })
}
init()
