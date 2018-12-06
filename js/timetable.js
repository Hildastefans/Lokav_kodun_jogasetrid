/*XXXXXXXXXXXXXXXXXXXXXX    TÍMAR Í DAG     XXXXXXXXXXXXXXXXXXXXXXXXXXXX*/

var timetableArray = [ 
    {
        weekday: "Sunnudagur",
        classes: [ 
            {
                hours: "10:00 - 11:15",
                name: "Kundalini jóga",
            },       
        ]
    },
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
    },
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
    },
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
    },
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
    },
    {
        weekday: "Föstudagur",
        classes: [ 
            {
                hours: "10:00 - 11:15",
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
    },
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

var moveWidth = 448;

if(window.innerWidth < 500){
    moveWidth = 419
}

var moveDayNumber = 0;
var weekdayPosition = 0;

var changeDayFunction = function(directionParameter){
    var timetableElement = document.querySelector("#time_container")
    weekdayPosition += directionParameter
    
    if (weekdayPosition === -7) {
        // Komin á laugardag, fara áfram á sunnudag
        weekdayPosition = 0
        moveDayNumber = 0;
    } else if (weekdayPosition === 1) {
        // Á sunnudegi, fara til baka á laugardag
        weekdayPosition = -6
        moveDayNumber += moveWidth * weekdayPosition;
    } else {
        // Fara einn dag áfram eða til baka
        moveDayNumber += moveWidth * directionParameter;
    }

    timetableElement.style.left = moveDayNumber + "px";

    if(moveDayNumber <= timetableArray.length*move* -1){
       /* timetableElement.style.transition = "all 0s";*/
        timetableElement.style.left ="0px";
        moveDayNumber=0;
        setTimeout(()=>{
            timetableElement.transition = "all 2s";
            moveDayNumber += moveWidth*direction;
            timetableElement.style.left = moveDayNumber + "px";
            },200);
  
    }
}

// Þetta er fyrir Tímar í dag á forsíðu að hann sýni í námskeið sem opið eða lokað með lit á forsíðu.
var isClassOpenFunction = function(classNameParameter){

    for(var i = 0; i < allClassesArrayVariable.length; i++){
        if(classNameParameter === allClassesArrayVariable[i].title){
            if(allClassesArrayVariable[i].type === "open"){
                return true
            } else {
                return false
            }
        }
    }
}

var showTimetableFunction = function() {
    // sækja element-ið til að setja inn 
    var timetableElement = document.querySelector("#time_container")

    for(var i = 0; i<timetableArray.length; i++){
        var timetableArrayTemplete=`
        <div class="timeTableContainer_2">
            <div class="top_container">
                <h1>Tímar í dag</h1>
                <div class="selected_date_border"></div>
                <ul>
                    <li>${timetableArray[i].weekday}</li>
                    
                </ul>
                <button onclick="changeDayFunction(1)" class="or_left">&#60;</button>
                <button onclick="changeDayFunction(-1)" class="or_right">&#62;</button>
            </div>

            <div class="bottom_container">
                <div class="class_time"> 
        `

        for( var j = 0; j<timetableArray[i].classes.length; j++){
            var isOpenFunctionArgument = timetableArray[i].classes[j].name
            // Kalla í fallið sem skilar true ef námskeiðið er opið, annars false
            var isOpen = isClassOpenFunction(isOpenFunctionArgument)
            var classDiv
            
            if(isOpen){
                classDiv = `<div class="classOpen"></div>`
            } else {
                classDiv = `<div class="classClosed"></div>`
            }
            
            timetableArrayTemplete += `
                <div class="line first">
                    <div class="class_time_text_container">
                        <span class="classTime">${timetableArray[i].classes[j].hours}</span>
                    </div>
                    <div class="class_time_text_container">
                        <span>${timetableArray[i].classes[j].name}</span>
                    </div>
                    ${classDiv}
                </div>
            `   
        } // innri for loopa endar

        timetableArrayTemplete += `
                </div>
            </div>
        </div>
        `
        timetableElement.innerHTML += timetableArrayTemplete;
    }

    // Upphafsstilla á daginn í dag
    var today = new Date()
    var dayOfWeek = today.getDay()
    changeDayFunction(-dayOfWeek)
}






