// þetta er fyrir menu mobile --------- 

const navMenuButtonElement = document.getElementById('nav-button')
const closeNavMenuButtonElement = document.getElementById('close-nav-button')
const navMenuElement = document.getElementById('nav-menu')
navMenuButtonElement.addEventListener('click', onNavMenuButtonClick)
closeNavMenuButtonElement.addEventListener('click', onCloseNavMenuButtonClick)

var activeClass = 'expanded'
function onNavMenuButtonClick(e) {
    console.log('click')
  navMenuButtonElement.classList.add(activeClass)
  navMenuElement.classList.add(activeClass)
}

function onCloseNavMenuButtonClick(e) {
  navMenuButtonElement.classList.remove(activeClass)
  navMenuElement.classList.remove(activeClass)
}