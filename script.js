let page = document.getElementById(`page`)
let messageParagraph = document.getElementById(`messageParagraph`)
let button = document.getElementById(`button`)

let gameStarted = false
let pageChanged = false
let pageChangedTime
let timeoutId

button.addEventListener(`click`, clickButton)

function clickButton() {
  if (gameStarted == false) {
    messageParagraph.innerHTML = `Click when the page is blue.`

    let delay = Math.floor(Math.random() * 8000) + 2000
    timeoutId = setTimeout(changeColor, delay)

    gameStarted = true
  }
  else {
    if (pageChanged == false) {
      messageParagraph.innerHTML = `You clicked too soon.`
      clearTimeout(timeoutId)
    }
    else {
      let reactionTime = Date.now() - pageChangedTime
      messageParagraph.innerHTML = `Reaction: ${reactionTime} milliseconds`

      page.style.backgroundColor = ``
      pageChanged = false
    }

    gameStarted = false
  }
}

function changeColor() {
  page.style.backgroundColor = `#add8e6`
  pageChanged = true
  pageChangedTime = Date.now()
}