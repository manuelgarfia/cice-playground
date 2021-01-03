export function addElementToDoList() {
  // We get the input value
  let toDoInputElement = document.getElementById('fieldList')
  let toDoInputElementValue = toDoInputElement.value

  // We create the ul and li elements
  let ul = document.getElementById('toDoElement')
  const elementOnToDoList = document.createElement('li')
  elementOnToDoList.appendChild(document.createTextNode(toDoInputElementValue))
  const deleteLineOnList = document.createElement('span')
  deleteLineOnList.innerText = '❌'
  elementOnToDoList.appendChild(deleteLineOnList)
  ul.appendChild(elementOnToDoList)

  //Wa add a id and a value
  toDoInputElement.value = ''

  function onComplete() {
    elementOnToDoList.classList.toggle('completed')
  }

  elementOnToDoList.addEventListener('click', onComplete)

  deleteLineOnList.addEventListener('click', () => {
    elementOnToDoList.remove()
    elementOnToDoList.removeEventListener('click',onComplete )
  })
}
