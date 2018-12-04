/****** ÖLL NÁMSKEIÐ ******/

// Array á námskeiðum

var allClassesArrayVariable = [
    {
        title: "Kundalini jóga",
        subText: "Kundalini jóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar.",
        button: "Sjá nánar",
        type: "open",
    }
    ,
    {
        title: "Hatha jóga",
        subText: "HATHA er ein þekktasta tegund jóga á vesturlöndunum. HA þýðir sól og THA þýðir máni. Unnið er með jógastöður (asana), öndun (pranayama) og slökun. Jafnvægi styrkist í innkirtlakerfinu, taugakerfinu, vöðvum, stoðkerfi og ónæmiskerfi.",
        button: "Sjá nánar",
        type: "open",
    }
    ,
    {
        title: "Jóga Nidra",
        subText: "Jóga Nidra jóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar.",
        button: "Sjá nánar",
        type: "open",
    }
    ,
    {
        title: "Mjúkt jóga",
        subText: "Mjúkt jóga jóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar.",
        button: "Sjá nánar",
        type: "open",
    }
    ,
    {
        title: "Meðgöngujóga",
        subText: "Meðgöngujóga jóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar.",
        button: "Sjá nánar",
        type: "closed",
    }
    ,
    {
        title: "Mömmujóga",
        subText: "Mömmujóga jóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar.",
        button: "Sjá nánar",
        type: "closed",
    }
    ,
    {
        title: "Parajóga",
        subText: "Parajóga jóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar.",
        button: "Sjá nánar",
        type: "closed",
    }
    ,
    {
        title: "Núvitund",
        subText: "Núvitund jóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar.",
        button: "Sjá nánar",
        type: "closed",
    }
    ,
    {
        title: "Krakkajóga",
        subText: "Krakkajóga jóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar.",
        button: "Sjá nánar",
        type: "closed",
    }
    ,
    {
        title: "Jóga fyrir 60+",
        subText: "60+ jóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar.",
        button: "Sjá nánar",
        type: "closed",
    }
    ,
    {
        title: "Karlajóga",
        subText: "Karlajóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar.",
        button: "Sjá nánar",
        type: "closed",
    }
    ,
    {
        title: "12 spor",
        subText: "12 spor til vellíðunar er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar.",
        button: "Sjá nánar",
        type: "closed",
    }
] // array af námskeiðum

// sækja eða ná í námskeiðin í arrey
var containerAllClassesElement = document.getElementById("container_all_classes")

/** functions **/
var displayAllClassesFunction = function(allClassesParameter){
    containerAllClassesElement.innerHTML = ""; // Tæma það sem er í container

    for(var i = 0; i<allClassesParameter.length;i++){
        var jogaClass = allClassesParameter[i]
        displayClassFunction(jogaClass)
    }

 }

 var displayClassFunction = function(jogaClassParameter){
    var divClass = "open_classes" 
    if (jogaClassParameter.type === "closed") {
        divClass = "close_classes"
     }
    /** bæta við container-inn auka námskeiði */
    containerAllClassesElement.innerHTML += `
        <div class= ${divClass} >
            <h1>${jogaClassParameter.title}</h1>
            <p> ${jogaClassParameter.subText}</p>
            <button>${jogaClassParameter.button}</button>
        </div>
        `   
}

// Kalla í fallið ef ég er á námskeiðasíðunni
if (containerAllClassesElement !== null) {
    displayAllClassesFunction(allClassesArrayVariable)
}

var allClassesButtonElement = document.getElementById("all_classes_button")
var openClassesButtonElement = document.getElementById("open_classes_button")
var closeClassesButtonElement = document.getElementById("close_classes_button")


var onAllClassesButtonClick = function(){
    displayAllClassesFunction(allClassesArrayVariable)
}
var onOpenClassesButtonClick = function(){
    var openClassesVariable = filterClassesByTypeFunction("open")
    displayAllClassesFunction(openClassesVariable)
}

var onCloseClassesButtonClick = function(){
    var closeClassesVariable = filterClassesByTypeFunction("closed") //closed inn í sviga er arguments//
    displayAllClassesFunction(closeClassesVariable)
}

