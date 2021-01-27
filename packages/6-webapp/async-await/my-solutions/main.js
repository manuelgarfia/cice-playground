async function getFetchApi(value) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${value}`)
  return await response.json()
}

function mappingElements(elements) {
  elements.forEach(element => {
    const ul = document.getElementById('fetch')
    const elementFetchedOnList = document.createElement('li')
    elementFetchedOnList.appendChild(document.createTextNode(element.title))
    ul.appendChild(elementFetchedOnList)
  })
}

export async function getFetchElements() {
  try {
    const elements = await Promise.all([
      getFetchApi(1),
      getFetchApi(2),
      getFetchApi(3)
    ])
    mappingElements(elements)
  } catch (e) {
    console.error(e)
  }
}
