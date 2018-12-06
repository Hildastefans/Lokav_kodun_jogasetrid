var showTeachersPageFunction = function () {
  mainElement.innerHTML = pages.teachers
  connectTeachersPageFunction()
}

var showAllClassesPageFunction = function () {
  window.scrollTo(0,0)
  mainElement.innerHTML = pages.all_classes
  connectAllClassesPageFunction()
}

var showClassPageFunction = function () {
  mainElement.innerHTML = pages.class
}

var showFrontpageFunction = function () {
  mainElement.innerHTML = pages.frontpage
  showTimetableFunction()
}

var mainElement = document.querySelector("main")

showFrontpageFunction()