var filterClassesByTypeFunction = function(typeParameter) {
    var filteredClassesResultVariable = []
    // Fara í gegnum classes og setja í leitarniðurstöðu þau sem eru með rétt type
    for(i=0; i<allClassesArrayVariable.length; i++) {
        var classVariable = allClassesArrayVariable[i]

        if (classVariable.type === typeParameter) {
            // Námskeið sem uppfyllir leit bætt við leitarniðurstöður
            filteredClassesResultVariable.push(classVariable)
        }
    }

    return filteredClassesResultVariable
}

/*allClassesButtonElement.onclick = onAllClassesButtonClick
openClassesButtonElement.onclick = onOpenClassesButtonClick
closeClassesButtonElement.onclick = onCloseClassesButtonClick*/


// Kalla í fallið ef ég er á námskeiðasíðunni
if (allClassesButtonElement !== null) {
    allClassesButtonElement.onclick = onAllClassesButtonClick
    openClassesButtonElement.onclick = onOpenClassesButtonClick
    closeClassesButtonElement.onclick = onCloseClassesButtonClick
}



//XXXXXXXXXXXXXXXXXXXXXX  HÉR ERU KENNARAR  XXXXXXXXXXXXXXXXXXXXX


// Array fyrir Kennara

var teachersArrayVariable = [
    {
        img: `images/audur.png`,
        name: `Auður Bjarnadóttir`,
        description: `EIGANDI, KUNDALINI, MEÐGÖNGUJÓGA`,
    }
    ,
    {
        img: `images/þorunn.png`,
        name: `ÞÓRUNN JÓNSDÓTTIR`,
        description: `MÖMMU OG MEÐGÖNGUJÓGA`,
    }
    ,
    {
        img: `images/annarin.png`,
        name: `ARNA RÍN JÓNSDÓTTIR`,
        description: `MÖMMU OG MEÐGÖNGUJÓGA`,
    }
    ,
    {
        img: `images/run.png`,
        name: `RÚN STEFÁNSDÓTTIR`,
        description: `NÚVITUND GENG STREITU`,
    }
    ,
    {
        img: `images/hildur.png`,
        name: `HILDUR ÖRNÓLFSDÓTTIR`,
        description: `HATHA OG KUNDALIN JÓGA`,
    }
    ,
    {
        img: `images/ester.png`,
        name: `ESTER ÞORVALDSDÓTTIR`,
        description: `KUNDALINI og Jóga Nidra`,
    }
    ,
    {
        img: `images/inga.png`,
        name: `INGA REYNISDÓTTIR`,
        description: `EMÖMMU OG MEÐGÖNGUJÓGA`,
    }
    ,
    {
        img: `images/rut.png`,
        name: `Rut Gunnarsdóttir`,
        description: `MJÚKT JÓGA OG JÓGA NIDRA `,
    }
    ,
    {
        img: `images/birgir.png`,
        name: `BIRGIR JÓAKIMSSON`,
        description: `KARLAJÓGA`,
    }
    ,
    {
        img: `images/erna.png`,
        name: `ERNA ARADÓTTIR `,
        description: `KUNDALINI OG JÓGA NIDRA`,
    }
    ,
    {
        img: `images/edda.png`,
        name: `EDDA GUNNARSDÓTTIR`,
        description: `MEÐGÖNGU OG MÖMMU JÓGA`,
    }
    ,
    {
        img: `images/bara.png`,
        name: `BÁRA GUÐNADÓTTIR`,
        description: `MJÚKT JÓGA OG JÓGA NIDRA`,
    }
      

]


var containerAllTeachersElement = document.getElementById("container_all_teachers")

var displayAllTeachersFunction = function(allTeachersArrayParameter) {
     // Ef elementið er til á síðunni þá skrifa út alla kennara
    if (containerAllTeachersElement === null) {
        return
     }

    containerAllTeachersElement.innerHTML= ""; // hérna tæmi ég containerinn


    for( var i = 0; i<allTeachersArrayParameter.length; i++){
        var teacher = allTeachersArrayParameter[i]
        displayTeacherFunction(teacher)
    }
}

