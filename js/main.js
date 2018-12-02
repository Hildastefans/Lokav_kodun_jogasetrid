/****** ÖLL NÁMSKEIÐ ******/

// Array á námskeiðum

var allClasses = [
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
var container_all_classes = document.getElementById("container_all_classes")

/** functions **/
var displayAllClasses = function(allClassesToDisplay){
    container_all_classes.innerHTML = ""; // Tæma það sem er í container

    for(var i = 0; i<allClassesToDisplay.length;i++){
        var jogaClass = allClassesToDisplay[i]
        displayClass(jogaClass)
    }

 }

 var displayClass = function(jogaClass){
    var divClass = "open_classes" 
    if (jogaClass.type === "closed") {
        divClass = "close_classes"
     }
    /** bæta við container-inn auka námskeiði */
    container_all_classes.innerHTML += `
        <div class= ${divClass} >
            <h1>${jogaClass.title}</h1>
            <p> ${jogaClass.subText}</p>
            <button>${jogaClass.button}</button>
        </div>
        `   
}

// Kalla í fallið ef ég er á námskeiðasíðunni
if (container_all_classes) {
    displayAllClasses(allClasses)
}

//XXXXXXXXXXXXXXXXXXXXXX  HÉR ERU KENNARAR  XXXXXXXXXXXXXXXXXXXXX


// Array fyrir Kennara

var teachers = [
    {
        img: `https://images/audur.png`,
        Name: `Auður Bjarnadóttir`,
        description: `EIGANDI, KUNDALINI, MEÐGÖNGUJÓGA`,
    }
    ,
    {
        img: `https://images/þorunn.png`,
        Name: `ÞÓRUNN JÓNSDÓTTIR`,
        description: `MÖMMU OG MEÐGÖNGUJÓGA`,
    }
    ,
    {
        img: `https://images/annarin.png`,
        Name: `ARNA RÍN JÓNSDÓTTIR`,
        description: `MÖMMU OG MEÐGÖNGUJÓGA`,
    }
    ,
    {
        img: `https://images/run.png`,
        Name: `RÚN STEFÁNSDÓTTIR`,
        description: `NÚVITUND GENG STREITU`,
    }
    ,
    {
        img: `https://images/hildur.png`,
        Name: `HILDUR ÖRNÓLFSDÓTTIR`,
        description: `HATHA OG KUNDALIN JÓGA`,
    }
    ,
    {
        img: `https://images/ester.png`,
        Name: `ESTER ÞORVALDSDÓTTIR`,
        description: `KUNDALINI og Jóga Nidra`,
    }
    ,
    {
        img: `https://images/inga.png`,
        Name: `INGA REYNISDÓTTIR`,
        description: `EMÖMMU OG MEÐGÖNGUJÓGA`,
    }
    ,
    {
        img: `https://images/rut.png`,
        Name: `Rut Gunnarsdóttir`,
        description: `MJÚKT JÓGA OG JÓGA NIDRA `,
    }
    ,
    {
        img: `https://images/birgir.png`,
        Name: `BIRGIR JÓAKIMSSON`,
        description: `KARLAJÓGA`,
    }
    ,
    {
        img: `https://images/erna.png`,
        Name: `ERNA ARADÓTTIR `,
        description: `KUNDALINI OG JÓGA NIDRA`,
    }
    ,
    {
        img: `https://images/edda.png`,
        Name: `EDDA GUNNARSDÓTTIR`,
        description: `MEÐGÖNGU OG MÖMMU JÓGA`,
    }
    ,
    {
        img: `https://images/bara.png`,
        Name: `BÁRA GUÐNADÓTTIR`,
        description: `MJÚKT JÓGA OG JÓGA NIDRA`,
    }
      

] // array - kennarar


var container_all_teachers = document.getElementById("container_all_teachers")




















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



















    








