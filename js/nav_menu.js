// þetta er fyrir menu mobile --------- 

var navMenuButtonElement = document.getElementById('nav-button')
var closeNavMenuButtonElement = document.getElementById('close-nav-button')
var navMenuElement = document.getElementById('nav-menu')
var navListElement = document.getElementsByClassName('nav-list')

navMenuButtonElement.onclick = onNavMenuButtonClick
closeNavMenuButtonElement.onclick = onCloseNavMenuButtonClick
navMenuElement.onclick = onCloseNavMenuButtonClick

var activeClass = 'expanded'
function onNavMenuButtonClick(e) {
  navMenuButtonElement.classList.add(activeClass)
  navMenuElement.classList.add(activeClass)
}

function onCloseNavMenuButtonClick(e) {
  navMenuButtonElement.classList.remove(activeClass)
  navMenuElement.classList.remove(activeClass)
}