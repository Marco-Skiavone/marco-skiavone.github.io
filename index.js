let italian = true;
let flag = document.getElementById("eng-info");
console.log("Start, italian=", italian);


if(flag != null){
    flag.onclick = myFunc();
}


function myFunc(){
    console.log("Found.");

    if(italian){    // it gets in english
        document.getElementById("aboutMePar").innerText = "This is a test." ;
        italian = false;
        document.getElementById("actual_flag").src = "images/content/eng-flag.png";
        document.getElementById("actual_flag").alt = "ENG";
        document.getElementById("selectable_flag").src = "images/content/ita-flag.png";
        document.getElementById("selectable_flag").alt = "ITA";
        console.log("Text changed to English!");

    } else {     // it gets in italian
        document.getElementById("aboutMePar").innerText = "Questa è una prova." ;
        console.log("Text changed to Italian!");
        italian = true;
        document.getElementById("actual_flag").src = "images/content/ita-flag.png";
        document.getElementById("actual_flag").alt = "ITA";
        document.getElementById("selectable_flag").src = "images/content/eng-flag.png";
        document.getElementById("selectable_flag").alt = "ENG";
    }
}
