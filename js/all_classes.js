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

/** functions **/
var displayAllClassesFunction = function(allClassesParameter){
    var containerAllClassesElement = document.getElementById("container_all_classes")
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
    var containerAllClassesElement = document.getElementById("container_all_classes")
    containerAllClassesElement.innerHTML += `
        <div class= ${divClass} >
            <h1>${jogaClassParameter.title}</h1>
            <p> ${jogaClassParameter.subText}</p>
            <button>${jogaClassParameter.button}</button>
        </div>
        `   
}

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

var connectAllClassesPageFunction = function () {
    var allClassesButtonElement = document.getElementById("all_classes_button")
    var openClassesButtonElement = document.getElementById("open_classes_button")
    var closeClassesButtonElement = document.getElementById("close_classes_button")

    allClassesButtonElement.onclick = onAllClassesButtonClick
    openClassesButtonElement.onclick = onOpenClassesButtonClick
    closeClassesButtonElement.onclick = onCloseClassesButtonClick

    displayAllClassesFunction(allClassesArrayVariable)
}

// Taka út þegar html-ið afrituð í pages
if (document.getElementById("all_classes_button")) connectAllClassesPageFunction()