let italian = true;

document.getElementById("eng-info").onclick = function(){
    if(italian){
        document.getElementById("aboutMePar").innerText =
        "" ;
        console.log("Text changed to English!");
    } else {
        document.getElementById("aboutMePar").innerText =
        "" ;
        console.log("Text changed to Italian!");
    }
}