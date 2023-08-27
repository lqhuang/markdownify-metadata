let count = 0

document.querySelector('#popup-content')!.innerHTML = `
  <h1>Popup</h1>
  <button type="button">Clicks: ${count}</button>
`

const buttonElement = document.querySelector('button')!
buttonElement.addEventListener('click', () => {
  count += 1

  buttonElement.textContent = `Clicks: ${count}`
})
