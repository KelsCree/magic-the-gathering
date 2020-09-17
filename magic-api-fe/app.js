const baseCardURL = "http://localhost:3000/magic_cards"
const baseUserURL = "http://localhost:3000/users"

fetch(baseCardURL)
  .then(res => res.json())
  .then(renderCards)

  function renderCards(cards) {
    console.log(cards)
    const $main = document.querySelector('main')
    cards.forEach(card => {
      console.log(card)
      const magicCard = document.createElement('div')
      const name = document.createElement('h2')
      const img = document.createElement('img')
      magicCard.classList.add(`card-${card.id}`)
      name.textContent = card.name
      img.src = card.imageURL
      $main.append(magicCard)
      magicCard.append(img, name)
      renderButton(card, magicCard)
    })
  }

  function renderButton(card, magicCard) {
    const button = document.createElement('button')
    button.classList.add(`${card.id}`)
    button.textContent = "X"
    magicCard.append(button)
    button.addEventListener('click', deleteCard)
  }

  const $newUserForm = document.querySelector('#new-user-form')
  $newUserForm.addEventListener('submit', () => {
      event.preventDefault()
      const formData = new FormData($newUserForm)
      const username = formData.get('username')
      const email = formData.get('email')
      const password = formData.get('password')
      const user =  {username, email, password}
      fetchCall(baseUserURL, "POST", {user})
      .then(res => res.json())
      .then(showNewUser)
  })

function showNewUser(user) {
  const usernameInput = document.querySelector('#username')
  const section = document.querySelector('.new-user')
  console.log(section.childNodes.length)
  if (user.errors) {
    removeWarning(section)
      const warning = document.createElement('p')
      warning.classList.add('warning')
      warning.textContent = user.username
      warning.style.color = "red"
      section.prepend(warning)
  } else {
      removeWarning(section)
      const form = document.querySelector('#new-user-form')
      section.removeChild(form)
      const h1 = document.createElement('h1')
      h1.textContent = `Welcome ${user.username}`
      section.append(h1)
  }
}

function deleteCard(event) {
  const button = event.target
  const id = button.classList[0]
  fetch(`${baseCardURL}${id}`, {
    method: "DELETE"
  })
  const card = document.querySelector(`.card-${id}`)
  card.remove()
}

function removeWarning(section) {
  const warning = section.querySelector('.warning')
  if warning {
    warning.remove()
  }
}

function findError(errors){
  const errorMessages = Object.values(errors)
  return errorMessages[0]
}

function fetchCall(url, method, bodyData) {
  const headers = {
    "Accept": "application/json",
    "Content-type": "application/json"
  }
  const body = JSON.stringify(bodyData)
  return fetch(url, { method, headers, body })
}