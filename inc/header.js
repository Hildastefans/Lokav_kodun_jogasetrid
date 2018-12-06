var headerElement = document.querySelector("header")

headerElement.innerHTML = `
<nav class="nav_container">
  <div class="logo-column">
      <a href="#" alt="forsíða" onclick="showFrontpageFunction()"><img src="images/jogasetrid-hvitt.svg" class="jogasetur_logo" alt="Jógasetrið_logo"></a>
  </div> 

  <!--þetta eru hamburger sem er aðeins sýnilegur í mobile -->
  <div> 
      <button class="hamburger" id= "nav-button"></button>
  </div>

  <div class="nav_inner" id="nav-menu">
      <ul class="nav_list">
          <li><button id="close-nav-button"></button></li>
          <li><a href="#" class="nav-item" onclick="showTeachersPageFunction()">Um okkur</a</li>
          <li><a href="#" class="nav-item">Stundaskrá</a></li>
          <li><a href="#" class="nav-item" onclick="showAllClassesPageFunction()">Námskeið</a></li>
          <li><a href="#" class="nav-item">Meðgöngujóga</a></li>
          <li><a href="#" class="nav-item">Kennaranám</a></li>
          <li><a href="#" class="nav-item">Verðskrá</a></li>
          <li><a href="#"><img src="images/leit.svg" /></a></li>
      </ul>        
  </div>
</nav>
`