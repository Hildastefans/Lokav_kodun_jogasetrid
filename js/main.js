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
    var closeClassesVariable = filterClassesByTypeFunction("closed")
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

allClassesButtonElement.onclick = onAllClassesButtonClick
openClassesButtonElement.onclick = onOpenClassesButtonClick
closeClassesButtonElement.onclick = onCloseClassesButtonClick


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
      

] // array - kennarar


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
 // debugger
displayAllTeachersFunction(teachersArrayVariable)


























//XXXXXXXXXXXXXXXXXXXXXX  HÉR ER LEIT  XXXXXXXXXXXXXXXXXXXXX


//ÞAÐ VÆRI GOTT AÐ HAFA ONCLIK Á LEIT OG LOKA MEÐ X 

//leit í html .. <ul><li><a href="#"><img src="images/leit.svg" /></a></li></ul> 
//undir (class) nav_list



var onClickOpenSearch = function() {
    if (addCardDiv.style.display === "") {
        addCardDiv.style.display = "none"
        showAddCardDiv.innerHTML = "+"
    } else {
        addCardDiv.style.display = ""
        showAddCardDiv.innerHTML = "-"
    }
}



var onSearchInputInput = function() {
    var searchText = searchInput.value.toLowerCase()
    var AllClassesResult = []
    // Fara í gegnum kortin og setja í leitarniðurstöðu array þau sem passa
    for(i=0; i<classes.length; i++) {
        var AllClasses = AllClasses[i]
        var ClassesTitle = AllClasses.title.toLowerCase()
        var button = AllClasses.button.toLowerCase()
        

        if (cardTitle.startsWith(searchText) 
            || buttonText1.includes(searchText)
            || buttonText2.includes(searchText)) {
            // Kort sem uppfyllir leit bætt við leitarniðurstöður
            cardsResult.push(card)
        }
    }

    // Birta leitarniðurstöður
    displayCards(cardsResult)
    
}



















    








