/** Öll Námskeið **/

/** Finna HTML elementin */
// ath þetta er ur öðru verkefni sem ég er að reyna að fara eftir.
var addCardDiv = document.getElementById ("addCardDiv")
var myDiv = document.getElementById ("cardsDiv")
var showAddCardDiv = document.getElementById("showAddCardDiv")

var addButton = document.getElementById ("addButton")


// sækja eða ná í námskeiðin í arrey
var AllClasses = getElementById("AllClasses")
var container_all_classes = document.getElementsByClassName


// er kannski nóg að hafa aðeins container fyrir title, sucText og button??
var title = document.getElementById ("title")
var subText = document.getElementById ("subText")
var button = document.getElementById ("button")


var searchInput = document.getElementById ("myInputSearch")


/****** ÖLL NÁMSKEIÐ ******/

// Array á námskeiðum

var AllClasses = [
    {
        title: "Kundalini jógas",
        subText: "Kundalini jóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar.",
        button: "Sjá nánar",
    }
    ,
    {
        title: "Hatha jóga",
        subText: "HATHA er ein þekktasta tegund jóga á vesturlöndunum. HA þýðir sól og THA þýðir máni. Unnið er með jógastöður (asana), öndun (pranayama) og slökun. Jafnvægi styrkist í innkirtlakerfinu, taugakerfinu, vöðvum, stoðkerfi og ónæmiskerfi.",
        button: "Sjá nánar",
    }
    ,
    {
        title: "Jóga Nidra",
        subText: "Jóga Nidra jóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar.",
        button: "Sjá nánar",
    }
    ,
    {
        title: "Mjúkt jóga",
        subText: "Mjúkt jóga jóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar.",
        button: "Sjá nánar",
    }
    ,
    {
        title: "Meðgöngujóga",
        subText: "Meðgöngujóga jóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar.",
        button: "Sjá nánar",
    }
    ,
    {
        title: "Mömmujóga",
        subText: "Mömmujóga jóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar.",
        button: "Sjá nánar",
    }
    ,
    {
        title: "Parajóga",
        subText: "Parajóga jóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar.",
        button: "Sjá nánar",
    }
    ,
    {
        title: "Núvitund",
        subText: "Núvitund jóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar.",
        button: "Sjá nánar",
    }
    ,
    {
        title: "Krakkajóga",
        subText: "Krakkajóga jóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar.",
        button: "Sjá nánar",
    }
    ,
    {
        title: "Jóga fyrir 60+",
        subText: "60+ jóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar.",
        button: "Sjá nánar",
    }
    ,
    {
        title: "Karlajóga",
        subText: "Karlajóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar.",
        button: "Sjá nánar",
    }
    ,
    {
        title: "12 spor",
        subText: "12 spor til vellíðunar er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar.",
        button: "Sjá nánar",
    }
] // array af námskeiðum


/** functions **/
var AllClasses = function(AllClassesToDisplay){
    myDiv.innerHTML = ""; // Tæma það sem er í div

    for(var i = 0; i<AllClassesToDisplay.length;i++){
        var card = AllClassesToDisplay[i]
        AllClasses(jogaClass)
    }

 }
 var AllClasses = function(card){
    /** bæta við div-ið auka korti */
        myDiv.innerHTML += `
        <div class= "open_classes" >
            <h1>${classes.title}</h1>
            <p> ${classes.subText}</p>
            <button>${classes.button}</button>
        </div>
        `   
}


// Hér væri gott að gera breytu til að bæta nýju námskeiði við arrey-ið 


var makeNewclass = function() {
    // Ef fyllt er í öll svæðin þá búa til kort en annars setja missing stíl á input-ið
    if (headlineInput.value.length === 0) { 
        headlineInput.classList.add("missing")
    } else {
        headlineInput.classList.remove("missing")
    }

    var NewClass = {
        title: headlineInput.value,
        subText: textInput.value,
        button: buttonInput.value,
       
    }
    return NewClass
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



















    