var displayTeacherFunction = function(teacherParameter) {
    // console.log(teacherParameter) athuga 
    var teacherHtmlVariable = `
    <div class="teachers_container">
        <img class=image src="${teacherParameter.img}" alt="teacher">
        <h1>${teacherParameter.name}</h1>
        <p>${teacherParameter.description}</p>
    </div>
    `
    containerAllTeachersElement.innerHTML += teacherHtmlVariable
}

displayAllTeachersFunction(teachersArrayVariable)








/*XXXXXXXXXXXXXXXXXXXXXX    TÍMAR Í DAG     XXXXXXXXXXXXXXXXXXXXXXXXXXXX*/

var timetableArray = [ 
    {
        weekday: "Sunnudagur",
        classes: [ 
            {
                hours: "10-11:15",
                name: "Kundalini jóga",
            },       
    ]
    }
    ,
    {
        weekday: "Mánudagur",
        classes: [ 
            {
                hours: "06:30 - 07:30",
                name: "Kundalini jóga",
            },
            {
                hours: "10:15 - 11:30",
                name: "Mömmujóga",
            },
            {
                hours: "12:00 - 13:15",
                name: "Meðgöngujóga",
            },
            {
                hours: "17:15 - 18:30",
                name: "Hatha jóga",
            },
            {
                hours: "18:45 - 20:00",
                name: "Grunnnámskeið",
            },
            {
                hours: "20:15 - 21:15",
                name: "Karlajóga",
            },
    ]
    }
    ,
    {
        weekday: "Þriðjudagur",
        classes: [ 
            {
                hours: "10:00 - 11:15",
                name: "Mjúkt jóga",
            },
            {
                hours: "12:00 - 13:00",
                name: "Kundalini jóga",
            },
            {
                hours: "13:30 - 14:30",
                name: "Jóga fyrir 60+",
            },
            {
                hours: "17:15 - 18:30",
                name: "Kundalini jóga",
            },
            {
                hours: "18:45 - 20:00",
                name: "Meðgöngujóga",
            },
            {
                hours: "20:15 - 21:30",
                name: "Jóga og 12 sporin",
            },
    ]
    }
    ,
    {
        weekday: "Miðvikudagur",
        classes: [ 
            {
                hours: "06:30 - 07:30",
                name: "Kundalini jóga",
            },
            {
                hours: "10:15 - 11:30",
                name: "Mömmujóga",
            },
            {
                hours: "12:00 - 13:15",
                name: "Meðgöngujóga",
            },
            {
                hours: "16:00 - 17:00",
                name: "Meðgöngujóga",
            },
            {
                hours: "17:15 - 18:30",
                name: "Hatha og Nidra",
            },
            {
                hours: "18:45 - 20:00",
                name: "Grunnnámskeið",
            },
            {
                hours: "20:15 - 21:15",
                name: "Kuldalini & Gong",
            },
    ]
    }
    ,
    {
        weekday: "Fimmtudagur",
        classes: [ 
            {
                hours: "10:00 - 11:15",
                name: "Mjúkt jóga",
            },
            {
                hours: "12:00 - 13:00",
                name: "Kundalini jóga",
            },
            {
                hours: "13:30 - 14:30",
                name: "Jóga fyrir 60+",
            },
            {
                hours: "17:15 - 18:30",
                name: "Kundalini jóga",
            },
            {
                hours: "18:45 - 20:00",
                name: "Meðgöngujóga",
            },
            {
                hours: "20:15 - 21:30",
                name: "Jóga og 12 sporin",
            },
    ]
    }
    ,
    {
        weekday: "Föstudagur",
        classes: [ 
            {
                hours: "10:00 -11:15",
                name: "Sadhana",
            },
            {
                hours: "11:30 - 12:40",
                name: "Jóga Nidra",
            },
            {
                hours: "13:00 - 13:50",
                name: "Hatha og Nidra",
            },
            {
                hours: "14:00 - 14:50" ,
                name: "Dans og slökun",
            },
    ]
    }
    ,
    {
        weekday: "Laugardagur",
        classes: [ 
            {
                hours: "10:00 - 11:15",
                name: "Hatha jóga",
            },
            {
                hours: "11:30 - 12:40",
                name: "Meðgöngujóga",
            },
            {
                hours: "13:00 - 13:50",
                name: "Krakkajóga",
            },
            {
                hours: "14:00 - 14:50",
                name: "Krakkajóga",
            },
    ]
    }
    ,
]

