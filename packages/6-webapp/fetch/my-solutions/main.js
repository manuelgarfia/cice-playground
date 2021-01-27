fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(response => response.json())
  .then(json => {
    for (const data of json) {
      const ul = document.getElementById('fetch')
      const elementFetchedOnList = document.createElement('li')
      elementFetchedOnList.appendChild(document.createTextNode(data.title))
      ul.appendChild(elementFetchedOnList)
    }
  })

const  createPostButton = document.getElementById('my-post')
createPostButton.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => response.json())
    .then(json => console.log(json))
})
