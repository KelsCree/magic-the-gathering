const baseURL = "http://localhost:3000/magic_cards"

fetch(baseURL)
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
      name.textContent = card.name
      img.src = card.imageURL
      $main.append(magicCard)
      magicCard.append(img, name)
    })
  }

  const $newUserForm = document.querySelector('#new-user-form')
  $newUserForm.addEventListener('submit', () => {
  const formData = new FormData($newUserForm)
  const username = formData.get('username')
  const email = formData.get('email')
  const password = formData.get('password')
  fetch ( baseUserURL, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username: username,
          email: email,
          password: password
        }
      })
  })
  .then(res => res.json())
  .then(console.log)
})