var timetableElement = document.getElementById("time_container")

for(var i = 0; i<timetableArray.length; i++){
    var timetableArrayTamplete=`
    <div class="timeTableContainer_2">
        <div class="top_container">
            <h1> Tímar í dag</h1>
            <div class="selected_date_border"></div>
            <ul>
                <li>${timetableArray[i].weekday}</li>
                
            </ul>
            <button onclick="changeDay(1)" class="or_left"></button>
            <button onclick="changeDay(-1)" class="or_right"></button>
        </div>

            <div class="bottom_container">
            <div class="class_time"> 
    `

    for( var j = 0; j<timetableArray[i].classes.length; j++){
        timetableArrayTamplete += `
        
            <div class="line first">
                <span>${timetableArray[i].classes[j].hours}</span>
                <span>${timetableArray[i].classes[j].name}</span>
            </div>
        
        `   
    }
    timetableArrayTamplete += `
    </div> 
    </div>
    </div>
    `
    timetableElement.innerHTML += timetableArrayTamplete;
}

var moveDayNumber = 0;
var weekdayPosition = 0;
timetableElement.style.left = "0px";

var changeDay = function(direction){
    console.log(direction)
    weekdayPosition += direction
    
    if (weekdayPosition === -7) {
        // Komin á laugardag, fara áfram á sunnudag
        weekdayPosition = 0
        moveDayNumber = 0;
    } else if (weekdayPosition === 1) {
        // Á sunnudegi, fara til baka á laugardag
        weekdayPosition = -6
        moveDayNumber += 448 * weekdayPosition;
    } else {
        // Fara einn dag áfram eða til baka
        moveDayNumber += 448 * direction;
    }

    timetableElement.style.left = moveDayNumber + "px";

    if(moveDayNumber <= timetableArray.length*448* -1){
       /* timetableElement.style.transition = "all 0s";*/
        timetableElement.style.left ="0px";
        moveDayNumber=0;
        setTimeout(()=>{
            timetableElement.transition = "all 2s";
            moveDayNumber += 448*direction;
            timetableElement.style.left = moveDayNumber + "px";
            },200);
  
    }
}

// Upphafsstilla á daginn í dag
var today = new Date()
var dayOfWeek = today.getDay()
changeDay(-dayOfWeek)


// þetta er fyrir menu DG --------- nota líklega frekar en minn

/*
const navMenuButtonElement = document.getElementById('nav-button')
const closeNavMenuButtonElement = document.getElementById('close-nav-button')
const navMenuElement = document.getElementById('nav-menu')
navMenuButtonElement.addEventListener('click', onNavMenuButtonClick)
closeNavMenuButtonElement.addEventListener('click', onCloseNavMenuButtonClick)

const activeClass = 'expanded'
function onNavMenuButtonClick(e) {
  navMenuButtonElement.classList.add(activeClass)
  navMenuElement.classList.add(activeClass)
}

function onCloseNavMenuButtonClick(e) {
  navMenuButtonElement.classList.remove(activeClass)
  navMenuElement.classList.remove(activeClass)
}
*/












// MENU Í MOBLILE - EÐA VIRKNI Á HAMBURGER


var burger = document.querySelector(".burger_container");
var close = document.querySelector (".close");
var menu = document.querySelector (".menu");
var burgerLines = document.getElementsByClassName("burger");
var navIsOpen = false;


burger.onclick = function (){
    if(!navIsOpen){
    menu.classList.add("show-menu");
    burgerLines[0].classList.add("tilt-right");
    burgerLines[2].classList.add("tilt-left");
    for (var i = 0; i < burgerLines.length; i++){
        burgerLines[i].classList.add("change-to-x")
    }
    navIsOpen = true;
}

else{
    menu.classList.remove("show-menu");
    burgerLines[0].classList.remove("tilt-right");
    burgerLines[2].classList.remove("tilt-left");
    for (var i = 0; i < burgerLines.length; i++) {
        burgerLines[i].classList.remove("change-to-x")
    }
    navIsOpen = false;
    }
}






    








