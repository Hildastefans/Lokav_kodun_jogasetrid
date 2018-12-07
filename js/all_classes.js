/****** ÖLL NÁMSKEIÐ ******/

// Array á námskeiðum

var allClassesArrayVariable = [
    {
        title: "Kundalini jóga",
        subText: "Kundalini jóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar.",
        type: "open",
    }
    ,
    {
        title: "Hatha jóga",
        subText: "HATHA er ein þekktasta tegund jóga á vesturlöndunum. HA þýðir sól og THA þýðir máni. Unnið er með jógastöður (asana), öndun (pranayama) og slökun. Jafnvægi styrkist í innkirtlakerfinu, taugakerfinu, vöðvum, stoðkerfi og ónæmiskerfi.",
        type: "open",
    }
    ,
    {
        title: "Jóga Nidra",
        subText: "Jóga Nidra jóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar.",
        type: "open",
    }
    ,
    {
        title: "Mjúkt jóga",
        subText: "Mjúkt jóga jóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar.",
        type: "open",
    }
    ,
    {
        title: "Meðgöngujóga",
        subText: "Meðgöngujóga jóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar.",
        type: "closed",
    }
    ,
    {
        title: "Mömmujóga",
        subText: "Mömmujóga jóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar.",
        type: "closed",
    }
    ,
    {
        title: "Parajóga",
        subText: "Parajóga jóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar.",
        type: "closed",
    }
    ,
    {
        title: "Núvitund",
        subText: "Núvitund jóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar.",
        type: "closed",
    }
    ,
    {
        title: "Krakkajóga",
        subText: "Krakkajóga jóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar.",
        type: "closed",
    }
    ,
    {
        title: "Jóga fyrir 60+",
        subText: "60+ jóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar.",
        type: "closed",
    }
    ,
    {
        title: "Karlajóga",
        subText: "Karlajóga er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar.",
        type: "closed",
    }
    ,
    {
        title: "12 spor",
        subText: "12 spor til vellíðunar er stundum kallað móðir alls jóga. Það er markvisst jógakerfi með eflandi jóga- og öndunaræfingum, hugleiðslu, möntrum og slökun. Unnið er að því að því að lyfta orkunni upp, bæta jafnvægi orkustöðva og víkka vitund okkar.",
        type: "closed",
    }
] // array af námskeiðum

/** functions **/
var displayAllClassesFunction = function(allClassesParameter){
    var containerAllClassesElement = document.getElementById("container_all_classes")
    containerAllClassesElement.innerHTML = ""; // Tæma það sem er í container

    for(var i = 0; i<allClassesParameter.length;i++){
        var jogaClass = allClassesParameter[i]
        displayClassFunction(jogaClass, i)
    }

 }

 var displayClassFunction = function(jogaClassParameter, index){
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
            <button onClick="renderSingleClass(${index})">Sjá nánar</button>
        </div>
        `   
}
var renderSingleClass = function(index){

    var mainElement = document.querySelector("main")

    var singleClass = allClassesArrayVariable[index];

    mainElement.innerHTML = `<div class="background_image_theclass">
    <h1>Námskeið</h1>
</div>
<div class="gutter">  

    <section class=information>
        <div class="description_container">
            <h1>${singleClass.title}</h1>
            <p>
            ${singleClass.subText}
            </p>
            <button class="confirm_hatha">SKRÁ Á NÁMSKEIÐ</button>

            <div class="class_info">
                <div class="icon">
                    <img class="time" src="images/time.svg" alt="">
                    <img class="mattress" src="images/mattress.svg" alt="#">
                    <img class="barefoot" src="images/barefoot.svg" alt="#">
                    <img class="clothing" src="images/clothing.svg" alt="#">
                </div>  

                <div class="text">
                    <h2>Tíminn er 60 - 75 mín</h2>
                    <h2>Dýrur og annað á staðnum </h2>
                    <h2>Við eru berfætt í tímanum</h2>
                    <h2>Gott að vera í þæginlegum fötum</h2>
                </div>  
            </div>
        </div>

        <div class="description_container_2">
            <div class="description_content">
                <h1>${singleClass.title}</h1>
                <h3>
                    Mánudaga og Miðvikudaga kl. 17.15 - 18:15 <br>
                    Laugardaga kl. 10:00 - 11:15
                </h3>
                <div class="first_time">
                    <h2>Opin tími</h2>
                    <div class="color_open"></div>
                    <h2>Frír prufutími</h2>
                </div>
                <div class="info_line"></div>
                <h1 class="hatha_teacher">Kennarar</h1>
                <h3>Auður <span> / </span> Arna Rín <span> / </span>Þórgunnur<span> / </span>Þorgerður</h3>
            </div>
            <img src="images/mynd_stakt_namsk.png" class="jogamynd" alt="hatha_jóga">
        </div>
    </section>
</div>

<section class="price">
    <h1>Verðskrá</h1>

    <div class="price_container_left">
        <div class=price_left1>
            <h4>Einn mánuður</h4>
            <h4>Þrír mánuðir</h4>
            <h4>Haustönn</h4>
            <h4>Árskort</h4>
        </div>
        <div class=price_left2>
            <h4>13.500 kr.</h4>
            <h4>33.000 kr. <span>( 11.000 kr á mánuði )</span></h4>
            <h4>39.000 kr. <span>( 9.750 kr á mánuði )</span></h4>
            <h4>99.000 kr. <span>Eingreiðsla</span></h4>
        </div>
    </div>

    <div class="price_container_right">
        <div class=price_right1>
            <h4>10 tíma kort</h4>
            <h4>Stakur tími</h4>
            <h4>Áskrift</h4>
        </div>
        <div class=price_left2>
            <h4>17.000 kr.</h4>
            <h4>2.500 kr.</h4>
            <h4>8.500 kr. á mánuði <span> (6 mánaða binditími)</span></h4>
        </div>
    </div>
</section>
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