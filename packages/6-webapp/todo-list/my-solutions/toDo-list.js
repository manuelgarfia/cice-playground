export function addElementToDoList() {
  // We get the input value
  let toDoInputElement = document.getElementById('fieldList')
  let toDoInputElementValue = toDoInputElement.value

  // We create the ul and li elements
  let ul = document.getElementById('toDoElement')
  const newLineOnList = document.createElement('li')
  newLineOnList.appendChild(document.createTextNode(toDoInputElementValue))
  ul.appendChild(newLineOnList)
  //Wa add a id and a value

  toDoInputElement.value = ''

  newLineOnList.addEventListener('click', () =>{
      newLineOnList.classList.toggle('completed')


  })
}

