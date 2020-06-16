let page = document.getElementById(`page`)
let messageParagraph = document.getElementById(`messageParagraph`)
let button = document.getElementById(`button`)

let gameStarted = false
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
    if (page.style.backgroundColor != `lightblue`) {
      messageParagraph.innerHTML = `You clicked too soon.`
      clearTimeout(timeoutId)
    }
    else {
      let reactionTime = Date.now() - pageChangedTime
      messageParagraph.innerHTML = `Reaction: ${reactionTime} milliseconds`

      page.style.backgroundColor = ``
    }

    gameStarted = false
  }
}

function changeColor() {
  page.style.backgroundColor = `lightblue`
  pageChangedTime = Date.now()
}